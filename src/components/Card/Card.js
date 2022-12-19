import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { useLocation } from "react-router-dom";
import { MainCard, CardTop, CardBottom, CardType, SpriteOficialPokemon } from "./styleCard";
import fire from "../../assets/typepokemon/fire.svg"
import grass from "../../assets/typepokemon/grass.svg"
import bug from "../../assets/typepokemon/bug.svg"
import dragon from "../../assets/typepokemon/dragon.svg"
import dark from "../../assets/typepokemon/dark.svg"
import eletric from "../../assets/typepokemon/eletric.svg"
import fairy from "../../assets/typepokemon/fairy.svg"
import fighting from "../../assets/typepokemon/fighting.svg"
import flying from "../../assets/typepokemon/flying.svg"
import ghost from "../../assets/typepokemon/ghost.svg"
import ground from "../../assets/typepokemon/ground.svg"
import ice from "../../assets/typepokemon/ice.svg"
import normal from "../../assets/typepokemon/normal.svg"
import poison from "../../assets/typepokemon/poison.svg"
import psychic from "../../assets/typepokemon/psychic.svg"
import rock from "../../assets/typepokemon/steel.svg"
import steel from "../../assets/typepokemon/steel.svg"
import water from "../../assets/typepokemon/water.svg"


function Card(props) {

    const context = useContext(GlobalContext)
    const location = useLocation()

    console.log('props', props)

    const colorCard = ()=>{
        switch (props.pokemon.types[0].type.name) {
            case 'grass':
            return '#729F92' //ok  
            break;
            case 'fire': 
            return '#EAAB7D' //ok
            break;
            case 'water':
            return '#71C3FF' //ok  
            break;
            case 'poison':
            return '#AD61AE'   
            break; 
            case 'flying':
            return '#6892B0'   
            break;
            case 'bug':
            return '#76A866' //ok  
            break;
            case 'normal':
            return '#BF9762'   
            break;
            case 'dark':
            return '#5C5365'   
            break;
            case 'dragon':
            return '#0A6CBF'   
            break;
            case 'eletric':
            return '#F4D23B'   
            break; 
            case 'eletric':
            return '#F4D23B'   
            break;
            case 'eletric':
            return '#F4D23B'   
            break;
            case 'eletric':
            return '#F4D23B'   
            break;
            case 'eletric':
            return '#F4D23B'   
            break;            
            case 'eletric':
            return '#F4D23B'   
            break;
            case 'eletric':
            return '#F4D23B'   
            break;
            case 'eletric':
            return '#F4D23B'   
            break;
            case 'eletric':
            return '#F4D23B'   
            break;                        
            default:
            return '#729F92'
                break;
        }
    }
    
    return (
      <>
    
                <MainCard key={props.pokemon.id}
                colorCard={colorCard}>

                <CardTop>
                    <div>
                        <p>#{props.pokemon.id}</p>
                        <h2>{props.pokemon.name}</h2>
                        <span>
                        <CardType>{props.pokemon.types.map((type)=> {
                            switch (type.type.name) {
                                case 'grass':
                                    return <img src={grass} alt={type.type.name}/>
                                    break;
                                    case 'fire': 
                                    return <img src={fire} alt={type.type.name}/>
                                    break;
                                    case 'water':
                                    return <img src={water} alt={type.type.name}/>
                                    break;
                                    case 'poison':
                                    return <img src={poison} alt={type.type.name}/>  
                                    break; 
                                    case 'flying':
                                    return <img src={flying} alt={type.type.name}/>  
                                    break;
                                    case 'bug':
                                    return <img src={bug} alt={type.type.name}/>
                                    break;
                                    case 'normal':
                                    return <img src={normal} alt={type.type.name}/>   
                                    break;
                                    case 'dark':
                                    return <img src={dark} alt={type.type.name}/>   
                                    break;
                                    case 'dragon':
                                    return <img src={dragon} alt={type.type.name}/>   
                                    break;
                                    case 'eletric':
                                    return <img src={eletric} alt={type.type.name}/>  
                                    break; 
                                    case 'fairy':
                                    return <img src={fairy} alt={type.type.name}/>  
                                    break;
                                    case 'fighting':
                                    return <img src={fighting} alt={type.type.name}/>   
                                    break;
                                    case 'ghost':
                                    return <img src={ghost} alt={type.type.name}/>   
                                    break;
                                    case 'ground':
                                    return <img src={ground} alt={type.type.name}/>   
                                    break;            
                                    case 'ice':
                                    return <img src={ice} alt={type.type.name}/>   
                                    break;
                                    case 'psychic':
                                    return <img src={psychic} alt={type.type.name}/>   
                                    break;
                                    case 'rock':
                                    return <img src={rock} alt={type.type.name}/>   
                                    break;
                                    case 'steel':
                                    return <img src={steel} alt={type.type.name}/>   
                                    break;                        
                                    default:
                                    return <img src={""} alt={type.type.name}/>
                                        break;
                            }
                         
                         }
                         )}</CardType>
                         </span>
                        {/* <span>{props.pokemon.types.map((type)=> {return <img src={type.type.name} alt={type.type.name}/> })}</span> */}
                        {/* <span>{props.pokemon.types.map((type)=> {return <span>{type.type.name}</span> })}</span> */}
                    </div>
                    <div>
                        <SpriteOficialPokemon src={props.pokemon.sprites.other['official-artwork'].front_default} alt="pokemon"/>
                    </div>
                </CardTop>
                <CardBottom>
                    <span><a onClick={""}>Detalhes</a></span>
                    {location.pathname === "/" ?
                    <button onClick={()=>context.addPokemonPokedex(props.pokemon)}>Capturar!</button>
                    :
                    <button onClick={()=>context.removePokemonPokedex(props.pokemon)}>Remover Pokemon!</button> }
                </CardBottom> : 
            </MainCard>
            
      </>
    );
  }
  
  export default Card