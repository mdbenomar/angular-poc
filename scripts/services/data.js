'use strict';

angular.module('vabNav')
.service('dataService', function($http) {
  this.getLinks = function(callback){
    $http.get('data/nav.json')
    .then(callback)
  };
});
