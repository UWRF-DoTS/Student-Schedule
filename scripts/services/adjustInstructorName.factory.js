/**
 *
 * Factory adjustInstructorName
 * Used to take a name in the format "LastName, FirstName" and convert it to "FirstName LastName"
 *
 */


app.factory('adjustInstructorName', function() {

    var theFactory = {};

    /** function adjustName - does the name conversion
    *    @param {string} name - the original name, in the form "LastName, FirstName"
    *    @returns {string} - the converted name, in the form "FirstName LastName"
    */
    theFactory.adjustName = function(name) {
        //splits the name into an array by removing "," and returning the results
        var nameArray = name.split(",");
        //Combine pieces of array to make a full name: "firstName lastName"
        return nameArray[1] + " " + nameArray[0];
    }; //end of adjustName method

    return theFactory;

}); //end of factory