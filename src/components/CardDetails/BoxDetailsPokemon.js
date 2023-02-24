import { useState, useContext, useEffect } from "react"
import axios from "axios"
import BoxEvolutionChain from "./BoxEvolutionChain"
import { GlobalContext } from "../../context/GlobalContext"
import { SectionBoxInfoPkm, BarStats, DisplayNameMove, DisplayBaseStats, DisplayMoves, ButtonStatusPokemon } from "./styleCardDetails"

function BoxDetailsPokemon (props){

    const [statusPokemon, setStatusPokemon] = useState("BaseStats")
    const [statusPokemonModule, setStatusPokemonModule] = useState([
        {module:"BaseStats",
        description:"BASE STATS",
        filter: true},
        {module:"Evolution",
        description:"EVOLUÇÃO", 
        filter: false},
        {module:"Moves", 
        description:"MOVIMENTOS",
        filter: false}])
    const [infoPokemon, setInfoPokemon] = useState({})
    const context = useContext(GlobalContext)
    const [descriptionPokemon, setDescriptionPokemon] = useState("")
    const [evolutionChain, setEvolutionChain] = useState({})


    useEffect(()=>{
        browserDescriptionPokemon()
    },[])

    const browserDescriptionPokemon = async()=>{
        // const link = props
        try {
                context.setIsLoading(true)
                // const pokemonId = pokemon && pokemon?.id
                const getPokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${props.pokemonName}`)
                // console.log("Link", link)
                // console.log("DetailPokemon",getPokemon.data)
                setInfoPokemon(getPokemon.data)
                setDescriptionPokemon(getPokemon.data.flavor_text_entries[0].flavor_text)
                setEvolutionChain(getPokemon.data.evolution_chain.url)
                context.setIsLoading(false)
            } catch (error) {
                console.log("DetailsPokemon", error)
                // console.log("Link", link)
                context.setIsLoading(false)
            }
        }

        const switchPokemon = (statusPkm)=>{
            setStatusPokemon(`${statusPkm.module}`)
   
            if(!statusPkm.filter){
            const newStatus = [...statusPokemonModule]

                for(let i=0;i<newStatus.length;i++){

                    if(newStatus[i].module !== statusPkm.module){
                        newStatus[i] = {...newStatus[i], filter: false}
    
                    }else{
                        newStatus[i] = {...newStatus[i], filter: true}
                    }
                }
            setStatusPokemonModule(newStatus)
            }
        }
        // console.log("infoPokemon", infoPokemon.flavor_text_entries)
        // console.log("teste", evolutionChain)

    return(
        <SectionBoxInfoPkm
        // statusPokemon={statusPokemon}
        >
            <div className="introPokemon">
                <div>
                    <h2>{props.pokemon?.name}</h2>
                    <h3>#{props.pokemon?.id < 10 ? '0' + String(props.pokemon?.id) : props.pokemon?.id}</h3>
                </div>
                <div>
                    <p>{descriptionPokemon}</p>
                </div>
            </div>

            <div className="statusPokemon">
                <div className="boxFilters">
                    {statusPokemonModule.map((status)=>(
                        <ButtonStatusPokemon value={status.module} statusPokemon={status.filter} onClick={()=> switchPokemon(status)}>{status.description}</ButtonStatusPokemon>
                    ))}
                    {/* <button value="Evolution" onClick={()=> setStatusPokemon("Evolution")}>Evolução</button>
                    <button value="BaseStats" onClick={()=> setStatusPokemon("BaseStats")}>Base Stats</button>
                    <button value="Moves" onClick={()=> setStatusPokemon("Moves")}>Movimentos</button> */}
                </div>
                <div className="boxResultFilter">
                    {statusPokemon === "Moves" ?
                        <DisplayNameMove>
                            <div>
                                <h2>Moves:</h2>
                                {props.pokemon?.moves && props.pokemon?.moves.filter((move,i) => i < 4).map((move)=> { return (<DisplayMoves>{move.move.name}</DisplayMoves>)})}
                            </div>
                        </DisplayNameMove>
                    :
                    statusPokemon === "Evolution"?
                    <BoxEvolutionChain
                    evolutionChain={evolutionChain}
                    statusPokemon={statusPokemon}/>
                    :
                        <DisplayBaseStats>
                        <div>
                        <h2>Base stats</h2>
                        
                        {props.pokemon && props.pokemon?.stats?.map((status)=>(
                            <p><span>{status.stat.name.replace("hp","HP").replace("special-attack","Sp.Atk").replace("special-defense","Sp.Def ")}</span><span>{status.base_stat}</span><BarStats stats={status.base_stat}><div></div></BarStats></p>
                        ))}
                        </div>
                        <div>
                            <p><span>Total:</span>
                            <span>
                                {props.pokemon?.stats?.reduce((acc,cur)=> acc + cur.base_stat,0)}
                            </span>
                            <span></span>
                            </p>
                        </div>
                        </DisplayBaseStats>
                    }

                </div>
            </div>

        </SectionBoxInfoPkm>
    )

}

export default BoxDetailsPokemon