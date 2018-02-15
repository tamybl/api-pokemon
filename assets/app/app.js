
$('form').on('submit',function(e){
   e.preventDefault();


   var types = $('input[type=text]').val().replace(' ','');
   types = types.split(',');
   console.log(types);

   var trainerTypes = types.map(function(type){
     return $.ajax({
       url:'https://pokeapi.co/api/v2/type/' + type,
       dataType: 'json',
       method:'GET'

     });

   });
     
     $.when.apply(null,trainerTypes)
      .then(function(){
        var pokemonTypes = Array.prototype.slice.call(arguments);
        getDoubleDmgTypes(pokemonTypes);

      });
   
});

function getDoubleDmgTypes(pokemonTypes){
  pokemonTypes = pokemonTypes.map(function(types){
    return types[0].damage_relations.double_damage_from;
  });
  pokemonTypes = flatten(pokemonTypes)
  console.log(pokemonTypes);

}

function flatten(arrayToFlaten) {
  return arrayToFlaten.reduce(function(a,b){
     return a.concat(b);
  },[]);
}











/*'use strict'

const fetchOption = {
  headers: {
    'Content-Type':'application/json'
  },
  mode:'cors'
};

$('form').on('submit',function(e){
e.preventDefault();

let types = $('input[type=text]').val().replace(/\s/g,'');
types = types.split(',');

let trainerTypeCalls = types.map(elem => {
  return fetch(`http://pokeapi.co/api/v2/type/${elem}/`,fetchOption)
});

Promise.all(trainerTypeCalls)
   .then(data => {
      data = data.map(singleData => singleData.json() );
      Promise.all(data)
      .then(res => {
        console.log(res);
        });
    });

});


function displayPokemon(pokemon){
pokemon.forEach(poke => {
  var container = $('<div>').addClass('pokemon');
  var $image = $('<img>').attr('src',`http://pokeapi.co/media/img/${poke.id}.png`);
  var $title = $('<h2>').text(poke.name);
  $container.append($image,$title);
  $('.poke-container').append($conatiner);
});

}*/



