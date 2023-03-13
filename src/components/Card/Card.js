import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { useNavigate, useLocation } from "react-router-dom";
import { goToDetails } from "../../routes/coordinator";
import axios from "axios";
import { CardContainer, CardHeader, CardFooter, CardMain, CardType, SpriteOficialPokemon, ButtonDeletePokemon, AddPokemon, ButtonDetails, Loading } from "./styleCard";
import pokeball from "../../assets/pokeball.gif"
import search from "../../assets/search.svg"

function Card(props) {

    const context = useContext(GlobalContext)
    const [pokemon, setPokemon] = useState({})
    const location = useLocation()
    const navigate = useNavigate()

    // console.log("props.pokemonUrl", props.pokemonUrl)
    // useEffect(()=>{
    //     browserCardPokemon()
    // },[context.pokemons, props])

    useEffect(()=>{
        ;(async () => {
            try {
                context.setIsLoading(true)
                const getPokemon = await axios.get(props.pokemonUrl)
                //Usarei o console abaixo para identificar o que mais acrescentar no projeto.
                // console.log(`${getPokemon.data.name}: `, getPokemon.data)
                setPokemon(getPokemon.data)
                context.setIsLoading(false)
            } catch (error) {
                context.setIsLoading(false)
            }
        })()
    },[context, props])

    // const browserCardPokemon = async ()=>{
    //     try {
    //         context.setIsLoading(true)
    //         const getPokemon = await axios.get(props.pokemonUrl)
    //         //Usarei o console abaixo para identificar o que mais acrescentar no projeto.
    //         console.log(`${getPokemon.data.name}: `, getPokemon.data)
    //         setPokemon(getPokemon.data)
    //         context.setIsLoading(false)
    //     } catch (error) {
    //         context.setIsLoading(false)
    //     }
    // }
    
    return (
      <>
      {context.isLoading ? 
      <CardContainer>
        <CardHeader>
            <h3>Carregando...</h3>
        </CardHeader>
        <div className="loadingStatus">
            <Loading src={pokeball} alt="Loading"/>
        </div>
      </CardContainer>
      :
                       
            <CardContainer key={pokemon.id}
                
                >
                  
                <CardHeader>
                    <div className="pokemonName">
                        <h3>{pokemon.name}</h3>
                        <p>#{pokemon.id < 10 ? '0' + String(pokemon.id):pokemon.id}</p>
                    </div>
                </CardHeader>

                <CardMain>
                    <div>
                         <SpriteOficialPokemon src={pokemon.sprites?.front_default} alt="pokemon"/>
                    </div>
                    <div>
                        <span>{pokemon && pokemon.types?.map((type, i)=>{
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
                        </span>                                               
                    </div>
                </CardMain>
                
                                  
                <CardFooter>
                    <section>
                        <ButtonDetails onClick={()=>goToDetails(navigate, pokemon.name)}><img src={search} alt="botão detalhes pokemon"/></ButtonDetails>
                        {location.pathname === "/" || location.pathname === `/${context.pageNumber}` ?
                        <AddPokemon onClick={()=>context.addPokemonPokedex(pokemon)}>CAPTURAR</AddPokemon>
                        :
                        <ButtonDeletePokemon onClick={()=>context.removePokemonPokedex(pokemon)}>LIBERAR</ButtonDeletePokemon>
                        }
                    </section>
                </CardFooter>  
            </CardContainer>
        }                         
      </>
    );
  }
  
  export default Card