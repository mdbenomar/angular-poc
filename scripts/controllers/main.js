'use strict';

// angular.module('vabNav', ['ngSanitize']) // Indien je HTML moet parsen

angular.module('vabNav')
    .controller('mainCtrl', function($scope, dataService) {
        dataService.getLinks(function(response) {
            //console.log(response.data);
            $scope.navlinks = response.data; // Alle links

            $scope.audienceNav = [];
            $scope.languageNav = [];
            $scope.serviceNav = [];
            $scope.mainNav = [];
            $scope.callNav = [];

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

                angular.forEach(navlink.callNav, function(callNav, index){
                    $scope.callNav.push(callNav);
                });
            });
        });

        $scope.getLength = function(obj) {
            return Object.keys(obj).length;
        }

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

        /*

        // Hier was ik nog aan bezig

        $scope.loopColumns = function(object){
          for(var i = 1; i <= 10; i++){
            if(object.col + i){
              return "<div id='col"+i+"'>Hallo</div>";
            }else{
              //break;
              console.log("ni echt goed he");
            }
          }
        }
        */

        dataService.getFooterLinks(function(response) {
            //console.log(response.data);
            $scope.footerlinks = response.data; // Alle links

            $scope.footerGeneral = [];
            $scope.footerGeneralwithSub = [];
            $scope.footerMisc = [];
            $scope.footerContact = [];
            $scope.footerKlantendienst = [];

            angular.forEach(response.data, function(footerlink, index) {

                angular.forEach(footerlink.footerGeneral, function(footerGeneral, index) {
                    $scope.footerGeneral.push(footerGeneral);
                });

                angular.forEach(footerlink.footerGeneralwithSub, function(footerGeneralwithSub, index) {
                    $scope.footerGeneralwithSub.push(footerGeneralwithSub);
                });

                angular.forEach(footerlink.footerMisc, function(footerMisc, index) {
                    $scope.footerMisc.push(footerMisc);
                });

                angular.forEach(footerlink.footerContact, function(footerContact, index){
                    $scope.footerContact.push(footerContact);
                });

                angular.forEach(footerlink.footerKlantendienst, function(footerKlantendienst, index){
                    $scope.footerKlantendienst.push(footerKlantendienst);
                });
            });
        });
    })
