/**
 * Factory getBrowserSize
 * Used for obtaining browser dimensions - width and height.
 *
 * The factory object contains:
 * - function "getDims" - returns object containing the browser width and height.
 *   @return "dims" object containing properties:  width - inner width of browser window
 *                                                 height - inner height of browser window
 *
 */
app.factory('getBrowserSize', function() {

    var theFactory = {};

    theFactory.getDims = function() {
            var dims = {};
            dims.width = window.innerWidth;
            dims.height = window.innerHeight;
        return dims;
    };

    return theFactory;

});

