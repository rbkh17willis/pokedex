let pokemonList = [
{name:"Squirtle", types: "water", height: 0.5},
{name:"Pikachu", types: "electric", height: 0.4},
{name:"Jigglypuff", types: ["fairy", "normal"], height: 0.5}
];

for (let i = 0; i < pokemonList.length; i++){

    if (pokemonList[i].height < 0.5) {
        console.log(pokemonList[i].name + " (height: " + pokemonList[i].height + ") - Wow, that's small!");
        document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ") - Wow, that's small!"+ "<br>");
    }
    else{
        console.log(pokemonList[i].name + " (height: " + pokemonList[i].height + ")");
        document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ")"+ "<br>");
    }
}
