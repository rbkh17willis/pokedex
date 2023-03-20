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
return {
    add:add,
    getAll: getAll
};
})();

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

pokemonRepository.getAll().forEach(printArrayDetails);

