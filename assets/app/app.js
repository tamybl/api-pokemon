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

//funcion de error
function handleError() {
  console.log('Se ha presentado un error');
}

//llamando la data
function addNewPokemon() {
  const data = JSON.parse(this.responseText);
  console.log(data);

  //console.log(article);

//Buscando y agregando nombre del pokemon
let  nom =  document.createElement('span');
 nom.className = 'titulo'
const nombre = [];
  for (let i=0; i < data.forms.length; i++ ){
    nombre.push(data.forms[i].name);
  }
  nom.innerText = nombre;

//Buscando y agregando habilidad de pokemon
let li = document.createElement('span');
 li.className = 'texto'
  const pokemon = [];
  for (let i=0; i < data.abilities.length; i++ ){
    pokemon.push(data.abilities[i].ability.name);
  }
  li.innerText = pokemon;

// Experiencia del pokemon
 let exp =  document.createElement('span');
 exp.innerText = data.base_experience;
 exp.className = "texto"
//obteniendo la imagen del pokemon
  let img = document.createElement('img');
  img.className = 'img2-responsive'
  let picture = data.sprites.front_female;
  img.src = picture;

  let hab = document.createElement('span');
   hab.innerText = 'Habilidad';
   hab.className = 'titulo2';

 let expTxt = document.createElement('span');
   expTxt.innerText = 'Experiencia';
   expTxt.className = 'titulo2'

  datos_pokemon.appendChild(hab);
  datos_pokemon.appendChild(nom);
  datos_pokemon.appendChild(img);
  datos_pokemon.appendChild(hab);
  datos_pokemon.appendChild(li);
  datos_pokemon.appendChild(expTxt);
  datos_pokemon.appendChild(exp);
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



