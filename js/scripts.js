let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

/* IIFE Config */
    function add(pokemon) {
      if (
        typeof pokemon === "object" &&
        "name" in pokemon
      ) {
        pokemonList.push(pokemon);
      } else {
        console.log("pokemon is not correct");
      }
    }
    function getAll() {
      return pokemonList;
    }

/* API  */
    function addListItem(pokemon) {
      //console.log('addListItem called')
      let pokemonListElement = document.querySelector(".pokemon-list");
      let listpokemon = document.createElement("li");
      listpokemon.classList.add('list-group-item');
  
      let button = document.createElement("button");
  
      button.classList.add('btn');
      button.classList.add('btn-primary');
      button.setAttribute('data-toggle', 'modal');
      button.setAttribute('data-target', '#exampleModal');
  
      button.addEventListener('click', function (event) {
        showDetails(pokemon)
      })
  
      button.innerText = pokemon.name;
      //button.classList.add("button-class");
      listpokemon.appendChild(button);
      pokemonListElement.appendChild(listpokemon);
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
        showModal(item);
      }).catch(function (e) {
        console.error(e);
      });
    }
  
    function showDetails(pokemon) {
      loadDetails(pokemon)
    }

  /* Modal */
    function showModal(pokemon) {
  
      let modalTitle = document.querySelector(".modal-title");
      modalTitle.innerText = pokemon.name;
  
      let pokemonImage = document.querySelector('.pokemon-image');
      pokemonImage.src = pokemon.imageUrl;
  
      let pokemonHeight = document.querySelector('.pokemon-height');
      pokemonHeight.innerText = 'Height : ' + (pokemon.height/10) + ' m';
  
  
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
  
  
  
  pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
      pokemonRepository.addListItem(pokemon);
    });
  });