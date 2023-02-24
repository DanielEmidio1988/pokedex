import { useState, useEffect, useContext } from "react"
import axios from "axios";
import { GlobalContext } from "../../context/GlobalContext";
import { BoxEvolution } from "./styleCardDetails";
import img1 from "../../assets/1.png"
import img2 from "../../assets/1.png"

function BoxEvolutionChain (props){

    const [lineEvolutionPokemon, setLineEvolutionPokemon] = useState({})
    const context = useContext(GlobalContext)

    // useEffect(()=>{
    //     browserLineEvolution()
    // },[])

    // const browserLineEvolution = async ()=>{
    //     try {
    //         context.setIsLoading(true)
    //         const getPokemon = await axios.get(`${props.evolutionChain}`)
    //         setLineEvolutionPokemon(getPokemon.data)
    //         context.setIsLoading(false)
    //     } catch (error) {
    //         context.setIsLoading(false)
    //     }
    // }

    // console.log("lineEvolutionPokemon", lineEvolutionPokemon )
    console.log("lineEvolutionPokemon Props", props.evolutionChain )

    return(
        <BoxEvolution>
            <div>

            </div>
            <div>
                <p>IMAGEM</p>
                <p>001 - NUMERO</p>
            </div>
        </BoxEvolution>
    )
}

export default BoxEvolutionChain