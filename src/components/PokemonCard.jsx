
function PokemonCard() {
  const pokemon = pokemonList[1];
  return <div className="card">
    {pokemon.imgSrc ? (
      <img src={pokemon.imgSrc}
        alt={pokemon.name} className="card-img" />) : (<p>???</p>)}
    <figcaption>{pokemon.name}</figcaption>

  </div>
}

const pokemonList = [
  {
    name: "Bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];


export default PokemonCard;
