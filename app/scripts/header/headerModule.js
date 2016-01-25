/* global angular */

angular.module('headerModule', [])
.config([function() {
  console.log('headerModule config callback fired');
}])
.run([function() {
  console.log('headerModule run callback fired');
}])
.controller('HeaderCtrl', ['$scope', function($scope) {
  console.log($scope);
  this.myName = 'Pavan Gupta';
  this.contacts = [
    {
      href: 'https://twitter.com/pavgup',
      icon: 'fa-twitter',
      serviceName: 'Twitter'
    }, {
      href: 'https://facebook.com/pavangupta',
      icon: 'fa-facebook',
      serviceName: 'Facebook'
    }, {
      href: 'https://github.compavgup',
      icon: 'fa-github',
      serviceName: 'Github'
    }, {
      href: 'https://linkedin.com/in/pavgup',
      icon: 'fa-linkedin',
      serviceName: 'LinkedIn'
    }, {
      href: 'mailto:pg8p@virginia.edu',
      icon: 'fa-envelope-o',
      serviceName: 'Email'
    }
  ];
}]);
