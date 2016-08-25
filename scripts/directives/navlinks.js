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

/*angular.module('vabNav').directive('buHeader', function(){})
  .config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider){
      $routeProvider
        .when('/banden', {
          templateUrl: 'templates/bandenNav.html',
          controller: 'mainCtrl',
          replace: true
        });

        $locationProvider.html5Mode(true);
    }
  ])*/

  angular.module('vabNav').directive('buHeader',function(){
    return {
      templateUrl: 'templates/bandenNav.html',
      controller: 'mainCtrl',
      replace: true
    }
  })
