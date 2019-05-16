/**
 * Factory roundTime
 *
 * When given a timestamp (numeric representation of a time. Is the number of minutes (8:00am = 480, 1:30pm = 810, 14:00 = 840), round up to the nearest hour or down to the nearest hour.
 *
 * Factory object contains:
 *   - function "roundTimeDown"
 *   @param {number} timestamp - the timestamp to be rounded down
 *   @returns {number} - new timestamp
 *
 *   - function "roundTimeUp"
 *   @param {number} timestamp - the timestamp to be rounded up
 *   @returns {number} - new timestamp
 *
 */

app.factory('roundTime', function() {

    var theFactory = {};

    //Round down: Cut off minutes.
    //Given a timestamp, return a number representing the hour, i.e. (9, 12, 17 (for 5:00), etc.) rounded down. i.e., 735 = 12:15 -> 12:00
    theFactory.roundTimeDown = function(timestamp) {
        return Math.floor(timestamp / 60); //Math.floor() returns the largest integer less than or equal to a given number.
    }; //end of function roundTimeDown

    //Round up: Move to next hour.
    //Given a timestamp, return a number representing the hour, i.e. (9, 12, 17 (for 5:00), etc.) rounded up. i.e. 735 = 12:15 -> 13:00
    theFactory.roundTimeUp = function(timestamp) {

        //Split timestamp into hours and minutes ... 735 (representing 12:15) will yield an array of [720, 15]
        var roundUpMinutes = timestamp % 60; //obtain minutes (625 will return 25)
        var roundUpHour = Math.floor(timestamp / 60); //obtain hour (625 will return 10)

        //If the class doesn't end on the hour (roundUpMinutes !== 0), extend length of timeline to end of that hour.
        //i.e., if time is 8:15, 8:30, 8:50, etc., time will round up to 9:00. If the class ends at 9:00, it will stay as 9:00
        if (roundUpMinutes !== 0) {
            roundUpHour += 1;
        }

        return roundUpHour;

    }; //end of function roundTimeUp

    return theFactory;

});