import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import CardsGrid from './components/CardsGrid';

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [pokemonList, setPokemonList] = useState([]);

  function handleAddScore () {
    setScore(score + 1);
    setBestScore(Math.max(score, bestScore));
  }

  useEffect(() => {
    async function fetchPokemon() {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=12");
      const data = await res.json();
      const detailedData = await Promise.all(
        data.results.map(async (poke) => {
          const res = await fetch(poke.url);
          return await res.json();
        })
      )
      setPokemonList(detailedData);
    }
    fetchPokemon();
  }, [])


  useEffect(() => {
    console.log(pokemonList);
    
  }, [pokemonList])

  return (
    <>
      <Header score={score} bestScore={bestScore}></Header>
      <CardsGrid handleScore={handleAddScore}></CardsGrid>
      <div className="hello">
        {        }
      </div>
    </>
  )
}

export default App
