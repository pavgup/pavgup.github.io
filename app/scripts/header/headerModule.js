/* global angular */

angular.module('headerModule', [])
.config([function() {
  console.log('headerModule config callback fired');
}])
.run([function() {
  console.log('headerModule run callback fired');
}])
.controller('HeaderCtrl', ['$scope', function($scope) {
  $scope.name = 'Pavan Gupta';
}]);
