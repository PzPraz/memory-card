import Card from './Card';
    
export default function CardsGrid({pokemonList, handleClick}) {


    return (
        <div className="card-grid">      
        {pokemonList.slice(0, 8).map((poke) => (
            <Card  
            key={poke.id}
            name={poke.name}
            img={poke.sprites.front_default}
            onClick={() => handleClick(poke.name)}
            />))}
        </div>
    )
}