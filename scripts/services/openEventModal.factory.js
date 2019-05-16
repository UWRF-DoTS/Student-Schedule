/**
 *openEventModal factory
 *
 *
 * *Class openEventModal brings modal with more information about the class when the class is clicked. It takes up the majority of the screen, hides the class that it expanded from, and everything behind
 * it is dimmed/grayed out.
 * @param {object} li - The single-event list item that is being opened to its "event-modal"
 * @param {number} m - The index in $scope.combinedClasses that contains the class that this is.
 * @param {number} n - The index in $scope.combinedClasses[m].unique that contains the individual unique session of class that this is.
 * @param {?} $scope - $scope from controller
 *
 */

app.factory('openEventModal', function(adjustInstructorName, closeEventModal) {

    var theFactory = {};

    theFactory.openModal = function(li, m, n, $scope, eventsArray, eventType) {
        //hide the event that has been selected (this helps with the illusion that it's being "zoomed"/"enlarged")
        li.style.visibility = "hidden";

        //-----------------------------------Set modal attributes-----------------------------------------------------//

        var bulletPoint = "&#x025AA "; /* bullet point before each extended-info point */

        //Get the event-time-modal element (.modalHeader .content .event-time-modal)
        var eventDateModal = document.getElementsByClassName("event-time-modal")[0];
        //Determine start and end of class (with no "AM" or "PM")
        var startNoAmPm = li.getAttribute("data-start").substring(0, li.getAttribute("data-start").length - 2);
        var endNoAmPm = li.getAttribute("data-end").substring(0, li.getAttribute("data-end").length - 2);
        //Set the start/end time
        eventDateModal.innerHTML = startNoAmPm + " - " + endNoAmPm;
        eventDateModal.style.color = "white";

        //Get the event-location-modal element (.event-location-modal")
        var eventLocationModal = document.getElementsByClassName("event-location-modal")[0];


        //get the "event-name-modal" element (the <em> element under the "class='content'" div, in the "header" div, in the main "event-modal" div)
        var eventNameModal = document.getElementsByClassName("event-name-modal")[0];

        //Set text to white
        eventNameModal.style.color = "white";
        eventLocationModal.style.color = "white";


        if (eventType === "class") {

            //set class name ("CSIS 335")
            eventNameModal.innerHTML = li.getAttribute("data-name");

            //Set location
            eventLocationModal.innerHTML = eventsArray[m].unique[n].location;

            //-------------------------------------------Set extended info elements---------------------------------------//

            //get extended info elements
            var extendedInfoInstructor = document.getElementsByClassName("extended-information-instructor")[0];
            var extendedInfoDays = document.getElementsByClassName("extended-information-days-and-time")[0];
            var extendedStartEndDatesTitle = document.getElementsByClassName("extended-information-startEndDatesTitle")[0];
            var extendedStartEndDateStart = document.getElementsByClassName("extended-information-startEndDateStart")[0];
            var extendedStartEndDateEnd = document.getElementsByClassName("extended-information-startEndDateEnd")[0];

            var extendedInfoUnitsTaken = document.getElementsByClassName("extended-information-unitsTaken")[0];
            var extendedInfoClassNumber = document.getElementsByClassName("extended-information-classNumber")[0];
            var extendedInfoSection = document.getElementsByClassName("extended-information-section")[0];

            //-----------------Done setting instructor info

            //-----------------Set days info (i.e. "MonWedFri 9:00AM - 9:50AM" ... if days with different times: "TuTh: 9:00AM - 9:50AM<br>Wed 1:00PM - 2:15PM")
            //initialize the String for innerHTML of days-and-time.

            //getting extendedInfoContainer is only necessary here, for inserting before extendedStarTendDatesTitle
            var extendedInfoContainer = document.getElementsByClassName("extended-information")[0];
            var classDays = "";
            //loop through the "unique" array (size = number of different times/locations met)

            for (var iUnique = 0; iUnique < eventsArray[m].unique.length; iUnique++) {

                // var newNode = document.createElement("p");
                // newNode.textContent = "testingTesting";
                // newNode.classList.add("extended-information-days-and-time");
                // extendedInfoContainer.insertBefore(newNode, extendedStartEndDatesTitle);


                if (iUnique > 0) //If this is not the first unique class time, add new line
                    classDays += "<br>";

                //Add the time
                classDays += bulletPoint + eventsArray[m].unique[iUnique].daysString;
                classDays += (": " + eventsArray[m].unique[iUnique].timeStart + " - " + eventsArray[m].unique[iUnique].timeEnd);

            }

            //Set days inner HTML
            // extendedInfoDays.innerHTML = bulletPoint + classDays;
            extendedInfoDays.innerHTML = classDays;

            //---------------Done setting days

            //-----------------Set instructor info (i.e. "Billy Joel", or "John Smith<br>Taylor Swift")
            //loop through instructors to get String of instructors
            var instrString = ""; //initialize String for innerHTML of instructors
            for (var instr = 0; instr < eventsArray[m].instructor.length; instr++) {
                if (instr > 0) //if this is not the first instructor, add a line break.
                    instrString = instrString + "<br/>";
                //Call function to adjust name of instructor from form "Tenner, Thomas" -> "Thomas Tenner"
                var newName = adjustInstructorName.adjustName(eventsArray[m].instructor[instr]);
                instrString = instrString + newName;
            }
            //set instructor inner HTML to instructor names.
            extendedInfoInstructor.innerHTML = bulletPoint + instrString;

            //---------------Set start/ending dates
            //Adjust start/end dates format. (it's currently "2017-09-06 00:00:00.0"). Turn it to "09-06-2017")
            //----Adjust start date
            //convert to a string
            var startString = eventsArray[m].dateStart;
            //cut off time
            startString = startString.substring(0, 10);
            //Split the three numbers apart
            var startStringArray = startString.split("-");
            //Finish adjusting start time string (ultimately turns the form "2017-09-06" -> "09-06-2017")
            startString = startStringArray[1] + "-" + startStringArray[2] + "-" + startStringArray[0];
            //---Adjust end date
            var endString = eventsArray[m].dateEnd;
            //cut off time
            endString = endString.substring(0, 10);
            //Split the three numbers apart
            var endStringArray = endString.split("-");
            //Finish adjusting end time string
            endString = endStringArray[1] + "-" + endStringArray[2] + "-" + endStringArray[0];
            //Finally, set innerHTML to correct information
            // extendedStartEndDatesTitle.innerHTML = bulletPoint + "Start/End dates:<br>" + startString + "<br>" + endString;
            extendedStartEndDatesTitle.innerHTML = bulletPoint + "Start/End dates:";
            extendedStartEndDateStart.innerHTML = startString;
            extendedStartEndDateEnd.innerHTML = endString;

            //---------------Done setting start/ending dates

            //---------------Set unitsTaken (credits)
            extendedInfoUnitsTaken.innerHTML = bulletPoint + "Credits: " + eventsArray[m].unitsTaken;

            //---------------Set class number
            extendedInfoClassNumber.innerHTML = bulletPoint + "Class Number: " + eventsArray[m].classNumber;

            //---------------Set section
            extendedInfoSection.innerHTML = bulletPoint + "Section: " + eventsArray[m].section;

            //---------------------End setting "extended-information" info-----------------------//

        }
        else if (eventType === "event") {

            //Set location
            eventLocationModal.innerHTML = bulletPoint + eventsArray[m].location;

            //hide the event name modal
            eventNameModal.style.display = "none";

        }
        else {
            console.log("ERROR: Should not be else");
        }

        //---------------Set body properties
        var classTitle = document.getElementsByClassName("classTitle")[0];
        //title is the classes name, i.e. "Intro To Data Science"
        classTitle.innerHTML = eventsArray[m].title;
        //The longer description of what the course involves.
        var bodyBg_description = document.getElementsByClassName("classDescription")[0];
        bodyBg_description.innerHTML = eventsArray[m].description;

        //---------------Set header properties
        var modalHeader = document.getElementsByClassName("modalHeader")[0];
        if (eventType === "class") {
            modalHeader.style.backgroundColor = $scope.listOfColors[m];
        }
        if (eventType === "event") {
            modalHeader.style.backgroundColor = $scope.listOfEventColors[m];
        }

        //---------------Add "modal-is-open" class to the .cd-schedule
        //---------------This causes the CSS to change the background (everything but the newly expanded event-modal) to a darker shade by
        //---------------making the cover-layer element visible (for the purpose of emphasizing the modal) as well as making the event-modal visible.
        document.getElementsByClassName("cd-schedule")[0].classList.add("modal-is-open");

        //---------------Add close button, and attach the closing event listener.
        var closeLink = document.getElementsByClassName("close")[1]; //There are two "close" buttons (one on moreOptionsModal and one of event-modal. This is event-modal.
        //Add the onclick function to close the modal
        closeLink.onclick = function () {

            //Un-hide "event-name" and "more-information" divs - are hidden if event-type is "event"
            eventNameModal.style.display = "block";

            //Get the event-modal element
            var modal = document.getElementsByClassName("event-modal")[0];
            //call the close function
            closeEventModal.closeModal(modal, li);
        };

        //----------------Add listener to cover-layer so clicking cover-layer will close modal
        var coverLayer = document.getElementsByClassName("cover-layer")[0];

        coverLayer.onclick = function() {
            //Get the event-modal element
            var modal = document.getElementsByClassName("event-modal")[0];
            //call the close function
            closeEventModal.closeModal(modal, li);
        }

    };

    return theFactory;

});