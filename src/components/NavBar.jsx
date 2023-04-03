
function NavBar({ pokemonIndex, setPokemonIndex, pokemonList }) {

  /* const handleClickNext = () => {
     setPokemonIndex(pokemonIndex + 1)
   };
   const handleClickPrevious = () => {
     setPokemonIndex(pokemonIndex - 1)
   };*/

  const handleClick = (pokemonIndex) => {
    setPokemonIndex(pokemonIndex);
  };

  return (
    <div>
      {pokemonList.map((pokemon, pokemonIndex) => (
        <button key={pokemon.name} onClick={() => handleClick(pokemonIndex)}>{pokemon.name}</button>
      ))}

    </ div >

  )
}
export default NavBar;