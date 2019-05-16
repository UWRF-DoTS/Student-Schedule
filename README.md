# Student's Schedule Calendar
## Developed by: Thomas Tenner

## PROJECT GOALS
- To create a calendar app for students that is fluid and effective on any device, whether it be desktop, mobile, or tablet.
- Plan ahead to make the calendar functional for future situations that the school might not presently have at the moment, whether it's classes on the weekends,
  and all sorts of combinations of different professors, locations, times, and days.
- Have the ability to not only display students' classes, but non-class events and breaks if given.

## Desktop view:
  - Desktop view has two views: the full week's schedule, either including weekends or hiding weekends.
    - This view will be based on the the template designed by CodyHouse, found at: https://codyhouse.co/gem/schedule-template/
  - The "events" (whether they be classes or non-class events) that appear on the schedule as boxes with limited information - time, name, location.
  - These events, when selected, will pop up into larger views ("event-modals", as they are referred to in the project), to include more information
    such as instructor names, the class description, and more.

## Mobile view:
  - Mobile view should have two views:
    - It should default show the student's schedule that day, with the ability to swipe left/right to view the previous day/next day (and so on; student should be able to
      swipe through any day of the semester.)
    - There will be a button to change the view from that day to the full week's schedule, similar to the desktop view.

## List view:
  - Rather than seeing a calendar, the student can see their classes in the form of a list, similar to what eSIS has.
  
## Other Information: 
  - Calendar is bound to the class schedule. It begins the week of the first class, and ends the week of the last class.
    - See classCalendarController, "Find schedule bounds", "checkDateBounds" 
  

## References:
- template design by codyhouse.co
- icons from icons8.com

## Notes for Updating:
- Pixel size of .timeline elements (30 minute period) are set in:
    - style.css:
        line ~584, .cd-schedule .timeline li { ... }
        line ~653, .cd-schedule .events .events-group { ... }
    - singleEventMaker.service.js:
        lines ~235, 236: var eventSlotHeight, eventSlotHeightMobile0

## Assumptions Made:
- A "break" is a full day