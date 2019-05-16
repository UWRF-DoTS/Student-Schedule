/**
 *
 * Factory closeEventModal - Attached to the "X" (Close) link: Closes the modal, and returns to the calendar
 * @param {Object} modal - DOM Object, the full "event-modal" div. Access the modal with modal[0]
 * @parma {Object} li - DOM object, the "smallEventModal" whose visibility needs to be set back to visible from hidden.
 *
 */

app.factory('closeEventModal', function() {

    var theFactory = {};

    theFactory.closeModal = function(modal, li) {

        //Make the small modal appear again
        li.style.visibility = "visible";

        //Remove "modal-open" class, so CSS will set the modal to "visibility: hidden"
        var cdSchedule = document.getElementsByClassName("cd-schedule")[0];
        cdSchedule.classList.remove("modal-is-open");


    };

    return theFactory;

});