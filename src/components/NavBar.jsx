
function NavBar({ pokemonIndex, setPokemonIndex }) {

  const handleClickNext = () => {
    setPokemonIndex(pokemonIndex + 1)
  };

  const handleClickPrevious = () => {
    setPokemonIndex(pokemonIndex - 1)
  };

  return (
    <div>
      <button onClick={handleClickPrevious}>Précédent</button>
      <button onClick={handleClickNext}>Suivant</button>
    </div>)

}
export default NavBar;