/**
 * Service classMaker
 *
 * When given an object in JSON form, convert into the object of class properties to be used by controllers.
 *
 */

app.service('classMaker', function () {

    self = this;


    /**
     * Takes the original "classes" JSON and convert it into an array of usable objects.
     * @param {String} classes - String of JSON-formatted data that will be converted into a usable object.
     *
     * The object has the form:
     {
        catalogNumber: 247,
        classNumber: 2041,
        courseDescription: "This is a description...",
        dateEnd: "2018-12-14 00:00:00.0",
        dateStart: "2018-09-02 00:00:00.0",
        title: "Introduction to Computer Networks",
        instructor: ["Thomas Tenner", "Jimmy Neutron"],
        section: "01",
        subjectId: "CSIS",
        unitsTaken: 3,
        unique:
        [
          { days: {sunday: "N", monday: "N", tuesday: "N", wednesday: "Y", thursday: "N", friday: "N", saturday: "N"},
            location: "South Hall 317",
            timeEnd: "10:15 AM",
            timeStart: "09:00 AM"},
          { day: {sunday: "Y", monday: "N", tuesday: "N", wednesday: "N", thursday: "N", friday: "N", saturday: "N"},
            location: "South Hall 16",
            timeEnd: "11:00AM",
            timeStart: "12:15PM"}
        ]
     *
     */



    this.makeCombinedClasses = function (classes) {
        var combinedClasses = []; //array of class objects to be created
        // classes.length is the amount of class occurrences. If a class only has one consistent meeting occurrence (TuTh, same time, same room),
        // there will be only one array for that class. However, if there are multiple meeting occurences for the same class,
        // (MoWedFri, 8:00am, South Hall 18), and (TuTh 10:00am, North Hall 210), then there will be multiple array locations
        // associated with that class.(i.e. classes[1] and classes[2] dedicated to the same course, but with different meeting
        // times/professors, etc.)
        // After restructuring these objects, there will only be 1 object associated with each class. The information differentiating
        // meeting dates will be in the "unique" array for each class
        for (var i = 0; i < classes.length; i++) {
            var newClass = {};
            var exists = false;

            /* Loop through the array of new objects (objects in combinedClasses array)
               to see if the current one matches one of them. If the current object
               doesn't match up with any in the new array, variable "exists" will stay at false,
               and a new class object will be created later. */
            for (var j = 0; j < combinedClasses.length; j++) {
                if (classes[i].subjectId === combinedClasses[j].subjectId &&
                    classes[i].catalogNumber === combinedClasses[j].catalogNumber) { //if this class is already in the object, and a new
                    //class in combinedClasses doesn't need to be made
                    // Check if the instructor is in the array yet; if it is not (for purposes of multiple instructors), add it to instructor array
                    var instructorExists = false;
                    for (var z = 0; z < combinedClasses[j].instructor.length; z++) {
                        if (combinedClasses[j].instructor[z] === classes[i].instructor)
                            instructorExists = true;
                    }
                    if (!instructorExists) //if the instructor in this class has not been added yet, add to the array (list of teachers)
                        combinedClasses[j].instructor.push(classes[i].instructor);

                    // Put all unique information from new class into a uniqueObject to add to combinedClasses.unique array
                    // SET DAYS
                    var uniqueObject = {
                        days: {
                            sunday: classes[i].sunday,
                            monday: classes[i].monday,
                            tuesday: classes[i].tuesday,
                            wednesday: classes[i].wednesday,
                            thursday: classes[i].thursday,
                            friday: classes[i].friday,
                            saturday: classes[i].saturday
                        },
                        timeStart: this.trimTime(classes[i].timeStart),
                        timeEnd: this.trimTime(classes[i].timeEnd),
                        location: classes[i].location

                    };

                    combinedClasses[j].unique.push(uniqueObject);

                    exists = true; // set to true so that it's not made again below.
                    j = combinedClasses.length; // exit loop through combinedClasses, as the correct one has been found
                } //end of if; In the case the if statement was not run, then that class does not yet exist in the combinedClasses
                  //object, and will be created below.

            } //end of for loop through combinedClasses

            /* After all course objects have been checked, if this class has not been made, then that class does not yet exist and
            must be made here. */
            if (exists === false) {
                //If the class doesn't have a start/end time, then it will not be a class that appears on the calendar. Therefore, do not create it.
                //The fact that all of the dates would be marked "N" would prevent them from being shown anyways, but this creates a cleaner array.
                if (classes[i].timeStart !== null || classes[i].timeEnd !== null) {
                    // make object
                    /* These are the attributes without the possibility to be different between class objects
                    when combining */
                    newClass.subjectId = classes[i].subjectId;
                    newClass.catalogNumber = classes[i].catalogNumber;
                    newClass.title = classes[i].description;
                    newClass.description = classes[i].courseDescription;
                    newClass.classNumber = classes[i].classNumber;
                    newClass.section = classes[i].section;
                    newClass.dateStart = classes[i].dateStart;
                    newClass.dateEnd = classes[i].dateEnd;

                    // Since there can be multiple instructors, put them in an array for easy distinction
                    newClass.instructor = [];
                    newClass.instructor.push(classes[i].instructor);

                    newClass.unique = []; // Create array to store objects that hold rest of information
                    uniqueObject = {
                        days: {
                            sunday: classes[i].sunday,
                            monday: classes[i].monday,
                            tuesday: classes[i].tuesday,
                            wednesday: classes[i].wednesday,
                            thursday: classes[i].thursday,
                            friday: classes[i].friday,
                            saturday: classes[i].saturday
                        },
                        timeStart: this.trimTime(classes[i].timeStart),
                        timeEnd: this.trimTime(classes[i].timeEnd),
                        location: classes[i].location
                    };
                    newClass.unique.push(uniqueObject);
                    combinedClasses.push(newClass);

                } //end of if (class times are not null)
            } //end of if (exists)
        } //end of for
        return combinedClasses;
    }; //end of return

    this.makeBreaks = function (breaks) {
        var combinedBreaks = [];

        //loop through breaks
        for (var b = 0; b < breaks.length; b++) {

            var tempBreak = {};

            tempBreak.subjectId = null;
            tempBreak.catalogNumber = null;
            tempBreak.title = breaks[b].description;
            tempBreak.description = breaks[b].courseDescription;
            tempBreak.classNumber = null;
            tempBreak.section = null;
            tempBreak.dateStart = breaks[b].dateStart;
            tempBreak.dateEnd = breaks[b].dateEnd;

            //Set "startTime" and "endTime" default to 12:00AM and 11:59PM (assumes a break is just a fullday)
            tempBreak.timeStart = "12:00 AM";
            tempBreak.timeEnd = "11:59 PM";
            tempBreak.days = [
                breaks[b].sunday, breaks[b].monday, breaks[b].tuesday, breaks[b].wednesday, breaks[b].thursday, breaks[b].friday, breaks[b].saturday
            ];

            combinedBreaks.push(tempBreak);

        }

        return combinedBreaks;
    };


    //Used for testing with fake classes
    this.makeNonClassEventsFake = function (events) {
        var combinedEvents = [];

        for (var e = 0; e < events.length; e++) {
            var tempEvent = {};

            tempEvent.subjectId = null;
            tempEvent.catalogNumber = null;
            tempEvent.title = events[e].description;
            tempEvent.description = events[e].courseDescription;
            tempEvent.classNumber = null;
            tempEvent.section = null;
            tempEvent.dateStart = events[e].dateStart;
            tempEvent.dateEnd = events[e].dateEnd;
            tempEvent.timeStart = this.trimTime(events[e].timeStart);
            tempEvent.timeEnd = this.trimTime(events[e].timeEnd);
            tempEvent.location = events[e].location;
            tempEvent.days = [
                events[e].sunday, events[e].monday, events[e].tuesday, events[e].wednesday, events[e].thursday, events[e].friday, events[e].saturday
            ];

            combinedEvents.push(tempEvent);
        }

        return combinedEvents;

    };


    this.makeNonClassEvents = function(events) {
        var combinedEvents = [];

        for (var e = 0; e < events.length; e++) {
            var tempEvent = {};

            tempEvent.subjectId = null;
            tempEvent.catalogNumber = null;
            tempEvent.title = events[e].title;
            tempEvent.description = events[e].description;
            tempEvent.classNumber = null;
            tempEvent.section = null;
            tempEvent.dateStart = moment(events[e].start).format("YYYY-MM-DD");
            tempEvent.dateEnd = moment(events[e].end).format("YYYY-MM-DD");
            tempEvent.timeStart = moment(events[e].start).format("h:mm A");
            tempEvent.timeEnd = moment(events[e].end).format("h:mm A");
            tempEvent.location = events[e].location;

            tempEvent.days = ["N", "N", "N", "N", "N", "N", "N"];

            var counter = 0;



            if (!(moment(tempEvent.dateStart).isSame(moment(tempEvent.dateEnd)))) {
                //make array of days for this multi-day event

                var tempMomentStart = tempEvent.dateStart;

                while(!moment(tempMomentStart).isAfter(moment(tempEvent.dateEnd)) && counter < 10) {
                    tempEvent.days[moment(tempMomentStart).format("d")] = "Y";
                    moment(tempMomentStart).add(1, 'd');
                counter++;
                }
            }
            else {
                tempEvent.days[moment(tempEvent.dateStart).format("d")] = "Y";
            }


            combinedEvents.push(tempEvent);
        }
        return combinedEvents;
    };

    /**
     * Takes an array of objects that are in the schema.org documentation's form and turns them into a combinedClasses object the program can use.
     *
     * @param {Array} classes - array of schema objects
     * @returns {Array} combinedClassesSchema - array of combinedClasses objects
     */

    this.makeCombinedSchemaClasses = function (classes) {

        //Array of class objects to be returned
        var combinedSchemaClasses = [];

        //For each class, convert the object
        for (var i = 0; i < classes.length; i++) {
            var tempEvent = {};
            tempEvent.subjectId = classes[i].subjectId;
            tempEvent.catalogNumber = classes[i].catalogNumber;
            tempEvent.classNumber = classes[i].classNumber;
            tempEvent.dateEnd = classes[i].eventsSchedule[0].endDate;
            tempEvent.dateStart = classes[i].eventsSchedule[0].startDate;
            tempEvent.description = classes[i].description;
            tempEvent.instructor = [];
            tempEvent.section = classes[i].section;
            tempEvent.title = classes[i].name;
            tempEvent.unitsTaken = classes[i].unitsTaken;
            tempEvent.unique = [];

            //for each Schedule object present, convert its data into the "unique" array
            for (var j = 0; j < classes[i].eventsSchedule.length; j++) {
                var uniqueEvent = {};

                uniqueEvent.location = classes[i].eventsSchedule[j].location;
                uniqueEvent.timeEnd = this.trimTime(classes[i].eventsSchedule[j].endTime);
                uniqueEvent.timeStart = this.trimTime(classes[i].eventsSchedule[j].startTime);
                uniqueEvent.days = convertByDay(classes[i].eventsSchedule[j].byDay);

                tempEvent.unique.push(uniqueEvent);

                //check if instructor has already been added to this class.
                var isAdded = false;
                for (var h = 0; h < tempEvent.instructor.length; h++) {
                    if (tempEvent.instructor[h] === classes[i].eventsSchedule[j].instructor)
                        isAdded = true;
                }
                //if it has not been, add it
                if (!isAdded)
                    tempEvent.instructor.push(classes[i].eventsSchedule[j].instructor);
            }
            //add event to array
            combinedSchemaClasses.push(tempEvent);
        }

        combinedSchemaClasses = this.makeDaysString(combinedSchemaClasses);

        return combinedSchemaClasses;
    };

    /**
     * Convert an array of "byDay" objects into an object representing which days of the week a class will occur.
     *
     * @param {array} byDay - array of schema documentation days
     *                      i.e. "http://schema.org/Wednesday", or "https://schema.org/Tuesday"
     */

    var convertByDay = function (byDay) {
        var days = {
            sunday: "N",
            monday: "N",
            tuesday: "N",
            wednesday: "N",
            thursday: "N",
            friday: "N",
            saturday: "N"
        };

        for (var i = 0; i < byDay.length; i++) {
            var sub = byDay[i].substring(0, 5);
            //in schema format, the days of the week the event occur on could begin with either "http:" or "https:". Determine which before parsing out the day
            if (sub === "http:")
                var subLength = 18; //length of substring if header is "http:"
            else if (sub === "https")
                subLength = 19; //length of substring if header is "https:"
            else
                console.log("ERROR: Schema date data in wrong form.");

            //Parse out the day of the week
            var dayOfWeek = byDay[i].substring(subLength);
            //Set that corresponding day to "Y"
            days[dayOfWeek.toLowerCase()] = "Y";
        }

        return days;

    };

    /**
     * Add a "daysString" property - for each 'unique' instance, have a string listing what days it is on. i.e., "Monday" , "Wednesday, Friday"
     *
     * @param {array} classes - array of objects created by the makeCombinedClasses or makeCombinedSchemaClasses functions
     *
     * Only used in the list-view controller,
     *
     */
    this.makeDaysString = function (classes) {

        for (var c = 0; c < classes.length; c++) {

            for (var u = 0; u < classes[c].unique.length; u++) {
                var classesDays = "";
                for (var day in classes[c].unique[u].days) {
                    if (classes[c].unique[u].days[day] === "Y")
                        classesDays += day.charAt(0).toUpperCase() + day.slice(1) + ", ";
                }
                //cut off the ", " from the final class
                classesDays = classesDays.slice(0, -2);
                //Assign this string to a new value. Other functions like singleEventMaker.makeEvents use the 'days.sunday === "N"' form.
                classes[c].unique[u].daysString = classesDays;
            } //end u
        } //end c

        return classes;

    };

    /**
     * Format dateStart, dateEnd, and instructor values in combinedClasses. Format specifically to "list-view", called in classListController
     *    - Trim off the hours, minutes, seconds ("00:00:00...") from dates in combinedClasses
     *    - Take instructors from array in form ["Swift, Taylor", "Colbert, Stephen"] and turn into "Taylor Swift, Stephen Colbert"
     * @param {array} classes - array of objects created by the makeCombinedClasses or makeCombinedSchemaClasses functions
     *
     */
    this.listViewFormat = function (classes) {

        for (var c = 0; c < classes.length; c++) {

            //----Format Dates
            classes[c].dateStart = classes[c].dateStart.substr(0, classes[c].dateStart.indexOf(' '));
            classes[c].dateEnd = classes[c].dateEnd.substr(0, classes[c].dateEnd.indexOf(' '));

            //----Format instructor name(s)
            var instructorString = "";
            for (var i = 0; i < classes[c].instructor.length; i++) {
                var iSplit = classes[c].instructor[i].split(",");
                instructorString += iSplit[1] + " " + iSplit[0] + ", ";
            }
            //trim the ", " from after the last instructor
            instructorString = instructorString.substring(0, instructorString.length - 2);
            classes[c].instructor = instructorString;
        }

        return classes;
    };

    /**
     * Cut the "0" off the beginning of a time: "09:00 AM" -> "9:00 AM"
     * @param {string} time - start or end time, in the form "0
     */
    this.trimTime = function(time) {
        if (time !== null) {
            if (time.charAt(0) === "0") {
                time = time.substr(1);
            }
        }

        return time;
    };

    return this;

}); //end of service
