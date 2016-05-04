angular.module('pokemon').factory('pokeService',[ '$http','$q', function($http, $q) {

  var pokeService = {

    pokemon: [],
    getPokemon: function () {
      var randoNumberArr = [];
      var promiseArray = [];

      for (var i = 1; i < 6; i++) {
        randoNumberArr.push(Math.floor(Math.random() * (710 - 1 + 1)) + 1)
      }

      for (i = 0; i < randoNumberArr.length; i++) {
        promiseArray.push($http.get('http://pokeapi.co/api/v2/pokemon/'+randoNumberArr[i]));
      }

      $q.all(promiseArray)
        .then(function(dataArray) {
        dataArray.forEach(function(e){
          pokeService.pokemon.push(
            { name: e.data.name,
              sprite: e.data.sprites.front_default,
              types: e.data.types,
              moves: e.data.moves})
              return pokeService.pokemon
            })
          });
        }
      }
      return pokeService
    }])
