let pokemonRepository = (function () {
    let pokemonList = [
    {name:"Squirtle", types: "water", height: 0.5},
    {name:"Pikachu", types: "electric", height: 0.4},
    {name:"Jigglypuff", types: ["fairy", "normal"], height: 0.5}
];
function add (pokemon) {
    pokemonList.push(pokemon);
}
function getAll() {
    return pokemonList;
}
function addListItem(pokemon) {
    let pokedexList = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('pokemon-name-list');
    listItem.appendChild(button);
    pokedexList.appendChild(listItem);
    button.addEventListener('click', showDetails)
  }

  function showDetails(pokemon) {
    console.log(pokemon.pokemonName);
  }
return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    showDetails: showDetails
};
})();
/*
function printArrayDetails (i) {
    if (i.height < 0.5) {
        console.log(i.name + " (height: " + i.height + ") - Wow, that's small!");
        document.write(i.name + " (height: " + i.height + ") - Wow, that's small!"+ "<br>");
    }
    else{
        console.log(i.name + " (height: " + i.height + ")");
        document.write(i.name + " (height: " + i.height + ")"+ "<br>");
    }
};

pokemonRepository.getAll().forEach(printArrayDetails);*/
pokemonRepository.getAll().forEach(function(pokemon){

    pokemonRepository.addListItem(pokemon);
  
  })