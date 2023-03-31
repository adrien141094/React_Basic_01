import PokemonCard from "./components/PokemonCard";
import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar";


const pokemonList = [
  {
    name: "Bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

function App() {
  useEffect(
    () => {
      alert("Hello PoKeMoN tRaInEr :)")
    },
    []
  );


  const [pokemonIndex, setPokemonIndex] = useState(0);

  return (
    <div>
      <NavBar pokemonIndex={pokemonIndex} setPokemonIndex={setPokemonIndex} />
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
    </div>
  );
}
;

export default App
