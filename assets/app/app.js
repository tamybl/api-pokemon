const form = document.getElementById('search-form');
const searchField = document.getElementById('search-keyword');
const datos_pokemon = document.getElementById('datos_pokemon');
let searchedForText;

//a nuestro form le damos el evento submit
form.addEventListener('submit', function (e){
  e.preventDefault();
  datos_pokemon.innerHTML = '';
  searchedForText = searchField.value;
  getPokemon();
})

//en la funcion getPokemon haremos nuestras peticiones
function getPokemon() {
  const articleRequest = new XMLHttpRequest();
  //articleRequest.open('GET', `https://pokeapi.co/api/v2/pokemon/${searchedForText}`);
  articleRequest.open('GET', `https://pokeapi.co/api/v2/pokemon/${searchedForText}`);
  articleRequest.onload = addNewPokemon;
  articleRequest.onerror = handleError;
  articleRequest.send();
}

function handleError() {
  console.log('Se ha presentado un error');
}

function addNewPokemon() {
  const data = JSON.parse(this.responseText);
  //const response = data.response;
  console.log(data);

  //console.log(article);

  let li = document.createElement('li');
  let habilidad = document.createElement('li');
  let  experiencia = document.createElement('li');
  let  nombre =  document.createElement('li');

  //li.className = 'articleClass'
  const pokemon = [];
  for (let i=0; i < data.abilities.length; i++ ){
    pokemon.push(data.abilities[i].ability.name);
    //console.log(data.abilities);
  }

  li.innerText = pokemon;

//obteniendo la imagen del pokemon
  let img = document.createElement('img');
  img.className = 'img-responsive'
  let picture = data.sprites.front_female;
  img.src = picture;



  
  datos_pokemon.appendChild(img);
  datos_pokemon.appendChild(li);
}





/*const $searchField = $('#search-keyword');
const $responseContainer = $('#response-container');
let searchedForText;

$form.submit(function(e){
    e.preventDefault();
    $responseContainer.html('');
    searchedForText = $searchField.val();
    //Estamos invocando la función getNews aquí es donde se crean las peticiones
    getNews();
});


function getNews(){
    $.ajax({
        url:`https://pokeapi.co/api/v2/pokemon/${searchedForText}`,
    }).method('GET')
    .done(addNews)
    .fail(handleError)
     
}

function addNews(news){
  console.log(news);
  const articles = news.response.docs;
 articles.forEach(function(article){
 const title = article.headline.main;
 const snippet = article.snippet;
  let $li = $('<li />').addClass('articleClass').text(title +'\n'+snippet);

  $responseContainer.append($li);

  });
  
}


function handleError(){
    console.log('Se ha presentado un error');
}


*/




/*$('form').on('submit',function(e){
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
  var damageTypes =  pokemonTypes.map(function(type){
     return $.ajax({
      url:type.url,
      dataType: 'json',
      method:'GET'
     });
  });

 $.when.apply(null,damageTypes)
     .then(function(){
      var pokemon = Array.prototype.slice.call(arguments);
        buildTeam(pokemon);
     });
  

}

function buildTeam(pokemon){
   pokemon= pokemon.map(function(poke){
    return poke[0].pokemon;

   });
 pokemon = flatten(pokemon);
 var team = [];6; i++

 for(var i=0; i<6; i++){
  team.push(getRandomPokemon(pokemon));
 }
 team = team.map(function(pokemon){
  return $.ajax({
    url:pokemon.pokemon.url,
    dataType:'json',
    methd:'GET'

   });

 });

 $when.apply(null,team)
  .then(function(){
    var pokemonTeam = Array.prototype.slice.call(arguments);
    pokemonTeam = pokemonTeam.map(function(){
          return poke[0];
      });
    console.log(pokemonTeam);
    });
}


function displpayPokemon(pokemon){
pokemon.forEach(function(poke){
  var $container = $('<div>').addClass('pokemon');
  var $image = $('<img>').attr('src','http://pokeapi.co/media/img/'+poke.id+'.png');
  var $title = $('<h2>').text(poke.name);
  $container.append($image,$title);
  $('.poke-container').append($container);
  });
}


function getRandomPokemon(pokemonArray){
  var index = Math.floor(Math.ramdom() * pokemonArray.length);
  return pokemonArray[index];
}


function flatten(arrayToFlaten) {
  return arrayToFlaten.reduce(function(a,b){
     return a.concat(b);
  },[]);
}

*/









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



