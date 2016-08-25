'use strict';

angular.module('vabNav')
.service('dataService', function($http) {
  this.getLinks = function(callback){
    $http.get('data/nav.json')
    .then(callback)
  };

  this.getFooterLinks = function(callback){
    $http.get('data/footer.json')
    .then(callback)
  };
});
