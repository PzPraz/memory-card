import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import CardsGrid from './components/CardsGrid';
import { shuffleArray } from './utils/utils';

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [pokemonList, setPokemonList] = useState([]);
  const [clickedList, setClickedList] = useState([]);

  function handleAddScore () {
    setScore((prevScore) => {
      const newScore = prevScore + 1;
      setBestScore((prevBest) => Math.max(newScore, prevBest));
      return newScore;
    });
  }

  function handleClick (name) {
    if (clickedList.includes(name)) {
      handleReset() 
      return;
    }

    handleAddScore()
    setClickedList([...clickedList, name]);
    setPokemonList(shuffleArray(pokemonList));
  }

  function handleReset () {
    setScore(0);
    setClickedList([]);
    setPokemonList(shuffleArray(pokemonList));
  }



  useEffect(() => {
    async function fetchRandomPokemon() {
      const randomIds = Array.from(new Set( // no duplicates
        Array.from({ length: 10 }, () => Math.floor(Math.random() * 1025) + 1)
      ));
  
      const detailedData = await Promise.all(
        randomIds.map(async (id) => {
          const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
          return await res.json();
        })
      )
      setPokemonList(detailedData);
    }
    fetchRandomPokemon();
  }, [])

  return (
    <>
      <Header score={score} bestScore={bestScore}></Header>
      <CardsGrid handleScore={handleAddScore} pokemonList={pokemonList} handleClick={handleClick}/>
    </>
  )
}

export default App
