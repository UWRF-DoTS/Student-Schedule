
/**
 * classCalendarController
 *
 * Maintains the scope and business logic for calendarView.html
 *
 */

app.controller('classCalendarController',
    function ($scope,
              $window,
              $location,
              classMaker,
              getClassesFactory,
              getScheduleTimestamp,
              fakeClassesFactory,
              getBrowserSize,
              adjustInstructorName,
              createTimelineElements,
              singleEventMaker,
              dateServices,
              checkDateBounds,
              windowLocationOnLoad,
              calculateEventWidths,
              routeChangeData
    ) {

        //get emplid (w number)
        fetch( /* ColdFusion removal: Link to API call */, {}).then(function (getResponse) {
            if (getResponse.status !== 200) {
                alert("Fetch error " + getResponse.status + ", not caught");
            } else {
                getResponse.json().then(function (emplidStruct) { //Body.json() function
                    if (emplidStruct.ID === "") { //I'm pretty sure that it should be === "" and not === null/undefined as it literally was ID: ""
                        console.log("getEmplidScript error. emplidStruct:");
                        console.log(emplidStruct);
                    } else {

                    //remove "W" from emplid.ID
                    $scope.emplid = emplidStruct.ID.substr(1); //important that "ID" is capitalized

                    //category of events to get (in this case, 15 = Music)
                    var category = 15;
                    //get events
                    getClassesFactory.getEvents(category).then(function (response) {

                        if (response.status !== 200) {
                            $log.error("There was an error fetching events; status code: " + response.status);
                        }

                        var eventsData = JSON.parse(response.data.Filecontent);

                        $scope.combinedEvents = classMaker.makeNonClassEvents(eventsData);

                    }).then(function (emptyVar) {

                        //call getClasses() factory, and then when that call is done, run it through classMaker, and for each, run it through printListClasses
                        //---------Begin getting and parsing class data
                        getClassesFactory.getClasses($scope.emplid).then(function (response) {
                            if (response.status !== 200) {
                                $log.error("There was an error fetching classes; status code: " + response.status);
                            }

                            //Convert the string of data into an object
                            var classesData = JSON.parse(response.data.Filecontent);

                            //Check if the data is in schema form or not, then call the correct makeClasses function.
                            if (classesData[0].hasOwnProperty("context")) {
                                if (classesData[0].context === "http://schema.org/" || classesData[0].context === "https://schema.org/") {
                                    console.log("data is schema");
                                    $scope.combinedClasses = classMaker.makeCombinedSchemaClasses(classesData);
                                } else {
                                    $log.error("classesData[0].hasOwnProperty('context'), but !== 'http(s)://schema.org/' ")
                                }
                            } else {
                                console.log("not schema");
                                $scope.combinedClasses = classMaker.makeCombinedClasses(classesData);
                            }

                            //----------end parsing class data

                            var w = angular.element($window); //Reference to the jquery object. Should work without the full jquery version loaded, as it has jquery under the hood

                            //----------------------------------------------BEGIN FAKE CLASSES------------------------------------------------------
                            //Get "fake classes"; JSON defined by me so I can test different situations with classes.
                            //This JSON will be in the same format as the JSON will be in production.
                            // $scope.fakeClasses = fakeClassesFactory.myClasses03;

                            //Call the classMaker() function to convert the received JSON into the object this program will be using
                            // $scope.combinedClasses = classMaker.makeCombinedClasses($scope.fakeClasses);\

                            // console.log("CombinedClasses: ");
                            // console.log($scope.combinedClasses);

                            $scope.combinedBreaks = classMaker.makeBreaks(fakeClassesFactory.fakeBreaks00);
                            // console.log("combined Breaks");
                            // console.log($scope.combinedBreaks);

                            // $scope.combinedEvents = classMaker.makeNonClassEventsFake(fakeClassesFactory.fakeEvents01);
                            // console.log("combined events");
                            // console.log($scope.combinedEvents);

                            //---------------------------------------------------END FAKE CLASSES---------------------------------------------------


                            //This is a list of colors that will be assigned to the different classes displayed. Can be set to whatever management would like them to be.
                            $scope.listOfColors = [];

                            $scope.listOfColors.push("#d83f87");
                            $scope.listOfColors.push("#a4b3b6");
                            $scope.listOfColors.push("#44318d");
                            $scope.listOfColors.push("#7b578d");
                            $scope.listOfColors.push("#5D001E");
                            $scope.listOfColors.push("#EE4C7C");
                            $scope.listOfColors.push("#E3E2DF");
                            $scope.listOfColors.push("#E3AFBC");
                            $scope.listOfColors.push("#2a1b3d");
                            $scope.listOfColors.push("#9A1750");


                            $scope.listOfColors2 = [];
                            $scope.listOfColors2.push("#eb4198");
                            $scope.listOfColors2.push("#c9d8db");
                            $scope.listOfColors2.push("#503cc6");
                            $scope.listOfColors2.push("#b489c6");
                            $scope.listOfColors2.push("#ae002c");
                            $scope.listOfColors2.push("#f74d84");
                            $scope.listOfColors2.push("#f1f0ed");
                            $scope.listOfColors2.push("#E3AFBC");
                            $scope.listOfColors2.push("#7e2e9e");
                            $scope.listOfColors2.push("#cc1977");


                            //listOfEventColors is the color before hover, listOfEventColors2 is after hover
                            $scope.listOfEventColors = [];
                            $scope.listOfEventColors.push("#1F2605");
                            $scope.listOfEventColors.push("#1F6521");
                            $scope.listOfEventColors.push("#53900F");
                            $scope.listOfEventColors.push("#A4A71E");
                            $scope.listOfEventColors.push("#D6CE15");
                            $scope.listOfEventColors.push("#00b967");
                            $scope.listOfEventColors.push("#008e05");
                            $scope.listOfEventColors.push("#01974b");
                            $scope.listOfEventColors.push("#85ea47");
                            $scope.listOfEventColors.push("#3cb931");
                            $scope.listOfEventColors.push("#1F2605");
                            $scope.listOfEventColors.push("#1F6521");
                            $scope.listOfEventColors.push("#53900F");
                            $scope.listOfEventColors.push("#A4A71E");
                            $scope.listOfEventColors.push("#D6CE15");
                            $scope.listOfEventColors.push("#00b967");
                            $scope.listOfEventColors.push("#008e05");
                            $scope.listOfEventColors.push("#01974b");
                            $scope.listOfEventColors.push("#85ea47");
                            $scope.listOfEventColors.push("#3cb931");


                            $scope.listOfEventColors2 = [];
                            $scope.listOfEventColors2.push("#879106");
                            $scope.listOfEventColors2.push("#30b232");
                            $scope.listOfEventColors2.push("#7fc810");
                            $scope.listOfEventColors2.push("#cfd220");
                            $scope.listOfEventColors2.push("#eae215");
                            $scope.listOfEventColors2.push("#00dc82");
                            $scope.listOfEventColors2.push("#00c705");
                            $scope.listOfEventColors2.push("#01cb59");
                            $scope.listOfEventColors2.push("#98ff49");
                            $scope.listOfEventColors2.push("#41dc35");
                            $scope.listOfEventColors2.push("#879106");
                            $scope.listOfEventColors2.push("#30b232");
                            $scope.listOfEventColors2.push("#7fc810");
                            $scope.listOfEventColors2.push("#cfd220");
                            $scope.listOfEventColors2.push("#eae215");
                            $scope.listOfEventColors2.push("#00dc82");
                            $scope.listOfEventColors2.push("#00c705");
                            $scope.listOfEventColors2.push("#01cb59");
                            $scope.listOfEventColors2.push("#98ff49");
                            $scope.listOfEventColors2.push("#41dc35");

                            //--------Find schedule bounds-----------------------------------------------------------
                            //loop through combinedClasses to find the earliest start and ending dates for classes
                            for (var iii = 0; iii < $scope.combinedClasses.length; iii++) {
                                if ($scope.scheduleBeginning === undefined) { //if this is the iteration
                                    $scope.scheduleBeginning = moment($scope.combinedClasses[iii].dateStart);
                                    $scope.scheduleEnd = moment($scope.combinedClasses[iii].dateEnd);
                                } else {
                                    //if an earlier starting date is found
                                    if (moment($scope.combinedClasses[iii].dateStart).isBefore(moment($scope.scheduleBeginning))) {
                                        $scope.scheduleBeginning = moment($scope.combinedClasses[iii].dateStart);
                                    }
                                    //if a later ending date is found
                                    if (moment($scope.combinedClasses[iii].dateEnd).isAfter(moment($scope.scheduleEnd))) {
                                        $scope.scheduleEnd = moment(moment($scope.combinedClasses[iii].dateEnd));
                                    }
                                }
                            }
                            //------- End finding schedule bounds----------------------------------------------------

                            //Get <div> that surrounds the entire calendar
                            var cdSchedule = document.getElementsByClassName("cd-schedule")[0];

                            //CurrentWeek is initially set to the actual date's week, if it falls in the bounds of the student's beginning/end of classes.
                            //If it falls before/after, it will start at the beginning of the next term. (i.e., if it' June 21st and no classes until Wed., Sept. 5, the calendar will start on that week.
                            //It gets updated to whatever the selected week is whenever the user scrolls between days/weeks.
                            //It cannot go before/after the start/end of their classes.

                            //Get dates of initial calendar declaration. Will be the current week, unless not in term, then it will be the first week.
                            //Will be filled with Moment objects
                            $scope.currentWeek = dateServices.setCurrentWeek($scope.scheduleBeginning, $scope.scheduleEnd);
                            //------- Set the selectedDay variable
                            // The selectedDay variable is needed to keep track of what day the mobile view has scrolled to (and start on)
                            if (checkDateBounds.checkDateIsInTerm($scope.scheduleBeginning, $scope.scheduleEnd, moment())) { //if the actual current day is in the schedule
                                $scope.selectedDay = moment();
                            } else {
                                //find what the selected day should be (first day of class)
                                $scope.selectedDay = $scope.scheduleBeginning.clone();
                            }

                            //set the headers that the <top-info> elements use
                            $scope.currentWeekHeaders = dateServices.currentWeekHeaders($scope.currentWeek, true);

                            //--------------------Set functions affecting schedule changes (going between days and weeks)-------------------

                            var lastWeekButton = document.getElementsByClassName("lastWeek")[0];
                            var nextWeekButton = document.getElementsByClassName("nextWeek")[0];

                            //left arrow (shifts back one week on 5/7 day view, one day on mobile single-day.)
                            lastWeekButton.onclick = function () {
                                /*
                                Wrapping a function in $scope.$apply causes the function to run, and then trigger a $scope.$digest cycle. This iterates over
                                all watched values and updates those data bindings
                                */

                                $scope.$apply(function () { //$scope.$apply says to run this function, then trigger a $digest cycle. Is supposed to do this already, but
                                    //for some reason lastWeekButton isn't being $watched
                                    if (getBrowserSize.getDims().width >= 800 || (getBrowserSize.getDims().width <= 799 && $scope.mobileFullClicked)) { //if desktop, switch between weeks
                                        $scope.currentWeek = dateServices.changeWeek($scope.currentWeek, false); //Change currentWeek back one week
                                        $scope.currentWeekHeaders = dateServices.currentWeekHeaders($scope.currentWeek, false); //update <top-info> headers
                                        singleEventMaker.resetSingleEvents(); //clear all events
                                        singleEventMaker.makeEvents($scope); //reinitialize events
                                        $scope.selectedDay.add(-7, "days"); //decrement the selected day by 7 so mobile knows what to show
                                    } else { //if mobile, switch between days
                                        //get array of events-Group DOM objects ([0] = Sunday, [1] = Monday, [6] = Saturday...)
                                        var eventsGroups = document.getElementsByClassName("events-group");
                                        //remove the ".selected" class from the currently selected day
                                        eventsGroups[$scope.selectedDay.day()].classList.remove("selected");
                                        //-------- Subtract 1 from selected day
                                        var weekBefore = $scope.selectedDay.week(); //record the week # before and after the change to determine if a new week has been reached (went from saturday->sunday)

                                        $scope.selectedDay.add(-1, "days"); //go to previous day

                                        var weekAfter = $scope.selectedDay.week();
                                        //mark new selected day as such
                                        eventsGroups[$scope.selectedDay.day()].classList.add("selected");

                                        //---------Check if it's a new week. If it is, change week back, and re-do headers and single-events
                                        if (weekBefore !== weekAfter) {
                                            $scope.currentWeek = dateServices.changeWeek($scope.currentWeek, false); //Change currentWeek back one week
                                            $scope.currentWeekHeaders = dateServices.currentWeekHeaders($scope.currentWeek, false); //update <top-info> headers
                                            singleEventMaker.resetSingleEvents(); //clear all events
                                            singleEventMaker.makeEvents($scope); //reinitialize events
                                        }
                                    } //end of else

                                    //Check the right/left arrows and see if they must be updated. (hidden or shown based on the new change.)
                                    dateServices.checkArrows($scope.currentWeek, $scope.scheduleBeginning, $scope.scheduleEnd, $scope.selectedDay);

                                    //Scroll to where classes start
                                    windowLocationOnLoad.setScrollLocation($scope.selectedDay.day(), $scope.combinedClasses);

                                });
                                calculateEventWidths.setEventWidths();
                            };//end of lastWeek onclick function

                            //right arrow (shifts forward one week on 5/7 day, one day on mobile single-day.)
                            nextWeekButton.onclick = function () {
                                $scope.$apply(function () {
                                    //if desktop (or mobile calendar), switch between weeks
                                    if (getBrowserSize.getDims().width >= 800 || (getBrowserSize.getDims().width <= 799 && $scope.mobileFullClicked)) {
                                        $scope.currentWeek = dateServices.changeWeek($scope.currentWeek, true); //Change currentWeek forward one week
                                        $scope.currentWeekHeaders = dateServices.currentWeekHeaders($scope.currentWeek, false); //update <top-info> headers
                                        singleEventMaker.resetSingleEvents(); //clear all events
                                        singleEventMaker.makeEvents($scope); //reinitialize events /* IS DIFFERENT BECAUSE BREAKS/EVENTS */
                                        $scope.selectedDay.add(7, "days"); //increment the selected day by 7 so mobile knows what to show
                                    } else { //if mobile, switch between days
                                        var eventsGroups = document.getElementsByClassName("events-group");
                                        eventsGroups[$scope.selectedDay.day()].classList.remove("selected");
                                        //-------- Add 1 from selected day
                                        var weekBefore = $scope.selectedDay.week(); //record the week # before and after the change to determine if a new week has been reached (went from saturday->sunday)

                                        $scope.selectedDay.add(1, "days"); //go to next day

                                        var weekAfter = $scope.selectedDay.week();
                                        //mark new selected day as such
                                        eventsGroups[$scope.selectedDay.day()].classList.add("selected");

                                        //---------Check if it's a new week. If it is, change week forward, and re-do headers and single-events
                                        if (weekBefore !== weekAfter) {
                                            $scope.currentWeek = dateServices.changeWeek($scope.currentWeek, true); //Change currentWeek forward one week
                                            $scope.currentWeekHeaders = dateServices.currentWeekHeaders($scope.currentWeek, false); //update <top-info> headers
                                            singleEventMaker.resetSingleEvents(); //clear all events
                                            singleEventMaker.makeEvents($scope); //reinitialize events
                                        }
                                    } //end of else
                                    //Check the right/left arrows and see if they must be updated. (hidden or shown based on the new change.)
                                    dateServices.checkArrows($scope.currentWeek, $scope.scheduleBeginning, $scope.scheduleEnd, $scope.selectedDay);

                                    //Scroll to where classes start
                                    windowLocationOnLoad.setScrollLocation($scope.selectedDay.day(), $scope.combinedClasses);

                                }); //end of $scope.$apply
                                calculateEventWidths.setEventWidths();
                            }; //end of nextWeek onclick function

                            $scope.lastWeekIcon = "icons/arrow_left_icon52px.png";
                            $scope.hoverInLeft = function () {
                                $scope.lastWeekIcon = "icons/arrow_left_hover_icon52px.png";
                            };
                            $scope.hoverOutLeft = function () {
                                $scope.lastWeekIcon = "icons/arrow_left_icon52px.png";
                            };

                            $scope.nextWeekIcon = "icons/arrow_right_icon52px.png";
                            $scope.hoverInRight = function () {
                                $scope.nextWeekIcon = "icons/arrow_right_hover_icon52px.png";
                            };
                            $scope.hoverOutRight = function () {
                                $scope.nextWeekIcon = "icons/arrow_right_icon52px.png";
                            };

                            //---------------------------End setting functions affecting week changes---------------------------------------


                            //----------------------------------Fill timeline elements -----------------------------------------------------
                            $scope.timelineDimObject = {
                                latestEnd: 24,
                                earliestStart: 0
                            };


                            //Create an array with times to insert into timeline (this variable is accessed in the HTML)
                            $scope.timeline = createTimelineElements.fillTimeline();

                            //---------------------------------End filling timeline elements -----------------------------------------------


                            //---------------------------INITIAL SAT/SUN, EVENTS-GROUP CSS PROPERTIES---------------------------------------

                            //eventsGroupCSS is an object, because ng-style looks for objects containing CSS styles when evaluating.
                            //holds width and height of each eventsGroup
                            $scope.eventsGroupCSS = {};

                            /* .mobileFullClicked keeps track of whether 5 or 7 days have been selected in mobile view. This is relevant
                             * for when resizing screen from greater than 800 px to less than 800 px, or going
                               * from mobile agenda -> 5/7 day views*/
                            $scope.mobileFullClicked = routeChangeData.getMobileFull();

                            //get the radio buttons "one", "five", and "seven"
                            var radioOne = document.getElementsByClassName("radioOne")[0];
                            var radioFive = document.getElementsByClassName("radioFive")[0];
                            var radioSeven = document.getElementsByClassName("radioSeven")[0];

                            /******* Decide whether saturday and sunday must be shown, as well as set the eventsGroupWidthCSS ********/
                            //Defaults for desktop-size
                            if (getBrowserSize.getDims().width >= 800) {
                                $scope.showOneDayOption = false;

                                if (routeChangeData.get() === 5) {
                                    $scope.showSatSun = false;
                                    $scope.eventsGroupCSS.width = "20%";
                                    radioFive.checked = true;
                                } else if (routeChangeData.get() === 7) {
                                    $scope.showSatSun = true;
                                    $scope.eventsGroupCSS.width = "14.285714285%";
                                    radioSeven.checked = true;
                                } else
                                    $log.error("routeChangeData !== 5 || 7");

                            }
                            //defaults for mobile-size
                            else {
                                $scope.showOneDayOption = true;

                                //if this page was switched to from agenda, on mobile, to the 5-day or 7-day view,
                                if (routeChangeData.getMobileFull()) {
                                    if (routeChangeData.get() === 5) {
                                        $scope.showSatSun = false;
                                        $scope.eventsGroupCSS.width = "20%";
                                        radioFive.checked = true;
                                    } else if (routeChangeData.get() === 7) {
                                        $scope.showSatSun = true;
                                        $scope.eventsGroupCSS.width = "14.285714285%";
                                        radioSeven.checked = true;
                                    } else {
                                        $log.error("routeChangeData !== 5 || 7")
                                    }
                                    cdSchedule.classList.add("mobileFull");
                                }
                                //if one-day view was chosen
                                else {
                                    //always show sat/sun for mobile
                                    $scope.showSatSun = true;
                                    $scope.eventsGroupCSS.width = "100%";
                                    $scope.showNotification = false;
                                    radioOne.checked = true;
                                }
                            }

                            //---------------------------------END SAT/SUN PROPERTIES---------------------------------------------------------

                            //Add a function to the window that will check the window dimension when resized, and adjusts the calendar accordingly.
                            //This is necessary for when switching between desktop/mobile size, to show/hide the .oneDayOption box and keep
                            //eventsGroupCSS consistent
                            w.bind('resize', function () {
                                $scope.$apply(function () {
                                    if (getBrowserSize.getDims().width >= 800) {
                                        if (routeChangeData.get() === 5) {
                                            $scope.eventsGroupCSS.width = "20%";
                                            $scope.showSatSun = false;
                                            radioFive.checked = true;
                                        } else if (routeChangeData.get() === 7) {
                                            $scope.eventsGroupCSS.width = "14.285714285%";
                                            $scope.showSatSun = true;
                                            radioSeven.checked = true;
                                        }
                                        $scope.showOneDayOption = false;
                                        if (!$scope.showSatSun)
                                            $scope.selectedDayIcon = "icons/DayOptions/5_day.png";
                                        else
                                            $scope.selectedDayIcon = "icons/DayOptions/7_day.png";

                                    }
                                    //if mobile
                                    else {
                                        if (!$scope.mobileFullClicked) {
                                            $scope.showSatSun = true;
                                            $scope.eventsGroupCSS.width = "100%";
                                            radioOne.checked = true;
                                            $scope.selectedDayIcon = "icons/DayOptions/1_day.png";
                                        }
                                        else {
                                            if ($scope.showSatSun)
                                                $scope.selectedDayIcon = "icons/DayOptions/7_day.png";
                                            else
                                                $scope.selectedDayIcon = "icons/DayOptions/5_day.png";

                                        }

                                        $scope.showOneDayOption = true;
                                    }
                                }) //end of $apply
                            }); //end of w.bind

                            //make events on initial load
                            singleEventMaker.makeEvents($scope);

                            //Set "selected day" as such - this is the day that will be shown on mobile. Default, the current day or the first day
                            //of an upcoming semester when not presently in a semester.
                            var eventsGroups = document.getElementsByClassName("events-group");
                            for (var a = 0; a < eventsGroups.length; a++) {
                                if (a === $scope.selectedDay.day()) {
                                    eventsGroups[a].classList.add("selected");
                                }
                            }

                            dateServices.checkArrows($scope.currentWeek, $scope.scheduleBeginning, $scope.scheduleEnd, $scope.selectedDay);

                            /*-----------------------------End creating single-event <li> elements------------------------------------*/

                            /**
                             * Function mobileWeek(int)
                             * Will be called with a 1 to set view to mobile view. Will be 5 or 7 for mobile full-calendar view
                             *
                             * Will be called in the scenario:
                             * When browser is mobile size, and a Days option is selected.
                             */
                            var mobileWeek = function (daysShown) {
                                //if it's in mobile non-calendar view
                                if (!$scope.mobileFullClicked) {
                                    $scope.mobileFullClicked = true;
                                    cdSchedule.classList.add("mobileFull");

                                    if (daysShown === 5) {
                                        $scope.eventsGroupCSS.width = "20%";
                                        $scope.showSatSun = false;
                                    } else { //if === 7
                                        $scope.eventsGroupCSS.width = "14.285714285%";
                                        $scope.showSatSun = true;
                                    }

                                }
                                //if it is in mobile calendar view, check whether it's turning into 1, 5, or 7 day views
                                else {
                                    //if going to single-day
                                    if (daysShown === 1) {
                                        $scope.mobileFullClicked = false;

                                        cdSchedule.classList.remove("mobileFull");
                                        $scope.eventsGroupCSS.width = "100%";
                                        //always have saturday/sunday showing in mobile-single view
                                        $scope.showSatSun = true;
                                        // $scope.showNotification = false;
                                    }
                                    //if going from 7-day view to 5
                                    else if (daysShown === 5) {
                                        $scope.eventsGroupCSS.width = "20%";
                                        $scope.showSatSun = false;
                                    } else if (daysShown === 7) {
                                        $scope.eventsGroupCSS.width = "14.285714285%";
                                        $scope.showSatSun = true;
                                    } else {
                                        $log.error("daysShown !== 1, 5, or 7")
                                    }


                                }
                            };

                            $scope.redirect = function () {
                                $location.path("list"); //changes the view without reloading the page. Necessary for keeping this as a SPA
                            };

                            $scope.hideClasses = false;
                            $scope.hideBreaks = false;
                            // cdSchedule.classList.add("hideBreaks"); //Not implemented
                            $scope.hideEvents = false;
                            // cdSchedule.classList.add("hideEvents");
                            calculateEventWidths.setEventWidths();

                            $scope.fieldsetClasses = function () {
                                $scope.hideClasses = !$scope.hideClasses;

                                var cdSchedule = document.getElementsByClassName("cd-schedule")[0];
                                if ($scope.hideClasses) {
                                    cdSchedule.classList.add("hideClasses");
                                } else {
                                    cdSchedule.classList.remove("hideClasses");
                                }

                                calculateEventWidths.setEventWidths();

                            };

                            $scope.fieldsetBreaks = function () {
                                $scope.hideBreaks = !$scope.hideBreaks;

                                var cdSchedule = document.getElementsByClassName("cd-schedule")[0];
                                if ($scope.hideBreaks) {
                                    cdSchedule.classList.add("hideBreaks");
                                } else {
                                    cdSchedule.classList.remove("hideBreaks");

                                }

                                calculateEventWidths.setEventWidths();

                            };

                            $scope.fieldsetEvents = function () {
                                $scope.hideEvents = !$scope.hideEvents;

                                var cdSchedule = document.getElementsByClassName("cd-schedule")[0];
                                if ($scope.hideEvents) {
                                    cdSchedule.classList.add("hideEvents");
                                } else {
                                    cdSchedule.classList.remove("hideEvents");
                                }

                                calculateEventWidths.setEventWidths();

                            };

                            $scope.openMoreOptionsModal = function () {
                                var modal = document.getElementsByClassName("moreOptionsModal")[0];
                                if (modal.classList.contains("hideOptionsModal")) {
                                    modal.classList.remove("hideOptionsModal");
                                }
                            };

                            $scope.closeMoreOptions = function () {
                                var modal = document.getElementsByClassName("moreOptionsModal")[0];
                                if (!modal.classList.contains("hideOptionsModal")) {
                                    modal.classList.add("hideOptionsModal");
                                }
                            };

                            /* DAY OPTIONS */
                            if (document.body.clientWidth > 799)
                                $scope.selectedDayIcon = "icons/DayOptions/5_day.png";
                            else
                                $scope.selectedDayIcon = "icons/DayOptions/1_day.png";

                            $scope.agendaButton = "icons/DayOptions/agenda.png";
                            $scope.oneDayButton = "icons/DayOptions/1_day.png";
                            $scope.fiveDayButton = "icons/DayOptions/5_day.png";
                            $scope.sevenDayButton = "icons/DayOptions/7_day.png";

                            $scope.showDayOptions = false;

                            //when clicked, redirect() is also called and the view is switched to list view.
                            $scope.agendaClick = function () {
                                $scope.showDayOptions = false;
                            };
                            $scope.oneDayClick = function () {

                                $scope.showDayOptions = false;

                                //check because this can occur even if it's already selected. If it is already selected (is NOT in mobile-calendar view), do nothing
                                if ($scope.mobileFullClicked) {
                                    mobileWeek(1);
                                }

                                $scope.selectedDayIcon = "icons/DayOptions/1_day.png";

                            };
                            $scope.fiveDayClick = function () {
                                console.log("fiveDayClick");
                                $scope.showDayOptions = false;

                                /*
                                    if in in mobile view,
                                    or in calendar view and not already selected
                                 */
                                if (!$scope.mobileFullClicked || ($scope.mobileFullClicked && routeChangeData.get() !== 5)) {
                                    mobileWeek(5);
                                }

                                routeChangeData.set(5);

                                $scope.selectedDayIcon = "icons/DayOptions/5_day.png";
                            };
                            $scope.sevenDayClick = function () {
                                $scope.showDayOptions = false;

                                if (!$scope.mobileFullClicked || ($scope.mobileFullClicked && routeChangeData.get() !== 7)) {
                                    mobileWeek(7);
                                }

                                routeChangeData.set(7);

                                $scope.selectedDayIcon = "icons/DayOptions/7_day.png";

                            };

                            $scope.showOptionsModal = "hideDayOptionsModal";

                            /* END DAY OPTIONS */


                            /******** OPTION BARS SCROLLING ********************/
                            var topNav = document.getElementById("topNavigationSpan");
                            var bufferDiv = document.getElementsByClassName("buffer-div")[0];

                            var spanHeader = document.getElementById("spanHeader");

                            var moreOptionsImg = document.getElementsByClassName("moreOptionsImg")[0];
                            moreOptionsImg.style.top = bufferDiv.offsetHeight;

                            var dayOptionsModal = document.getElementsByClassName("dayOptionsModal")[0];
                            var dayOptionsImg = document.getElementsByClassName("dayIcon")[0];

                            //Fixes the icons dropping down by the height of the then-hidden "spanHeader" and "topNavigationSpan" heights
                            moreOptionsImg.style.top = bufferDiv.offsetHeight;
                            dayOptionsImg.style.top = bufferDiv.offsetHeight;
                            dayOptionsModal.style.top = bufferDiv.offsetHeight;

                            window.onscroll = function () {
                                if (document.body.clientWidth > 799) {

                                    if ((window.scrollY || document.documentElement.scrollTop) > (topNav.offsetHeight + topNav.offsetTop)) {
                                        moreOptionsImg.classList.add("isScrolled");
                                        dayOptionsModal.classList.add("isScrolled");
                                        dayOptionsImg.classList.add("isScrolled");
                                    } else {
                                        moreOptionsImg.classList.remove("isScrolled");
                                        dayOptionsModal.classList.remove("isScrolled");
                                        dayOptionsImg.classList.remove("isScrolled");
                                    }

                                } else {
                                    if ((window.scrollY || document.documentElement.scrollTop) > (spanHeader.offsetHeight)) {
                                        moreOptionsImg.classList.add("isScrolled");
                                        dayOptionsModal.classList.add("isScrolled");
                                        dayOptionsImg.classList.add("isScrolled");
                                    } else {
                                        moreOptionsImg.classList.remove("isScrolled");
                                        dayOptionsModal.classList.remove("isScrolled");
                                        dayOptionsImg.classList.remove("isScrolled");
                                    }

                                }
                            };

                            /******** END OPTION BARS SCROLLING ********************/

                            //Scroll down to where classes start
                            // $scope.$apply(function() {
                            //     windowLocationOnLoad.setScrollLocation($scope.selectedDay.day(), $scope.combinedClasses);
                            // });

                        }); //end of getClassesFactory.getClasses().then
                    });
                } //end of "if emplidstruct.ID === """, else "run the program"
                }) //end of getResponse.json().then
            } //end of else (getResponse.status === 200)
        }) //end of fetch.(getEmplid).then
            .catch(function (err) {
                alert("Fetch error: " + err);
            });
        $window.onload = function () {
            console.log("$window.onload");
            windowLocationOnLoad.setScrollLocation($scope.selectedDay.day(), $scope.combinedClasses);
        }; //end of $window.onload
    }); //end of app.controller
