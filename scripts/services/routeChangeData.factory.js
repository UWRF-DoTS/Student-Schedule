/**
 * Factory routeChangeData
 *
 * This is used to share information between the classCalendarController and classListControllers.
 *
 * Factory object contains:
 *
 * - var "numDays"
 *   - When classCalendarController runs, it will decide whether the single-day, five-day, or seven-day calendar will be displayed.
 *     By default, it will be set to 5. The listView has the ability to select 1, 5, or 7 days. This will allow it to tell the calendar what to display.
 *
 * - function "set"
 * @param {number} - set how many days are to be shown on the calendar
 *
 */


app.factory('routeChangeData', function ($log, getBrowserSize) {

    var theFactory = {};

    //default for browser size is 5
    theFactory.numDays = 5;
    //default for mobile full is false
    theFactory.mobileFull = false;


    theFactory.set = function(numDaysShown) {
        if (numDaysShown === 1 || numDaysShown === 5 || numDaysShown === 7) {
            theFactory.numDays = numDaysShown;
        }
        else {
            $log.error("routeChangeData must be given 1, 5, or 7");
            theFactory.numDahys = 5;
        }

    };

    theFactory.get = function() {
        return theFactory.numDays;
    };

    //boolean mobileFull
    theFactory.setMobileFull = function(mobileFull) {
            theFactory.mobileFull = mobileFull;
    };

    theFactory.getMobileFull = function() {
        return theFactory.mobileFull;
    };

    return theFactory;

});