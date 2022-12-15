import {useState} from 'react'
import axios from "axios";
import Router from "./routes/Router"
import { BASE_URL } from "./constants/BASE_URL";
import { GlobalStyled } from './GlobalStyle';

function App() {

  //Daniel: variavel para armazenar pokemons
  //Cada Pokemon está em um objeto. Irei armazená-los em um Array
  const [pokemon, setPokemon] = useState([])

  //Daniel: variável para armazenar pokemons na pokedex
  const [pokedex, setPokedex] = useState([])

  //Daniel: variavel utilizada para armazenar status de loading
  const [isLoading, setIsLoading] = useState(false)

  const browserPokemon = async ()=>{
    
    try{
        //Daniel: basicamente, de todos formulários, encontrarei o que preciso no endpoint pokemon/id do pokemon
        //A arte oficial está dentro de sprites/other/official-artwork.
        //Dentro da pasta de sprites, terá o sprite dos games, que também vou utilizar em detalhes.
        const response = await axios.get(`${BASE_URL}/pokemon/1`)
        console.log(`Conexão realizada com sucesso`)
        console.log(response.data)
    }catch(error){
        alert(`Conexão com erro`)
        console.log(error)
    }
}

  browserPokemon()
  return (
    <>
    <GlobalStyled/>
      <Router/>
   
    </>
  );
}

export default App;
