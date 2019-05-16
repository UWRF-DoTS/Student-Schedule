// For $http: can't use .success and .error; they've been depreciated. Use .then

// The factory presently works being given the url it needs (currently it's using my w# and term #.)
//step 2: send it the url (This will not be implemented until we put it into myUW, as it will use a different way to get the ID than our DoTS development screen.

/* Because functions defined in the factory don't know what to do with the data they handle, each one returns a promise
 that can be wired up to callback functions by the caller - meaning, the controller that calls this will handle the promises */

/**
 * factory getClassesFactory
 *
 * Performs a call to the servers to obtain student class information
 *
 * contains:
 *  - function getClasses - perform the call
 *    @param {String} emplid - w number
 *    @return {promise} - returns the asynchronous call "$http.get"... append this call with a  .then(function(data) { .... })
 *  For now: no parameters. I have it only getting my classes.
 *
 */

app.factory('getClassesFactory', function ($http) {

    var theFactory = {};

    //Call a proxy which will then get the information from the server itself.
    //This is to separate sensitive data from the client.
    theFactory.getClasses = function(emplid) {
        var url = /* ColdFusion removal: Call to server proxy */ + emplid;
        return $http.get(url);
    };

    theFactory.getEvents = function(category) {
        var url = /* ColdFusion removal: Call to server proxy */ + category;
        return $http.get(url);
    };

    return theFactory;

}); //end of factory