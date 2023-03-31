import { useEffect } from "react";

function NavBar({ pokemonIndex, setPokemonIndex }) {


  const handleClickNext = () => {
    setPokemonIndex(pokemonIndex + 1)
    { pokemonIndex === 3 ? alert("Pika Pika..atCHOUMMM..snif") : '' }
  };

  const handleClickPrevious = () => {
    setPokemonIndex(pokemonIndex - 1)
    { pokemonIndex === 3 ? alert("Pika Pika..atCHOUMMM..snif") : '' }
  };

  return (
    <div>
      <button onClick={handleClickPrevious}>Précédent</button>
      <button onClick={handleClickNext}>Suivant</button>
    </div>)

}
export default NavBar;