angular.module('vabNav')
.directive('vabHeader', function() {
  return {
    templateUrl: 'templates/vabHeader.html',
    controller: 'mainCtrl',
    replace: true
  }
})

angular.module('vabNav').directive('vabFooter', function() {
  return {
    templateUrl: 'templates/vabFooter.html',
    controller: 'mainCtrl',
    replace: true
  }
})
