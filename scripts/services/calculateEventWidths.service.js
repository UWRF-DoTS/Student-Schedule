/**
 * Service calculateEventWidths
 *
 * Determines how wide each event should be; this becomes applicable when events are overlapping.
 *
 Algorithm for placing events on calendar and obtaining their dimensions
 1. Think of each day like an unlimited grid, with just a left edge.
 2. Attempt to put an event as close to the left edge as it can be. Consider it to be in a column.
 3. If it would overlap another element, set it one column over. If there is already a column there and it overlaps something there,
 continue the process (moving it right 1 column).
 4. Then, when a connected group of events is placed, (a group of columns) their actual widths will be 1/n of the maximum number of columns used by that group.

 Visualized:


 |aaaaaaaaaaaaaaaaaaaaaaaaaaaaa|
 |aaaaaaaaaaaaaaaaaaaaaaaaaaaaa|
 |aaaaaaaaaaaaaaaaaaaaaaaaaaaaa|
 |                             |
 |                             |
 |bbbbbbbbbbbbbbbcccccccccccccc|
 |bbbbbbbbbbbbbbbcccccccccccccc|
 |bbbbbbbbbbbbbbbcccccccccccccc|
 |bbbbbbbbbbbbbbbcccccccccccccc|
 |bbbbbbbbbbbbbbb              |
 |bbbbbbbbbbbbbbb              |
 |bbbbbbbbbbbbbbb              |
 |bbbbbbbbbbbbbbbeeeeeeeeeeeeee|
 |bbbbbbbbbbbbbbbeeeeeeeeeeeeee|
 |bbbbbbbbbbbbbbb              |
 |                             |
 |                             |

 - a is in its own group.
 - b, c, and e are in another group, made of 2 columns.
 - one of those columns only has b; the other has c and e.


 */


app.service('calculateEventWidths', function (getScheduleTimestamp) {

    self = this;

    this.setEventWidths = function () {

        //----------Loop through the "events" array, and and add the DOM <single-event> objects---------------//

        //Do this for both single-events in desktop size, and mobile size (.single-event .mobileEvent and .single-event .desktopEvent)
        var classNames = ["mobileEvent", "desktopEvent"];

        //for each mobile event, and desktop event
        classNames.forEach(function (className) {
            //This is an array of 7 arrays of objects containing: each event's start time, end time, and single-event DOM object
            var allEvents = [];

            //iterate over the week
            for (var i = 0; i < 7; i++) {

                //get the single-events for this day (all on Sunday have class "single-event0", monday "single-event1", etc.)
                var singleEventClassName = "single-event" + i + " " + className;
                var singleEvents = document.getElementsByClassName(singleEventClassName);

                //array to store this single day's objects
                var eventsArray = [];

                //the following converts the HTMLCollection (singleEvents) into an array.
                var singleEventsArray = Array.prototype.slice.call(singleEvents);

                //--------Remove all single-events that are supposed to be hidden
                //Classes are hidden based on adding the "hideBreaks", "hideClasses", "hideEvents" classes to the cd-schedule element.
                var cdSchedule = document.getElementsByClassName("cd-schedule")[0];
                for (var h = 0; h < singleEventsArray.length; h++) {

                    if (cdSchedule.classList.contains("hideBreaks") && singleEventsArray[h].classList.contains("break")) {
                        singleEventsArray.splice(h, 1);
                        h--; //decrement h because the next element will have been moved to the position h is currently at.
                             //decrementing means that the next time the loop is run, h will be in the correct spot.
                    } else if (cdSchedule.classList.contains("hideClasses") && singleEventsArray[h].classList.contains("class")) {
                        singleEventsArray.splice(h, 1);
                        h--;
                    } else if (cdSchedule.classList.contains("hideEvents") && singleEventsArray[h].classList.contains("event")) {
                        singleEventsArray.splice(h, 1);
                        h--;
                    }
                }

                //iterate over the single-events, converting them into a usable object and putting into the eventsArray
                eventsArray = singleEventsArray.map(function (singleEvent) {
                    var tempObject = {};
                    tempObject.startTime = singleEvent.getAttribute("data-start");
                    tempObject.endTime = singleEvent.getAttribute("data-end");
                    tempObject.singleEvent = singleEvent;
                    tempObject.top = getScheduleTimestamp.makeTimestamp(tempObject.startTime);
                    tempObject.bottom = getScheduleTimestamp.makeTimestamp(tempObject.endTime);
                    return tempObject;
                });

                //sort each day in the eventsArray by timeStart
                eventsArray.sort(function (a, b) {
                    var aStart = getScheduleTimestamp.makeTimestamp(a.startTime);
                    var bStart = getScheduleTimestamp.makeTimestamp(b.startTime);
                    //if a is smaller than be, sort it first
                    if (aStart < bStart)
                        return -1;
                    else if (aStart > bStart)
                        return 1;
                    //if both start times are the same, check end time
                    else {
                        var aEnd = getScheduleTimestamp.makeTimestamp(a.endTime);
                        var bEnd = getScheduleTimestamp.makeTimestamp(b.endTime);
                        //if a ends before b, sort it first
                        if (aEnd < bEnd)
                            return -1;
                        else if (aEnd > bEnd)
                            return 1;
                        //if both start and end at the same time, leave as are
                        else
                            return 0;
                    } //end of else
                });

                //add the newly sorted array to the larger week array
                allEvents.push(eventsArray);

            } //end looping through each day of week ("for i" loop)

            //-----------------------------All events are now put into an array together and are sorted------------------------

            for (var e = 0; e < allEvents.length; e++) { //loop through the week

                //each day, reset variables
                var columns = [];
                var lastEventEnding = null;

                for (var ev = 0; ev < allEvents[e].length; ev++) { //loop through all events occurring this day
                    //Check if a new group-of-columns needs to be started
                    if (lastEventEnding !== null && allEvents[e][ev].top >= lastEventEnding) {

                        //The latest event is later than any of the events in the current group-of-columns. There is no overlap.
                        //Start a new event group
                        columns = []; //start a new group-of-columns
                        lastEventEnding = null;
                    }

                    //Try to place this event inside the existing columns
                    var placed = false;
                    for (var j = 0; j < columns.length; j++) {
                        var col = columns[j]; //store the currently-viewed column
                        //If the new event doesn't overlap the last event in columns[j] ("col"),
                        //add it to columns[i]
                        if (!collidesWith(col[col.length - 1], allEvents[e][ev])) {
                            col.push(allEvents[e][ev]);
                            placed = true;
                            break; //end searching for a column to place in
                        }
                    }

                    //Event could not be placed, so add a new column to the current group-of-columns.
                    if (!placed) {
                        columns.push( [ allEvents[e][ev] ] ); //push a new array, with only this event
                    }

                    if (lastEventEnding === null || allEvents[e][ev].top >= lastEventEnding) {
                        lastEventEnding = allEvents[e][ev].bottom;
                    }
                    if (columns.length > 0) {
                        //this will run every time a new event is added, so it's run an unnecessary amount of times. However, given that this algorithm
                        //requires columns[] to be occasionally reset, it can't be placed after "ev" loop, before next "e" loop.
                        //all runs but the last one get overwritten. And that's fine.
                        packEvents(columns, e);
                    }
                } //end looping through allEvents ("ev" loop)
            } //end looping through each day ("e")
        }); //end of .forEach
    }; //end of this.setEventWidths

    //Returns true if the two events (blocks of time) overlap in any way.
    var collidesWith = function (a, b) {
        return a.bottom > b.top && a.top < b.bottom;
    };

    //Determine how far to the left in the day, and how wide, each event should be
    var packEvents = function (columns) {
        //loop through the group of columns
        for (var i = 0; i < columns.length; i++) {
            var col = columns[i];
            for (var j = 0; j < col.length; j++) { //for each event in this column,
                col[j].singleEvent.style.left = ((i / columns.length) * 100 + "%");
                col[j].singleEvent.style.width = 1 / columns.length * 100 + "%";



                //issue: An issue with this algorithm is the following:
        /**

                |                             |
                |                             |
                |bbbbbbbbbbbbbbbcccccccmmmmmmm|
                |bbbbbbbbbbbbbbbcccccccmmmmmmm|
                |bbbbbbbbbbbbbbbcccccccmmmmmmm|
                |bbbbbbbbbbbbbbbcccccccmmmmmmm|
                |bbbbbbbbbbbbbbb              |
                |bbbbbbbbbbbbbbb              |
                |bbbbbbbbbbbbbbb              |
                |bbbbbbbbbbbbbbbeeeeeee       |
                |bbbbbbbbbbbbbbbeeeeeee       |
                |bbbbbbbbbbbbbbb              |
                |                             |
                |                             |
        */
                //Check if any events in following columns conflict with this one. If there are not, then extend this event all the way to the right.
                //make i2 one more than i, as it is checking all columns after the current one (that is being looped through in i-for-loop)
                for (var i2 = i + 1; i2 < columns.length; i2++) {
                    for (var j2 = 0; j2 < columns[i2].length; j2++) {
                        //compare if the event currently being examined (columns[i][j]) *doesn't* conflict with events in the next column
                        if (!collidesWith(columns[i][j], columns[i2][j2])) {
                            //left position won't change, but the width will extend all the way to the right.
                            //The index of this column in its group of columns is i, which also how many elements are to its left.
                            //Therefore, (columns.length - i) / columns.length is the percentage of width it will take up.
                            //i.e., if there are 3 groups of columns (columns.length) and this is the second column, i will be 1,
                            //columns.length - i is 2, and (columns.length - j) / columns.length is 2/3
                            col[j].singleEvent.style.width = (columns.length - i) / columns.length * 100 + "%";
                        }
                    } //i
                } //i2
            } //end of j-loop (each event in column)
        } //end of i-loop (group of columns)
    };

    return this;

}); //end of the factory