/**
 * Factory dateServices
 *
 * Provides a variety of functions for receiving and manipulating dates using the moment.js library
 *
 * Factory object contains:
 * - function "setCurrentWeek" - sets an array of 7 Moment objects representing the current week. This is the initially called function upon page load.
 *   It sets to the current week unless the current week is not in the dates of a student's classes. In that case, it starts at their first week.
 *   i.e., if today is Tuesday the 8th, the array will look like: [Sunday the 6th, Monday the 7th ... Friday the 11th, Saturday the 12th] (except as Moment objects)
 *  @param {object} - scheduleBeginning - Moment object that is the schedule start bound
 *  @parma [object} - scheduleEnd - Moment object that is the schedule end bound
 *  @returns {array} currentWeek - array as described above
 *
 *
 *  - function "checkArrows" - Checks to see if an arrow displayed would lead to out of schedule's bounds (before the first class start or end).
 *    It is called any time the schedule is made or updated (via using an arrow).
 *   @param {array} currentWeek - array of one week's Moment() objects, representing the currently displayed week
 *   @param {object} scheduleBeginning - Moment object that is the earliest bound of the calendar
 *   @param {object} scheduleEnd - Moment object that is the latest bound of the calendar
 */

app.factory('dateServices', function() {

    var theFactory = [];

    theFactory.setCurrentWeek = function(scheduleBeginning, scheduleEnd) {
        //initialize array of Moment objects representing the current week

        var currentWeek = [];

        //if the actual date is within schedule bounds
        if (moment() > scheduleBeginning && moment() < scheduleEnd) {
            //set each day in the current week
            for (var i = 0; i < 7; i++) {
                var diffInDays = i - moment().day();
                currentWeek[i] = moment().add(diffInDays, "days");
            }
        }

        //if the actual day is not in the schedule bounds
        //TODO: The "if" should really only be checking if it's before the schedule start.... if the term is over, it's just checking
        //TODO: if it's before the new next term. Set this up so that if there is no next term, it does...... something. That's the issue you'd run into.
        else {
            for (i = 0; i < 7; i++) {
                //Since performing an operation such as .add() on a moment increments the actual moment, clone this before adjusting
                var firstDay = scheduleBeginning.clone();
                diffInDays = i - firstDay.day();
                currentWeek[i] = firstDay.add(diffInDays, "days");
            }
        }

        return currentWeek;
    };

    /**
    * Makes a new array of 7 strings to be used in <top-info> elements
    *   i.e. ["Jan 27th", "Jan 28th" ... ] (always beginning on Sunday)
    *  @param {array} currentWeek - array of Moment objects, sunday-saturday for one week
    *  @param {boolean} firstTime - true if being called upon page initial load. false if being called upon a week change
    *  @returns {array} weekHeaders - array of Strings, Sunday-Saturday for one week
    */
    theFactory.currentWeekHeaders = function(currentWeek, firstTime) {
        //array containing strings representing each day of week for purpose of being used in the "top-info" elements
        var weekHeaders = [ [],[] ];
        var eventsGroups = document.getElementsByClassName("events-group");
        for (var i = 0; i < currentWeek.length; i++) {
            weekHeaders[0].push(currentWeek[i].format("MMM"));
            weekHeaders[1].push(currentWeek[i].format("Do"));
            if (currentWeek[i].isSame(moment(), "day")) { //if the currently selected eventsGroup (day) is today's date, mark it as such
                if (firstTime) //This will be true if this is being called upon the browser's first load. If it's called by changing the week, won't trigger this.
                    eventsGroups[i].classList.add("selected"); //make the current day the default selected class, so it will be the initially viewed one in mobile
            }
        }

        return weekHeaders;
    };

    /**
     *  Adjust dates to the previous or following week.
     *  @param {array} currentWeek - array of one week's Moment objects
     *  @param {boolean} forward - true if moving forward one week, false if moving back
     *  @returns {array} newWeek - array of one week's Moment objects, updated
     */

    theFactory.changeWeek = function(currentWeek, forward) {
        //array of new week objects to be returned
        var newWeek = [];
        //if forward is true, increment each day by 7 days. Else, decrement them by 7 days.
        if (forward)
            var change = 7;
        else
            change = -7;
        for (var i = 0; i < currentWeek.length; i++) {
            newWeek[i] = currentWeek[i].add(change, "days");
        }

        return newWeek;
    };

    theFactory.checkArrows = function(currentWeek, scheduleBeginning, scheduleEnd, selectedDay) {
        var leftArrow = document.getElementsByClassName("lastWeek")[0];
        var rightArrow = document.getElementsByClassName("nextWeek")[0];

        var previousDay = selectedDay.clone();
        previousDay.add(-1, "days");

        var nextDay = selectedDay.clone();
        nextDay.add(1, "days");

        //LEFT ARROW
        if (currentWeek[0].isSameOrBefore(scheduleBeginning)) {
            //disable left arrow for desktop
            leftArrow.classList.add("isScheduleBound");
        }
        else {
            //enable left arrow
            leftArrow.classList.remove("isScheduleBound");
        }
        if (previousDay.week() < (scheduleBeginning.week())) {
            //disable left arrow for mobile
            leftArrow.classList.add("isScheduleBoundMobile");
        }
        else {
            //enable left arrow for mobile
            leftArrow.classList.remove('isScheduleBoundMobile');
        }

        //RIGHT ARROW
        if (currentWeek[6].isSameOrAfter(scheduleEnd)) {
            //disable right arrow
            rightArrow.classList.add("isScheduleBound");
        }
        else {
            rightArrow.classList.remove("isScheduleBound");
        }
        if (nextDay.week() > scheduleEnd) {
            //disable right arrow for mobile
            rightArrow.classList.add("isScheduleBoundMobile");
        }
        else {
            //enable right arrow for mobile
            rightArrow.classList.remove("isScheduleBoundMobile");
        }
    };

    return theFactory;


});