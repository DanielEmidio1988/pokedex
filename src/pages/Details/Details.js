import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/BASE_URL";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";
import CardDetails from "../../components/CardDetails/CardDetails"
import Header from "../../components/Header/Header";
import { MainContainer, DisplayCards } from "../../constants/stylePages";

function Details() {

  const context = useContext(GlobalContext)
  // const {pokemons, pokedex} = context
  
  //Daniel: variavel para alimentar os detalhes do pokemon
  const [detailPokemon, setDetailPokemon] = useState([])

  const params = useParams()
  const pokeName = params.PokemonName

  useEffect(()=>{
    browserPokemon(pokeName)
  },[])

const browserPokemon = async ()=> {
    try{
    const response = await axios.get(`${BASE_URL}/${pokeName}`)
    console.log("response", response.data)
    setDetailPokemon(response.data) 
    }catch(error){
        console.log(error)
    }
}

    return (
      <> 
        <Header/>
          <MainContainer>
          <div><h1>Detalhes</h1></div>
          <DisplayCards>

            <CardDetails
            key={detailPokemon.id}
            pokemon={detailPokemon}/>

          </DisplayCards>  
        </MainContainer>
      </>
    );
  }

  export default Details