/**
 * Directive listClassTables
 *
 * Used in classListView.html: Is the table of characteristics for each class in the list-view.
 * Is defined when used as the attribute "list-class-table" in a <table> element
 * HTML comes from listClassTableTemplate.html
 *
 */

app.directive('listClassTable', function() {
    return {
        restrict: 'A', //define that this can only be used as an attribute
                        /* This is being defined as an attribute in (to be put in a <tr> tag) and not as its own element because browsers, when constructing tables,
                         * don't include anything that doesn't start w/ <tr>, <td>, etc. So custom directives cannot be used as elements that don't belong in tables. */
        templateUrl: 'DirectiveTemplates/listClassTableTemplate.html',
        scope: true //This creates an isolate scope, but also will prototypically inherit its parent scope from controller.
                    //The default for this value is "false" (doesn't create isolate scope)
                    //When instantiating as an object (scope: { ... }), it doesn't inherit from the controller's scope.
    };
});