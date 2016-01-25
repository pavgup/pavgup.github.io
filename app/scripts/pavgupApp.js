/* global angular */
angular.module('pavgupApp', ['headerModule'])
  .config([function() {
    console.log('configure block parsed');
  }])
  .run([function() {
    console.log('run blocak parsed');
  }]);
