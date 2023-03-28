import PropTypes from "prop-types";

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.any.isRequired

  }).isRequired,
}
function PokemonCard({ pokemon }) {
  return <div className="card">
    {pokemon.imgSrc ? (
      <img src={pokemon.imgSrc}
        alt={pokemon.name} className="card-img" />) : (<p>???</p>)}
    <figcaption>{pokemon.name}</figcaption>

  </div>
}





export default PokemonCard;
