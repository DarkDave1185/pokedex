const getPokemon = async ()=> {
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`)
        .then(response => response.json);
    return pokemon;
}
const renderPokemon = async () => {
    const pokemon = await getPokemon();
    console.log(pokemon)
}

renderPokemon();