
angular.module('myController', [])
  .controller('MyController', ['$scope', function($scope) {
    $scope.items = [
      {name: 'celery'},
      {name: 'peanut butter'},
      {name: 'raisins'}
    ];
    $scope.click = function() {
      $scope.clicked = true;
    };
  }]);
var MyApp = angular.module('myApp', ['myController']);

