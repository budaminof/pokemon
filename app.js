angular.module('pokemon', [])
.filter('pigLatin', function(){
   return function (input) {
  var result = [];
  var words = input.split(" ");

  words.forEach(function(e){
    var ending = ((e.split("").shift())) + 'ay';
  var arr = e.split("");
  arr.splice(0,1);
  var chopped = arr.join("");
  result.push(chopped + ending);
  });
 var newStr = result.join(" ");
 return newStr;
   };
});
