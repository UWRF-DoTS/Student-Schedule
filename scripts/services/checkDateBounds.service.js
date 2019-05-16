/**
 * Service checkDateBounds
 */

app.service('checkDateBounds', function() {

    /**
     * - function "checkDateInTermDate" - Checks if a single date is within the beginning and end of a student's classes.
     *   @param {object} scheduleBeginning - Moment object, date of classes start
     *   @param {object} scheduleEnd - Moment object, day of classes end
     *   @param {object} checkDate - Moment object, day to be checked
     */
    this.checkDateIsInTerm = function(scheduleBeginning, scheduleEnd, checkDate) {
        return (checkDate.isSameOrAfter(scheduleBeginning) && checkDate.isSameOrBefore(scheduleEnd));

    };

    return this;

});