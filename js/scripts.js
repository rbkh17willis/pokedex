let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    /*IIFE Config */
function add (pokemon) {
    pokemonList.push(pokemon);
}
function getAll() {
    return pokemonList;
}

/* API and Modals*/
function showDetails(pokemon) {
  loadDetails(pokemon).then(function () {
  showModal(pokemon);
  });
}

function showModal(pokemon) {
  pokemonRepository.loadDetails(pokemon).then(function () {

    let modalTitle = document.querySelector(".modal-title");
    modalTitle.innerText = pokemon.name;

    let imageContainer = document.querySelector(".image-container");
    let pokemonImage = document.createElement("img");
    pokemonImage.src = pokemon.imageUrl;
    pokemonImage.classList.add("pokemon-image");
    imageContainer.innerHTML = "";
    imageContainer.append(pokemonImage);

    let pokemonHeight = document.querySelector(".height");
    pokemonHeight.innerText = "Height: " + pokemon.height;

    let modal = document.querySelector(".modal");
    modal.classList.add("modal-is-visible");
    modal.classList.remove("modal");


    let buttonContainer = document.querySelector("#button-container");
    let modalCloseButton = document.createElement("button");
    modalCloseButton.classList.add("btn");
    modalCloseButton.classList.add("modal-close");
    modalCloseButton.innerText = "X";
    buttonContainer.innerHTML = "";
    buttonContainer.append(modalCloseButton);

    modalCloseButton.addEventListener("click", function () {
      closeModal();
    });
  });

  function closeModal() {
    let modalContainer = document.querySelector("#modal-container");
    modalContainer.classList.remove("modal-is-visible");
    modalContainer.classList.add("modal");
    modalCloseButton.innerHtml = "";
  }
}

/* DOM and API */
function addListItem(pokemon) {
    let pokedexList = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('pokemon-name-list');
    listItem.appendChild(button);
    pokedexList.appendChild(listItem);
    button.addEventListener('click', function (event) {
      showDetails(pokemon);
    });
  }

  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }

 /* The Ultimate Return that controls the fate of this entire code so don't delete it */
return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    showDetails: showDetails,
    loadList: loadList,
    loadDetails: loadDetails,
    showModal: showModal,
};
})();

pokemonRepository.loadList().then(function() {
pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});