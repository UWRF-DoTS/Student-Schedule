/**
 * Factory singleEventMaker
 *
 * Makes <li class="single-event"> elements representing the individual class times in the HTML.
 *
 * Contains:
 * - makeEvents() - method to determine what events need to be made, and call createSingleEvent()
 *
 * - createSingleEvent() - makes one singleEvent
 *
 * - resetSingleEvents() - removes all present singleEvents
 *
 */

/*
The structure of a single-event is:
<li className="single-event"
data-start="07:45 AM" data-end="09:00 AM" data-name="CSIS 333" data-title="Database Management Systems"
data-description="This is the course description ... " data-instructor="[&quot;Abuhejleh,Ahmad J&quot;]"
style="height: 125px; top: 74px; background-color: rgb(255, 178, 73); opacity: 1; visibility: visible;">
    <span className="event-time">07:45  - 09:00 </span>
    <em className="event-name">CSIS 333</em>
    <em className="event-loc">South Hall 12A</em>
</li>

*/

app.service('singleEventMaker', ["getScheduleTimestamp", "openEventModal", "fakeClassesFactory", "checkDateBounds", "calculateEventWidths", function (getScheduleTimestamp, openEventModal, fakeClassesFactory, checkDateBounds, calculateEventWidths) {

        //assigning "this" to a new variable because: If you leave this service, "this" no longer exists, so you save it to a reference point so that you have something to reference.
        self = this;

        /**
         * Goes through each group of events, and for each single-event that needs to be made, call createSingleEvent function
         * @param $scope - the $scope from controller
         */
        this.makeEvents = function ($scope) {

            /*--------------------------------------MAKE CLASS EVENTS------------------------------------------------------------*/
            /*Loop through combined classes, and their respective "unique" arrays. For each "unique" instance, check which days have classes,
              and for each create a <li class="single-event"> element with all the required information for that class.
              If that day has a break (no classes), do not put classes that day. */

            for (var k = 0; k < $scope.combinedClasses.length; k++) { //loop through combined classes
                for (var l = 0; l < $scope.combinedClasses[k].unique.length; l++) { //loop through unique

                    //Make the "single-event" <li> element for each class instance, using a self-defined method that it calls
                    if ($scope.combinedClasses[k].unique[l].days.sunday === "Y") {
                        if (checkDateBounds.checkDateIsInTerm($scope.scheduleBeginning, $scope.scheduleEnd, $scope.currentWeek[0])) //if in bounds of the schedule
                        //if in the bounds of that class's start/end dates
                            if ($scope.currentWeek[0].isSameOrAfter($scope.combinedClasses[k].dateStart) && $scope.currentWeek[0].isSameOrBefore($scope.combinedClasses[k].dateEnd)) {
                                self.createSingleEvent(k, l, 0, $scope, $scope.combinedClasses, "class");
                            }
                    }
                    if ($scope.combinedClasses[k].unique[l].days.monday === "Y") {
                        if (checkDateBounds.checkDateIsInTerm($scope.scheduleBeginning, $scope.scheduleEnd, $scope.currentWeek[1]))
                            if ($scope.currentWeek[1].isSameOrAfter($scope.combinedClasses[k].dateStart) &&
                                $scope.currentWeek[1].isSameOrBefore($scope.combinedClasses[k].dateEnd)) {
                                self.createSingleEvent(k, l, 1, $scope, $scope.combinedClasses, "class");
                            }
                    }
                    if ($scope.combinedClasses[k].unique[l].days.tuesday === "Y") {
                        if (checkDateBounds.checkDateIsInTerm($scope.scheduleBeginning, $scope.scheduleEnd, $scope.currentWeek[2]))
                            if ($scope.currentWeek[2].isSameOrAfter($scope.combinedClasses[k].dateStart) &&
                                $scope.currentWeek[2].isSameOrBefore($scope.combinedClasses[k].dateEnd)) {
                                self.createSingleEvent(k, l, 2, $scope, $scope.combinedClasses, "class");
                            }
                    }
                    if ($scope.combinedClasses[k].unique[l].days.wednesday === "Y") {
                        if (checkDateBounds.checkDateIsInTerm($scope.scheduleBeginning, $scope.scheduleEnd, $scope.currentWeek[3]))
                            if ($scope.currentWeek[3].isSameOrAfter($scope.combinedClasses[k].dateStart) &&
                                $scope.currentWeek[3].isSameOrBefore($scope.combinedClasses[k].dateEnd)) {
                                self.createSingleEvent(k, l, 3, $scope, $scope.combinedClasses, "class");
                            }
                    }
                    if ($scope.combinedClasses[k].unique[l].days.thursday === "Y") {
                        if (checkDateBounds.checkDateIsInTerm($scope.scheduleBeginning, $scope.scheduleEnd, $scope.currentWeek[4]))
                            if ($scope.currentWeek[4].isSameOrAfter($scope.combinedClasses[k].dateStart) &&
                                $scope.currentWeek[4].isSameOrBefore($scope.combinedClasses[k].dateEnd)) {
                                self.createSingleEvent(k, l, 4, $scope, $scope.combinedClasses, "class");
                            }
                    }
                    if ($scope.combinedClasses[k].unique[l].days.friday === "Y") {
                        if (checkDateBounds.checkDateIsInTerm($scope.scheduleBeginning, $scope.scheduleEnd, $scope.currentWeek[5]))
                            if ($scope.currentWeek[5].isSameOrAfter($scope.combinedClasses[k].dateStart) &&
                                $scope.currentWeek[5].isSameOrBefore($scope.combinedClasses[k].dateEnd)) {
                                self.createSingleEvent(k, l, 5, $scope, $scope.combinedClasses, "class");
                            }
                    }
                    if ($scope.combinedClasses[k].unique[l].days.saturday === "Y") {
                        if (checkDateBounds.checkDateIsInTerm($scope.scheduleBeginning, $scope.scheduleEnd, $scope.currentWeek[6]))
                            if ($scope.currentWeek[6].isSameOrAfter($scope.combinedClasses[k].dateStart) &&
                                $scope.currentWeek[6].isSameOrBefore($scope.combinedClasses[k].dateEnd)) {
                                // self.createSingleEvent(k, l, 6, $scope);
                                self.createSingleEvent(k, l, 6, $scope, $scope.combinedClasses, "class");
                            }
                    }
                }
            }

            //create events and breaks
            self.makeBreaksAndEvents("event", $scope);
            self.makeBreaksAndEvents("break", $scope);

            // windowLocationOnLoad.setScrollLocation($scope.selectedDay.day(), $scope.combinedClasses);

        };

        /**
         * "makeBreaksAndEvents" - creates an array of events or breaks occurring this week and calls self.createSingleEvent to make them.
         * Called by self.createEvents for both breaks and events.
         * @param {string} type - either "event"/"events" or "break"/"breaks", tells what to make
         * @param $scope - $scope
         */

        self.makeBreaksAndEvents = function (type, $scope) {

            switch (type) {
                case "event":
                case "events":
                    var combined = $scope.combinedEvents;
                    break;
                case "break":
                case "breaks":
                    combined = $scope.combinedBreaks;
                    break;
            }



            for (var i = 0; i < combined.length; i++) {

                var arrayOfEvents = [];

                //for events that aren't just one day, momentStart will increment until it reaches momentEnd and serve as pointer to check days that it could occur
                var momentStart = moment(combined[i].dateStart);
                var momentEnd = moment(combined[i].dateEnd);

                //If momentStart is before the beginning of this week, and the event isn't over before this week, set momentStart to the beginning of the week.
                //This skips looping for each day before this week.
                //It would have to be an extended or repeating event for this to be true
                if (momentStart.isBefore($scope.currentWeek[0], "date") &&
                    momentEnd.isAfter($scope.currentWeek[0], "date")) {
                    momentStart = $scope.currentWeek[0].clone();
                }

                var loop = true;

                while (loop) {
                    //if momentStart is after this week or momentEnd before this week, end loop
                    if (momentStart.isAfter($scope.currentWeek[6], "date") || momentEnd.isBefore($scope.currentWeek[0], "date")) {
                        loop = false;
                    } else {
                        if (combined[i].days[momentStart.day()] === "Y") {
                            arrayOfEvents.push(momentStart.clone());
                        }

                        if (momentStart.isSame(momentEnd))
                            loop = false;
                        else {
                            momentStart.add(1, "days"); //go to next day of multi-day break or repeating break
                        }
                    }
                }

                for (var e = 0; e < arrayOfEvents.length; e++) {
                    switch (type) {
                        case "event":
                        case "events":
                            //i is index of $combinedEvents/Breaks we are at
                            self.createSingleEvent(i, 0, arrayOfEvents[e].day(), $scope, combined, "event");
                            break;
                        case "break":
                        case "breaks":
                            self.createSingleEvent(i, 0, arrayOfEvents[e].day(), $scope, combined, "break");
                            break;
                    }

                }
            }

        };

        /**
         * "createSingleEvent" - creates a single event <li> element for the designated event
         *      - Will create two single events: one that appears in mobile, one that appears in desktop. That's because they are different sizes.
         *
         * @param {number} m - index of eventsArray
         * @param {number} n - index of eventsArray.unique ()
         * @param {number} day - will be a value 0-6 (representing sunday-saturday); is the day that the single-event is to be placed in
         * @param $scope - passes $scope of controller
         * @param {array} eventsArray - $scope.combinedClasses, $scope.combinedEvents, or $scope.combinedBreaks
         *@param {string} eventType - "class", "event" (non-class event), or "break"
         */
        self.createSingleEvent = function (m, n, day, $scope, eventsArray, eventType) {

            //Get the <ul> element that the <li> item will be placed in (Which day of the week.)
            var ul = document.querySelector("[data-groupNum = '" + day + "']"); //.document.querySelector is a powerful selector tool that in this case gets the element based on a desired attribute
            //Create a new li element
            var li = document.createElement('li'); //single-event for desktop

            //Add attributes
            if (eventType === "class") {
                //the class "single-event" defines this as a single-event to receive the CSS all single-events receive. single-event + day (single-event1, single-event2, ...7)
                //are used to identify them in the context of their days. Used by calculateEventWidths, and not in styles.css
                li.className = "single-event single-event" + day + " class";
                li.setAttribute("data-start", eventsArray[m].unique[n].timeStart); //Time the class starts
                li.setAttribute("data-end", eventsArray[m].unique[n].timeEnd); //Time the class ends
                li.setAttribute("data-name", eventsArray[m].subjectId + " " + eventsArray[m].catalogNumber); //The number of the course (355 for "CSIS 355")
                li.setAttribute("data-title", eventsArray[m].title); //The name of the class ("Calculus I")
                li.setAttribute("data-description", eventsArray[m].courseDescription); //The longer description of the class
            } else if (eventType === "event") {
                li.className = "single-event single-event" + day + " event";
                li.setAttribute("data-start", eventsArray[m].timeStart);
                li.setAttribute("data-end", eventsArray[m].timeEnd);
                li.setAttribute("data-title", eventsArray[m].title);
                li.setAttribute("data-description", eventsArray[m].courseDescription);
            } else if (eventType === "break") {
                li.className = "single-event single-event" + day + " break";
                li.setAttribute("data-start", eventsArray[m].timeStart);
                li.setAttribute("data-end", eventsArray[m].timeEnd);
                li.setAttribute("data-title", eventsArray[m].title);
                li.setAttribute("data-description", eventsArray[m].courseDescription);
            }

            //------------------------------------------------------------------------------------------------------------//
            //----------------------------------------Being setting height/top style elements ----------------------------//

            //timelineStart stores the first time that is in the "timeline" list
            var timelineStart = 0;

            //height in pixels of each half-hour time period
            var eventSlotHeight = 50;
            var eventSlotHeightMobile = 30;

            //--------------------------END OF ERROR

            if (eventType === "class") {
                //store time stamp of classStart in a variable, as it will be used multiple times later.
                var classStart = getScheduleTimestamp.makeTimestamp(eventsArray[m].unique[n].timeStart);
                //numMinutes will hold the timestamp for long the class is (will be 50 for a 50-minute class, 75 for an 1:15 class)
                var numMinutes = getScheduleTimestamp.makeTimestamp(eventsArray[m].unique[n].timeEnd) - classStart;

                //calculate how many pixels high; one hour is 2 * eventSlotHeight pixels
                //Calculation: (numMinutes / 60) * (2 * eventSlotHeight) pixels  ==  (percentage of an hour) * number of pixels in an hour
                var pixelHeight = ((numMinutes / 60) * (2 * eventSlotHeight));
                li.style.height = pixelHeight + "px";

                //stores how many pixels down in the timeline it should start
                //Calculation: (class start - timeline start) * ( (2 * eventSlotHeight) / 60)  (in timestamps)
                //So, if timeline starts at 7:00am (420) and first class is at 8:00am (480) it will be 480-420, which is 60 (one hour)
                //in order to scale that to the actual pixel height of the timeline, multiply by (100/60)
                var pixelTop = (classStart - timelineStart) * ((2 * eventSlotHeight) / 60);
                li.style.top = (pixelTop - 1) + "px"; //the -1 allows the top of the event to cover the top dividing line, rather than being just below it
            } else if (eventType === "event") {
                classStart = getScheduleTimestamp.makeTimestamp(eventsArray[m].timeStart);
                numMinutes = getScheduleTimestamp.makeTimestamp(eventsArray[m].timeEnd) - classStart;

                pixelHeight = ((numMinutes / 60) * (2 * eventSlotHeight));
                li.style.height = pixelHeight + "px";

                pixelTop = (classStart - timelineStart) * ((2 * eventSlotHeight) / 60);
                li.style.top = (pixelTop - 1) + "px"; //the -1 allows the top of the event to cover the top dividing line, rather than being just below it
            } else if (eventType === "break") {
                //make break last entire day
                li.style.height = "2400px";
                li.style.backgroundColor = "grey";
            }
            //--------------------------------------------End setting height/top style elements --------------------------//
            //------------------------------------------------------------------------------------------------------------//

            /*There are a few options for how to assign instructors. Given classes can have multiple instructors (i.e. Instructor A
             teaches Monday, Instructor B teaches Wednesday), I have an array of the different instructors that could be associated with a class.
             When they are set, it only checks if the professor has been added to the instructor[] array, and doesn't necessarily associate
             the instructor with that day. I have chosen to keep it that way, and simply list all instructors without tying them to a specific day.
             */

            if (eventType === "class") {
                /*
                Have an array of the different instructors that could be associated with a class.
                When they are set, it only checks if the professor has been added to the instructor[] array, and doesn't necessarily associate
                the instructor with a specific day.
                 */
                var instructors = []; //array to hold all instructors

                //Store all instructors in the instructors array
                for (var i = 0; i < eventsArray[m].instructor.length; i++) {
                    instructors.push(eventsArray[m].instructor[i]);
                }

                /* Store the array in the element as the "data-instructor" attribute by turning the array into a string with JSON.stringify(). To retrieve it,
                simply get the string and parse back into an array. */
                li.setAttribute("data-instructor", JSON.stringify(instructors));

                //Add the <li> element to the correct <ul> element
                ul.appendChild(li);

                //create span object (class = "event-time") which will hold the time of the class
                var span = document.createElement("span");
                span.className = "event-time";
                //determine start/end times without the "AM/PM"
                var startNoAmPm = eventsArray[m].unique[n].timeStart.substring(0, eventsArray[m].unique[n].timeStart.length - 2);
                var endNoAmPm = eventsArray[m].unique[n].timeEnd.substring(0, eventsArray[m].unique[n].timeEnd.length - 2);
                span.innerHTML = startNoAmPm + " - " + endNoAmPm;

                //create em object ("event-name") which will store "CSIS 333", "MUS 101", etc
                var emName = document.createElement("em");
                emName.className = "event-name";
                emName.innerHTML = eventsArray[m].subjectId + " " + eventsArray[m].catalogNumber;

                //create em object ("event-loc") which will store "South Hall 16", "North Hall 18", etc.
                var emLoc = document.createElement("em");
                emLoc.className = "event-loc";
                emLoc.innerHTML = eventsArray[m].unique[n].location;

                //add span/em to DOM
                li.appendChild(span);
                li.appendChild(emName);
                li.appendChild(emLoc);

                //set the background color of the single-event
                li.style.backgroundColor = $scope.listOfColors[m];
                li.style.opacity = "1";

            } else if (eventType === "event") {
                ul.appendChild(li);

                //create span object (class = "event-time") which will hold the time of the class
                span = document.createElement("span");
                span.className = "event-time";
                //determine start/end times without the "AM/PM"
                startNoAmPm = eventsArray[m].timeStart.substring(0, eventsArray[m].timeStart.length - 2);
                endNoAmPm = eventsArray[m].timeEnd.substring(0, eventsArray[m].timeEnd.length - 2);
                span.innerHTML = startNoAmPm + " - " + endNoAmPm;

                //create em object ("event-name") which will store the title of this non-class event
                emName = document.createElement("em");
                emName.className = "event-name";
                emName.innerHTML = eventsArray[m].title;

                //create em object ("event-loc") which will store "South Hall 16", "North Hall 18", etc.
                emLoc = document.createElement("em");
                emLoc.className = "event-loc";
                emLoc.innerHTML = eventsArray[m].location;

                //add span/em to DOM
                li.appendChild(span);
                li.appendChild(emName);
                li.appendChild(emLoc);

                //set the background color of the single-event
                li.style.backgroundColor = $scope.listOfEventColors[m];
                li.style.opacity = "1";

            } else { //if the single-event is a break
                ul.appendChild(li);
                //create em object ("event-name") which will store the title of this break
                emName = document.createElement("em");
                emName.className = "event-name";
                emName.innerHTML = eventsArray[m].title;
                li.appendChild(emName);
            }



            /* DUPLICATE SINGLE-EVENT FOR MOBILE SIZE. Since mobile / desktop have different sizes, there will be 2 elements per event. When in mobile size,
             * only the mobile ones are visible. Vice-versa for desktop. */
            var mobileLi = li.cloneNode(true);
            /* Set correct height */
            if (eventType === "break") {
                mobileLi.style.height = "1490px";
            }
            else {
                pixelHeight = pixelHeight * (eventSlotHeightMobile / eventSlotHeight); /* The ratio of mobile-size to desktop-size */
                pixelTop = pixelTop * (eventSlotHeightMobile / eventSlotHeight);
                mobileLi.style.height = pixelHeight + "px";
                mobileLi.style.top = pixelTop + "px";
            }
            ul.appendChild(mobileLi);

            mobileLi.classList.add("mobileEvent");
            li.classList.add("desktopEvent");

            /* The following adjustments must be made after the element is added to the DOM. */
            var liArr = [li, mobileLi];
            liArr.forEach(function(element) {
                if (eventType === "class") {
                    //----------------------------------------------Set event turning semi-opaque when hovered--------------------//
                    element.onmouseenter = function () {
                        // this.style.opacity = '.8';
                        this.style.backgroundColor = $scope.listOfColors2[m];
                    };
                    element.onmouseleave = function () {
                        // this.style.opacity = '1';
                        this.style.backgroundColor = $scope.listOfColors[m];
                    };
                    //--------------------------------------------End turning event semi-opaque-----------------------------------//

                    //Add onclick function to open the modal
                    element.onclick = function () {
                        openEventModal.openModal(element, m, n, $scope, $scope.combinedClasses, "class")
                    }; //pass "m" so that openEventModal knows that class in combinedClasses to reference. "n" So it knows which instance of "unique"
                }
                else if (eventType === "event") {
                    //----------------------------------------------Set event turning semi-opaque when hovered--------------------//
                    element.onmouseenter = function () {
                        // this.style.opacity = '.8';
                        this.style.backgroundColor = $scope.listOfEventColors2[m];
                    };
                    element.onmouseleave = function () {
                        // this.style.opacity = '1';
                        this.style.backgroundColor = $scope.listOfEventColors[m];
                    };
                    //--------------------------------------------End turning event semi-opaque-----------------------------------//

                    //Add onclick function to open the modal
                    element.onclick = function () {
                        openEventModal.openModal(element, m, n, $scope, $scope.combinedEvents, "event")
                    }; //pass "m" so that openEventModal knows that class in combinedClasses to reference. "n" So it knows which instance of "unique"
                }
            });


        }; //end .createSingleObject

        /**
         remove all ".single-event" elements present
         */
        this.resetSingleEvents = function () {
            var sEvents = document.querySelectorAll(".single-event");
            sEvents.forEach(function (singleEvent) {
                singleEvent.remove();
            });

        };

        return this;

    }]);