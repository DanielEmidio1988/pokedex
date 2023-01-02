import {useEffect, useState} from 'react'
import axios from "axios";
import Router from "./routes/Router"
import { BASE_URL } from "./constants/BASE_URL";
import { GlobalStyled } from './GlobalStyle';
import { GlobalContext } from './context/GlobalContext';
import Modal from './components/Modal/Modal'

function App() {

  //Daniel: variavel para armazenar pokemons
  //Cada Pokemon está em um objeto. Irei armazená-los em um Array
  const [pokemons, setPokemons] = useState([])

  //Daniel: variável para armazenar pokemons na pokedex
  const [pokedex, setPokedex] = useState([])

  //Daniel: variavel utilizada para armazenar status de loading
  const [isLoading, setIsLoading] = useState(false)

  //Daniel: variavel para armazenar os detalhes do pokemon
  const [detailPokemon, setDetailPokemon] = useState([])

  //Daniel: variável para verificar se o Modal será exibido (true) ou não (false)
  const [showModal, setShowModal] = useState(false)

  //Daniel: variável para verificar a ação que foi executada sobre o Pokemon para exibir o Modal
  const [action, setAction] = useState("")

  useEffect(()=>{
    browserPokemon()
  },[])

  const browserPokemon = async ()=>{
  let i = 1  
  setIsLoading(true)
  
  //Daniel: além de servir como apoio, ela elimina qualquer duplicidade de cadastro pelo Set.
  const auxPokemon = [...new Set(pokemons)]

  //Daniel: condicional criada para que a função browserPokemon seja atualizada toda vez que o usuário entrar na Home.
  if (pokemons.length > 0){
    return
  }else{
  
  while (i <= 20){
    try{        
        //Dentro da pasta de sprites, terá o sprite dos games, que também vou utilizar em detalhes.
        const response = await axios.get(`${BASE_URL}/${i}`)
        auxPokemon.push(response.data)
        setPokemons(auxPokemon)
        setDetailPokemon(auxPokemon)
        console.log(`${response.data.name} adicionado com sucesso a base!`)      
    }catch(error){
        console.log(`Erro!${error.data.name} não foi adicionado a base.`)
        console.log(error)
    }
    i++
    }
    setIsLoading(false)
    }
  }

  //Daniel: função para acrescentar pokemon na Pokelist.
  function addPokemonPokedex (pokemonAdd){
    setShowModal(true)
    setAction("add")
    const pokemonOnList = pokemons.filter(
      (pokemon) => pokemon.id !== pokemonAdd.id)

      const newBrowserPokedex = [...pokedex, pokemonAdd]
      setPokedex(newBrowserPokedex)
      setPokemons(pokemonOnList)
    console.log("Adicionar Pokemon", pokemonOnList)
    console.log("Pokedex", pokedex)

  }

  //Daniel: remover pokemon da Pokedex
  function removePokemonPokedex (pokemonAdd){
    setShowModal(true)
    setAction("remove")
    const pokemonOnPokedex = pokedex.filter(
      (pokemon) => pokemon.id !== pokemonAdd.id)
    
    const newBrowserPokelist = [...pokemons, pokemonAdd]
    console.log("newBrowser",newBrowserPokelist)
    setPokedex(pokemonOnPokedex)
  
    setPokemons(newBrowserPokelist) 
  }

  const context = {
    pokemons,
    setPokemons,
    detailPokemon,
    setDetailPokemon,
    pokedex,
    setPokedex,
    isLoading,
    setIsLoading,
    addPokemonPokedex,
    removePokemonPokedex,
    showModal,
    setShowModal,
    action,
    setAction,
  }

  return (
    <>
    <GlobalStyled/>
    <GlobalContext.Provider value={context}>
      <Router/>
      {showModal ? <Modal action={action}/>:''}
    </GlobalContext.Provider>
    </>
  );
}

export default App;
