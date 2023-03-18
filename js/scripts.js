let pokemonList = [
{name:"Squirtle", types: "water", height: 0.5},
{name:"Pikachu", types: "electric", height: 0.4},
{name:"Jigglypuff", types: ["fairy", "normal"], height: 0.5}
];

pokemonList.forEach(function (pokemon) {

    if (pokemon.height < 0.5) {
        console.log(pokemon.name + " (height: " + pokemon.height + ") - Wow, that's small!");
        document.write(pokemon.name + " (height: " + pokemon.height + ") - Wow, that's small!"+ "<br>");
    }
    else{
        console.log(pokemon.name + " (height: " + pokemon.height + ")");
        document.write(pokemon.name + " (height: " + pokemon.height + ")"+ "<br>");
    }
});

