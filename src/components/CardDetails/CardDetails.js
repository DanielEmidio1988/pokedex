import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { GlobalContext } from "../../context/GlobalContext";
import {MainCardDetails, CardType} from "./styleCardDetails"
import pokeball from "../../assets/pokeball.gif"
import BoxDetailsPokemon from "./BoxDetailsPokemon";

function CardDetails(props) {

    const context = useContext(GlobalContext)
    const [pokemon, setPokemon] = useState({})

    const colorCard = ()=>{
        const filterPokemonbyColor = pokemon && pokemon?.types?.map((type, i) => type.type?.name)[0]
        switch (filterPokemonbyColor) {
            case 'grass':
            return '#70B873'  
            case 'fire': 
            return '#FF9D55'
            case 'water':
            return '#33A4F5'  
            case 'poison':
            return '#AD61AE'  
            case 'flying':
            return '#6892B0'   
            case 'bug':
            return '#91C12F'  
            case 'normal':
            return '#919AA2' 
            case 'dark':
            return '#5C5365'   
            case 'dragon':
            return '#0A6CBF'   
            case 'ghost':
            return '#8B4E8C'   
            case 'electric':
            return '#F8D030'   
            case 'ground':
            return '#E0C068'   
            case 'fairy':
            return '#EE99AC' 
            case 'ice':
            return '#98D8D8'            
            case 'steel':
            return '#B8B8D0' 
            case 'fighting':
            return '#CE4069'  
            case 'psychic':
            return '#F85888' 
            case 'rock':
            return '#729F92'                         
            default:
            return '#729F92'
        }
    }

    useEffect(()=>{
        browserCardPokemon()
    },[])

    const browserCardPokemon = async ()=>{
        try {
            context.setIsLoading(true)
            const getPokemon = await axios.get(props.pokemonUrl)
            setPokemon(getPokemon.data)
            console.log("PROPS", getPokemon)
            console.log(pokemon)
            context.setIsLoading(false)
        } catch (error) {
            context.setIsLoading(false)
        }
    }

    console.log("Props.Name", props.pokemonName)
    
    return (
      <>
    {context.isLoading ? <img src={pokeball} alt="Loading"/>
    :
    <MainCardDetails
      colorCard={colorCard}>

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