/**
 * Config routeProvider
 *
 * Define the routes to the different views: Calendar and list views.
 * Define the path, its .html file and associated controller
 *
 * Precursor to the "path": ("/", "/list"): https://...........
 *
 */

app.config(function ($routeProvider) {
    $routeProvider
        //Define a route
        .when('/',
            {
                templateUrl: 'Views/calendarView.html',
                controller: 'classCalendarController'
            })
        .when('/list',
            {
                templateUrl: 'Views/classListView.html',
                controller: 'classListController'
            })
});