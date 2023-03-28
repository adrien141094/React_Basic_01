
function PokemonCard({ pokemon }) {
  return <div className="card">
    {pokemon.imgSrc ? (
      <img src={pokemon.imgSrc}
        alt={pokemon.name} className="card-img" />) : (<p>???</p>)}
    <figcaption>{pokemon.name}</figcaption>

  </div>
}




export default PokemonCard;
