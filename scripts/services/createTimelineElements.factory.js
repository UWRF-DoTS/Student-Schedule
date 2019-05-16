/**
 * Factory createTimelineElements
 *
 * Used to populate an array, to be assigned to the $scope.timeline array, to be used in the ng-repeat directive to create the timeline <li> elements.
 *
 */

app.factory('createTimelineElements', function(getScheduleTimestamp) {

    var theFactory = {};

    /**
     * "fillTimeline"
     * @returns {array} timeline - an array containing the times that will be displayed in the timeline i.e., (8:00am, 8:30am, .... 4:30pm, 5:00pm)
    */

    theFactory.fillTimeline = function () {

        var timeline = [];

        var startTimestamp = 0;

        //48 half-hour blocks
        for (var i = 0; i < 48; i++) { //iterate once for each half-hour block (2 x 24 hours)
            //Add to timeline array the schedule timestamp in AM/PM
            timeline.push(getScheduleTimestamp.convertToTime(startTimestamp));

            startTimestamp += 30; //increment the current timestamp by one half-hour.
        }

        return timeline;

    };

    return theFactory;

});