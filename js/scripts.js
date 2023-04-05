
    let pokemonList = [
        {name:"Squirtle", types: "water", height: 0.5},
        {name:"Pikachu", types: "electric", height: 0.4},
        {name:"Jigglypuff", types: ["fairy", "normal"], height: 0.5}

    ];

    function showDetails (pokemon){
        console.log(pokemon.name)
    }

    function addListItem(pokemon)
    {

        let pokemonListItems = document.querySelector('.pokemon-list');
        let listItem = document.createElement('li');
        let button = document.createElement('button');
            button.innerText = (pokemon.name);
            button.classList.add('pokebutton');
            listItem.appendChild(button);
            pokemonListItems.appendChild(listItem);

        button.addEventListener ('click', function ()
        {
            showDetails(pokemon)
        });
    }

    function getAll() {
        return pokemonList;
    }
    function add (pokemon) {
        pokemonList.push(pokemon);
    }
    
    return {
        add:add,
        getAll: getAll,
        addListItem: addListItem
    };
    pokemonList.forEach(addListItem);
    pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
 });


