'use strict';

angular.module('vabNav')
    .controller('mainCtrl', function($scope, dataService) {
        dataService.getLinks(function(response) {
            //console.log(response.data);
            $scope.navlinks = response.data; // Alle links

            $scope.audienceNav = [];
            $scope.languageNav = [];
            $scope.serviceNav = [];
            $scope.mainNav = [];

            angular.forEach(response.data, function(navlink, index) {

                angular.forEach(navlink.audienceNav, function(audienceNav, index) {
                    $scope.audienceNav.push(audienceNav);
                });

                angular.forEach(navlink.taalSwitch, function(languageNav, index) {
                    $scope.languageNav.push(languageNav);
                });

                angular.forEach(navlink.serviceNav, function(serviceNav, index) {
                    $scope.serviceNav.push(serviceNav);
                });

                angular.forEach(navlink.mainNav, function(mainNav, index) {
                    $scope.mainNav.push(mainNav);
                });
            });
        });

        $scope.getLength = function(obj) {
            return Object.keys(obj).length;
        }

        /*$scope.getColumns = function(object) {
            if (object.hasAside == 1) {
                if (object.columns == 3) {
                    return "_has_4_items _has_aside";
                } else if (object.columns == 4) {
                    return "_has_5_items _has_aside";
                } else {
                    return "";
                }
            } else {
                if (object.columns == 4) {
                    return "_has_4_items";
                } else if (object.columns == 5) {
                    return "_has_5_items";
                } else {
                    return "";
                }
            }
        }*/


        $scope.getColumns = function(object) {
            var columnClassName = " ";
            if (object.hasAside > 0) {
                if (object.columns > 0) {
                    columnClassName = "_has_" + (object.hasAside + object.columns) + "_items _has_aside";
                }
            } else {
                columnClassName = "_has_" + object.columns + "_items";
            }
            return columnClassName;
        }
    })
