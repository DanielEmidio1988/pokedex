import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { MainCard, CardTop, CardBottom } from "./styleCard";

function Card() {

    const context = useContext(GlobalContext)
    console.log("Pokemons", context.pokemons)

    return (
      <>
        {context.pokemons.map((pokemon)=>{
            return (
                <MainCard key={pokemon.id}>

                <CardTop>
                    <div>
                        <p>#{pokemon.id}</p>
                        <h1>{pokemon.name}</h1>

                        <span>{pokemon.types.map((type)=> {return <span>{type.type.name}</span> })}</span>
                    </div>
                    <div>
                        <img src={pokemon.sprites.other['official-artwork'].front_default} alt="pokemon"/>
                    </div>
                </CardTop>
                <CardBottom>
                    <span><a onClick={""}>Detalhes</a></span>
                    <button>Capturar!</button>
    
                </CardBottom>
            </MainCard>
            )
        })}
       
      </>
    );
  }
  
  export default Card