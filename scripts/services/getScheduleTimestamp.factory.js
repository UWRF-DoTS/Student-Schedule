/**
 * Factory getScheduleTimestamp - contains a number of methods for altering times and timestamps
 *
 * Contains:
 *
 * - function 'convertToTime' - takes a timestamp (60 * number of hours) and converts into a time. (i.e., 120 -> 2:00AM, 570 -> 9:30AM)
 *   @param {number} timeStamp - the timestamp to be converted into a time
 *   @returns {string} timeString - string representing time
 *
 * - function 'makeTimestamp' - takes a time in "AM/PM" form and turns into a timestamp
 *   @param {string} time - the time to be converted
 *   @return {number} timestamp - the newly created timestamp
 *
 *
 */

app.factory('getScheduleTimestamp', function() {
    var timestampFactory = {};

    //Convert to AM/PM time based on given timestamp (is given a number like "540" which is turned into a time (9:00 AM)
    timestampFactory.convertToTime = function(timeStamp) {
            var timeString;
            //if AM
            if (Math.floor(timeStamp / 60) < 12 && timeStamp < 60) { //if is midnight (is AM, but must be set to "12" instead of "0")
                if (timeStamp % 60 === 0) //if there are no minutes, an extra 0 (timeStamp % 60 will be 0, add another one to make :00)
                    timeString = "12:" + (timeStamp % 60) + "0 AM";
                else
                    timeString = "12:" + (timeStamp % 60) + " AM";
            }
            else if (Math.floor(timeStamp / 60) < 12) {
                if (timeStamp % 60 === 0) //if there are no minutes, an extra 0 (timeStamp % 60 will be 0, add another one to make :00)
                    timeString = (Math.floor(timeStamp / 60)) + ":" + (timeStamp % 60) + "0 AM";
                else
                    timeString = (Math.floor(timeStamp / 60)) + ":" + (timeStamp % 60) + " AM";
            }
            //if is noon (is PM, but behaves differently than other PMs (don't subtract 12 from 12))
            else if (Math.floor(timeStamp / 60) === 12) {
                if (timeStamp % 60 === 0)
                    timeString = (Math.floor(timeStamp / 60)) + ":" + (timeStamp % 60) + "0 PM";
                else
                    timeString = (Math.floor(timeStamp / 60)) + ":" + (timeStamp % 60) + " PM";
            }
            //if PM
            else { //if there are no minutes, add "00" instead of just the standard "0"
                if (timeStamp % 60 === 0)
                    timeString = (Math.floor(timeStamp / 60) - 12) + ":" + (timeStamp % 60) + "0 PM";
                else
                    timeString = (Math.floor(timeStamp / 60) - 12) + ":" + (timeStamp % 60) + " PM";
            }
            return timeString;

    };

    timestampFactory.makeTimestamp = function(time) { //time in "AM/PM" form
        if (time !== null) {
            time = time.replace(/ /g,''); //replace spaces with "". the g modifier at end of / / says that it's global (finds all matches, not stopping after first)

            var timeArray;

            //get "AM"/"PM"
            var amPm = time.slice(-2);

            //if PM
            if (amPm === "PM") {
                time = time.replace("PM", "");
                //Splits the time into two elements in an array: i.e. 9:00 into 9 and 00, i.e. 14:30 -> 14 and 30
                timeArray = time.split(':');
                timeArray[0] = parseInt(timeArray[0]);
                timeArray[1] = parseInt(timeArray[1]);
                //for any time after 12 PM, need to add 12 to the hour
                if (timeArray[0] < 12) {
                    timeArray[0] = timeArray[0] + 12;
                }
            }
            //if AM
            else {
                time = time.replace("AM", "");
                //Splits the time into two elements in an array: i.e. 9:00 into 9 and 00, i.e. 14:30 -> 14 and 30
                timeArray = time.split(':');
                timeArray[0] = parseInt(timeArray[0]);
                timeArray[1] = parseInt(timeArray[1]);
                //if it's 12:00AM, convert hour to 0
                if (timeArray[0] === 12) {
                    timeArray[0] = 0;
                }
            }
            return timeArray[0]*60 + parseInt(timeArray[1]);
        }

        };

    return timestampFactory;

}); //end of getScheduleTimestamp factory