angular.module('pokemon')
.controller('MainCtrl', ['$scope','pokeService', function ($scope, pokeService) {

  pokeService.getPokemon();
  $scope.pokemon = pokeService.pokemon;
}])
