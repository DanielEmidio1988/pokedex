import {useEffect, useState} from 'react'
import axios from "axios";
import Router from "./routes/Router"
import { BASE_URL } from "./constants/BASE_URL";
import { GlobalStyled } from './GlobalStyle';
import { GlobalContext } from './context/GlobalContext';

function App() {

  //Daniel: variavel para armazenar pokemons
  //Cada Pokemon está em um objeto. Irei armazená-los em um Array
  const [pokemons, setPokemons] = useState([])

  //Daniel: variável para armazenar pokemons na pokedex
  const [pokedex, setPokedex] = useState([])

  //Daniel: variavel utilizada para armazenar status de loading
  const [isLoading, setIsLoading] = useState(false)

  useEffect(()=>{
    browserPokemon()
  },[])

  const browserPokemon = async ()=>{
  let i = 1  
  
  //Daniel: além de servir como apoio, ela elimina qualquer duplicidade de cadastro pelo Set.
  const auxPokemon = [...new Set(pokemons)]
  
  while (i <= 20){
    try{
        
        //Daniel: basicamente, de todos formulários, encontrarei o que preciso no endpoint pokemon/id do pokemon
        //A arte oficial está dentro de sprites/other/official-artwork.
        //Dentro da pasta de sprites, terá o sprite dos games, que também vou utilizar em detalhes.
        const response = await axios.get(`${BASE_URL}/${i}`)
        auxPokemon.push(response.data)
        setPokemons(auxPokemon)
        console.log(`${response.data.name} adicionado com sucesso a base!`)
        console.log("Pokemon na Base: ", pokemons)
    }catch(error){
        console.log(`Erro!${error.data.name} não foi adicionado a base.`)
        console.log(error)
    }
    i++
  }
  
}


  const context = {
    pokemons,
    setPokemons,
    pokedex,
    setPokedex,
    isLoading,
    setIsLoading,
  }

  return (
    <>
    <GlobalStyled/>
    <GlobalContext.Provider value={context}>
      <Router/>
    </GlobalContext.Provider>
    </>
  );
}

export default App;
