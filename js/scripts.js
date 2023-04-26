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

    let modalContainer = document.querySelector('#modal-container');
        modalContainer.innerHTML = '';
        let modal = document.createElement('div');
        modal.classList.add('modal');

        let closeButtonElement = document.createElement('button');
        closeButtonElement.classList.add('modal-close');
        closeButtonElement.innerText = 'Close';

        let titleElement = document.createElement('h1');
        titleElement.innerText = (pokemon.name);
        let contentElement = document.createElement('p');
        contentElement.innerText = 'Height: ' + (pokemon.height);

        modal.appendChild(closeButtonElement);
        modal.appendChild(titleElement);
        modal.appendChild(contentElement);

        if (pokemon.imageUrl) {
          let imagePokemon = document.createElement('img');
          imagePokemon.setAttribute('src', pokemon.imageUrl);
          imagePokemon.setAttribute('height', '250');
          imagePokemon.setAttribute('width', '250' );
          imagePokemon.setAttribute('alt', 'Pokemon Image');
          modal.appendChild(imagePokemon);
          }

        modalContainer.appendChild(modal);
        modalContainer.classList.add('is-visible');

    /* Escape button to Modal for closing */
        closeButtonElement.addEventListener('click', hideModal);
        window.addEventListener('keydown', (e) => {
            let modalContainer = document.querySelector('#modal-container');
            if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
                hideModal();
            }
        });
            modalContainer.addEventListener('click', (e) => {
            let target = e.target;
            if (target === modalContainer) {
                hideModal();
            }
        });

  });

  function hideModal() {
    let modalContainer = document.querySelector('#modal-container');
    modalContainer.classList.remove('is-visible');
    modalContainer.classList.add('modal');
    
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