import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { GlobalContext } from "../../context/GlobalContext";
import {MainCardDetails, CardType} from "./styleCardDetails"
import pokeball from "../../assets/pokeball.gif"
import BoxDetailsPokemon from "./BoxDetailsPokemon";

function CardDetails(props) {

    const context = useContext(GlobalContext)
    const [pokemon, setPokemon] = useState({})

    useEffect(()=>{
        browserCardPokemon()
    },[])

    //Daniel: retornar informação individual do pokemon
    const browserCardPokemon = async ()=>{
        try {
            context.setIsLoading(true)
            const getPokemon = await axios.get(props.pokemonUrl)
            setPokemon(getPokemon.data)
            context.setIsLoading(false)
        } catch (error) {
            context.setIsLoading(false)
        }
    }
  
    return (
      <>
    {context.isLoading ? <img src={pokeball} alt="Loading"/>
    :
    <MainCardDetails
      >

        <BoxDetailsPokemon
        pokemon={pokemon}
        pokemonName={props.pokemonName}/>

        <section className="boxDetailsShowPokemon">
            <div>
                <img src={pokemon?.sprites?.other['official-artwork'].front_default} alt="pokemon"/>
            </div>
            <div className="boxDetailsShowPokemonType">
                
            {pokemon && pokemon.types?.map((type, i)=>{
                            switch (type.type.name) {
                                case 'grass':
                                return <CardType color={'#316520'}>{type.type.name}</CardType>                               
                                case 'fire': 
                                return <CardType color={'#904F16'}>{type.type.name}</CardType>
                                case 'water':
                                return <CardType color={'#0070C0'}>{type.type.name}</CardType>   
                                case 'poison':
                                return <CardType color={'#A040A0'}>{type.type.name}</CardType>  
                                case 'flying':
                                return <CardType color={'#A890F0'}>{type.type.name}</CardType> 
                                case 'bug':
                                return <CardType color={'#A8B820'}>{type.type.name}</CardType> 
                                case 'normal':
                                return <CardType color={'#A8A878'}>{type.type.name}</CardType>   
                                case 'dark':
                                return <CardType color={'#130C0C'}>{type.type.name}</CardType>   
                                case 'dragon':
                                return <CardType color={'#004170'}>{type.type.name}</CardType>  
                                case 'electric':
                                return <CardType color={'#D2A257'}>{type.type.name}</CardType>   
                                case 'ground':
                                return <CardType color={'#BF9762'}>{type.type.name}</CardType>  
                                case 'fairy':
                                return <CardType color={'#F85888'}>{type.type.name}</CardType>   
                                case 'ice':
                                return <CardType color={'#7EB3B3'}>{type.type.name}</CardType> 
                                case 'steel':
                                return <CardType color={'#B8B8D0'}>{type.type.name}</CardType>              
                                case 'fighting':
                                return <CardType color={'#9B4840'}>{type.type.name}</CardType>   
                                case 'psychic':
                                return <CardType color={'#9B4840'}>{type.type.name}</CardType>  
                                case 'rock':
                                return <CardType color={'#B8A038'}>{type.type.name}</CardType>   
                                case 'ghost':
                                return <CardType color={'#58504F'}>{type.type.name}</CardType>                            
                                default:
                                return <CardType color={'#130C0C'}>NULL</CardType> 
                            }
                            }
                            )}
            </div>
        </section>

      </MainCardDetails>
      }
                
      </>
    );
  }
  
  export default CardDetails