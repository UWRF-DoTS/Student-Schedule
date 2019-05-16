/**
 * factory windowLocationOnLoad
 *
 * Methods to be called on window loading. Scroll to where classes begin.
 *
 */

app.factory("windowLocationOnLoad", function(getScheduleTimestamp, getBrowserSize) {

    var theFactory = {};

    /**
     * Return array containing, as timestamps, the time the first class starts and the last class ends.
     *
     * @param combinedClasses - Array of class objects ($scope.combinedClasses
     * @returns array [earliestStart, latestEnd]
     */

    var calculateClassBounds = function(combinedClasses) {
        //Variables to check if the seen time is earlier than present earliest time, or after present latest time.
        //They will get updated when an earlier start time or later end time is found.
        //They are initially set to 1 before midnight, 1 after midnight.
        var earliestStart = 1441; //greatest possible time (hours * 60) is 1440 (midnight, end of day). Any time will be earlier than this.
        var latestEnd = -1; //lowest possible time is 0 (midnight, end of day). Any time will  be later than this.

        //Check if these times are the new earliest start or earliest end.
        var compareTimes = function(tempStart, tempEnd) {
            if (tempStart < earliestStart)
                earliestStart = tempStart;
            if (tempEnd > latestEnd)
                latestEnd = tempEnd;
        };

        //Loop through each object in combinedClasses to determine each class's day's start and end times
        for (var i = 0; i < combinedClasses.length; i++) {
            //Loop through the 'unique' array for each class
            for (var j = 0; j < combinedClasses[i].unique.length; j++) {
                //online classes will not have a timeStart
                if (combinedClasses[i].unique[j].timeStart !== null || combinedClasses[i].unique[j].timeEnd !== null) {
                    var tempStart = getScheduleTimestamp.makeTimestamp(combinedClasses[i].unique[j].timeStart);
                    var tempEnd = getScheduleTimestamp.makeTimestamp(combinedClasses[i].unique[j].timeEnd);
                    compareTimes(tempStart, tempEnd);
                }
                //Get start/end times for this instance of the class. (as timestamps)
            }
        }

        //return the results as an array
        return [earliestStart, latestEnd];

    };

    /**
     * Scroll down to where the first class starts.
     *
     * @param {number} day - number of the day of the week for the "selected" day
     * @param {object} combinedClasses
     */

    theFactory.setScrollLocation = function(day, combinedClasses) {

        console.log("setScrollLocation");

        var classTimesDimArray = calculateClassBounds(combinedClasses);

        //If in desktop view, scroll to the first class for the week
        if (getBrowserSize.getDims().width >= 800) {
            setTimeout(function () {
                window.scrollTo(0, classTimesDimArray[0] / 60 * 100);
            }, 1);
        }
        else { //If in mobile view, scroll to the first class or event of the selected day
           //get the events for the selected day
            var events = document.getElementsByClassName("single-event" + day + " event");

            //Find the earliest starting time
            var start = classTimesDimArray[0]; //record earliest class time
            //if any events start earlier, that's the new starting time
            for (var e = 0; e < events.length; e++) {
                var eventTime = getScheduleTimestamp.makeTimestamp(events[e].getAttribute("data-start"));
                if (eventTime < start) {
                    start =  eventTime;
                }
            }

            if (events.length === 0) {
                start = 560
            }

            //Set scroll to just before the first class
            setTimeout(function () {
                // console.log(start / 60 * 100);
                window.scrollTo(0, start / 60 * 60);
            }, 1);
        }

        var moreOptionsImg = document.getElementsByClassName("moreOptionsImg")[0];
        var dayOptionsModal = document.getElementsByClassName("dayOptionsModal")[0];
        var dayOptionsImg = document.getElementsByClassName("dayIcon")[0];
        moreOptionsImg.classList.add("isScrolled");
        dayOptionsModal.classList.add("isScrolled");
        dayOptionsImg.classList.add("isScrolled");


    };

    return theFactory;

});