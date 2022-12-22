import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { useNavigate, useLocation } from "react-router-dom";
import {MainCardDetails, DisplayPokemon, DisplayBaseStats, DisplayNameMove, DisplaySpritePokemon, DisplayMoves, BarStats} from "./styleCardDetails"
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
import axios from "axios";

function CardDetails(props) {

    const context = useContext(GlobalContext)
    const location = useLocation()
    const navigate = useNavigate()

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

    //Daniel: Em teste, função para mudar a barra de progresso
    // const progressBar = ()=>{
    //     const powerBar = props.pokemon.stats?.map((status)=> status.base_stat)

    //     switch (powerBar) {
    //         case value:
                
    //             break;
        
    //         default:
    //             break;
    //     }
    // }
    
    return (
      <>

      <MainCardDetails
      colorCard={colorCard}>

        {/* SEÇÃO SPRITES POKEMON */}
        <DisplayPokemon>
            <div>
                <img src={props.pokemon.sprites?.front_default} alt={props.pokemon.name}/>
            </div>
            <div>
                <img src={props.pokemon.sprites?.back_default} alt={props.pokemon.name}/>
            </div>

        </DisplayPokemon>

        {/* SEÇÃO STATUS POKEMON */}
        <DisplayBaseStats>
            <div>
            <h2>Base stats</h2>
            {/* <p><span>HP</span><span>{props.pokemon.stats[0].base_stat}</span><span>Barra</span></p> */}

            {/* Daniel: Barra de progresso Base Stats, ajustar percentual */}
            {props.pokemon.stats?.map((status)=>(
                <p><span>{status.stat.name.replace("hp","HP").replace("special-attack","Sp.Atk").replace("special-defense","Sp.Def ")}</span><span>{status.base_stat}</span><BarStats><div></div></BarStats></p>
            ))}
            </div>
        </DisplayBaseStats>

        {/* SEÇÃO NOME/TIPO E MOVES POKEMON */}
        <DisplayNameMove>
            <div>
                <h3>#{props.pokemon?.id}</h3>
                <h1>{props.pokemon?.name}</h1>
                <p>{props.pokemon.types?.map((type)=> {
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
                         )}
                         </p>
            </div>
            <div>
                    <h2>Moves:</h2>
                    {props.pokemon.moves && props.pokemon.moves.filter((move,i) => i < 4).map((move)=> { return (<DisplayMoves>{move.move.name}</DisplayMoves>)})}
            </div>
        </DisplayNameMove>

        {/* SEÇÃO ARTE OFICIAL POKEMON */}
        <DisplaySpritePokemon>
            <img src={props.pokemon.sprites?.other['official-artwork'].front_default} alt="pokemon"/>
        </DisplaySpritePokemon>

      </MainCardDetails>
            
      </>
    );
  }
  
  export default CardDetails