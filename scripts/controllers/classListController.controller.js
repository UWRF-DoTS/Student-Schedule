

app.controller('classListController', function ($scope,
                                                $window,
                                                $location,
                                                getClassesFactory,
                                                classMaker,
                                                getBrowserSize,
                                                routeChangeData) {

    $scope.multipleLocations = false; //This is a variable telling whether there are multiple locations for the class (true / false)

    var w = angular.element($window); //Reference to the jquery object. Should work without the full jquery version loaded, as it has jquery under the hood

    //get emplid (w number)
    fetch(/* ColdFusion removal: Link to API call */, {}).then(function (getResponse) {
        if (getResponse.status !== 200) {
            alert("Fetch error " + getResponse.status + ", not caught");
        } else {
            getResponse.json().then(function (emplidStruct) {

                //remove "W" from emplid.ID
                $scope.emplid = emplidStruct.ID.substr(1); //important that "ID" is capitalized

                //---------Begin getting and parsing class data
                getClassesFactory.getClasses($scope.emplid)
                    .then(function (response) {
                        if (response.status !== 200) {
                            alert("There was an error fetching classes; status code: " + response.status);
                        }

                        //Convert the string of data into an object
                        var classesData = JSON.parse(response.data.Filecontent);
                        console.log("classesData");
                        console.log(classesData);

                        //Check if the data is in schema form or not, then call the correct makeClasses function.
                        if (classesData[0].hasOwnProperty("context")) {
                            if (classesData[0].context === "http://schema.org/") {
                                console.log("is schema");
                                $scope.combinedClasses = classMaker.makeCombinedSchemaClasses(classesData);
                            }
                        } else {
                            $scope.combinedClasses = classMaker.makeCombinedClasses(classesData);
                            console.log("not schema");
                        }
                        console.log("combinedClasses");
                        console.log($scope.combinedClasses);
                        //----------end parsing class data

                        //listView needs dates and instructors formatted differently
                        $scope.combinedClasses = classMaker.listViewFormat($scope.combinedClasses);

                        $scope.redirect = function () {
                            $location.path("/");
                        };

                        $scope.hideMoreInfo = true;

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

                        $scope.selectedDayIcon = "icons/DayOptions/agenda.png";
                        $scope.agendaButton = "icons/DayOptions/agenda.png";
                        $scope.oneDayButton = "icons/DayOptions/1_day.png";
                        $scope.fiveDayButton = "icons/DayOptions/5_day.png";
                        $scope.sevenDayButton = "icons/DayOptions/7_day.png";

                        $scope.showDayOptions = false;

                        $scope.agendaClick = function () {
                            $scope.showDayOptions = false;
                        };
                        $scope.oneDayClick = function () {
                            $scope.showDayOptions = false;
                            $scope.selectedDayIcon = "icons/DayOptions/1_day.png";
                        };
                        $scope.fiveDayClick = function () {
                            $scope.showDayOptions = false;
                            routeChangeData.set(5);
                            if (getBrowserSize.getDims().width < 800) {
                                routeChangeData.setMobileFull(true);
                            }
                            $scope.selectedDayIcon = "icons/DayOptions/5_day.png";
                        };
                        $scope.sevenDayClick = function () {
                            $scope.showDayOptions = false;
                            routeChangeData.set(7);
                            if (getBrowserSize.getDims().width < 800) {
                                routeChangeData.setMobileFull(true);
                            }
                            $scope.selectedDayIcon = "icons/DayOptions/7_day.png";
                        };

                        $scope.showOptionsModal = "hideDayOptionsModal";

                        /* END DAY OPTIONS */


                        /* MORE DAY OPTIONS */
                        if (getBrowserSize.getDims().width >= 800) {
                            $scope.showOneDayOption = false;
                        }
                        //defaults for mobile-size
                        else {
                            $scope.showOneDayOption = true;
                        }

                        w.bind('resize', function () {
                            $scope.$apply(function () {
                                if (getBrowserSize.getDims().width >= 800) {
                                    $scope.showOneDayOption = false;
                                } else {
                                    $scope.showOneDayOption = true;
                                }
                            })
                        });


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


                        //----------------------------------------End filling class tables -----------------------------------------------//
                    }); //end of getClasses
            }) //end of getResponse.json.then()
        } //end of else (getResponse.status === 200)
    }) //end of fetch.(getEmplid).then
        .catch(function (err) {
            alert("Fetch error: " + err);
        });

}); //end of classObjectController