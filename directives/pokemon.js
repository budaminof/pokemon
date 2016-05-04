angular.module('pokemon')
.directive('pkItem', function () {
  return {
    restrict: 'E',
    templateUrl: '/directives/pokemon.html',
    scope: {
      data: '='
    }
  }
})
