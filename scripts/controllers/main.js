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
    })
