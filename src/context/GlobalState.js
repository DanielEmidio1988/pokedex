import {useEffect, useState} from 'react'
import axios from "axios";
import { BASE_URL } from "../constants/BASE_URL";

function GlobalState(){
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

  //Daniel: variável para identificar a página atual
  const [pageNumber, setPageNumber] = useState(1)

  const [numbMin, setNumbMin] = useState(0)

  const [searchHome, setSearchHome] = useState('')

  const [perPage, setPerPage] = useState(20)

  const [totalPages, setTotalPages] = useState(1)

  const firstPkm = (pageNumber * perPage)-21

  const lastPkm = (firstPkm + perPage + 1)


  useEffect(()=>{
    browserPokemon()
  },[pageNumber])

  const browserPokemon = async ()=>{
    let i = 1  
    setIsLoading(true)
    
    //Daniel: além de servir como apoio, ela elimina qualquer duplicidade de cadastro pelo Set.
    // const auxPokemon = [...new Set(pokemons)]

      try{        
          const response = await axios.get(`${BASE_URL}/pokemon/?limit=1008`)
        //   auxPokemon.push(response.data.results)
          // console.log("GlobalState", response.data.results)
        // //   console.log("GlobalState AuxPokemon", auxPokemon)
        // console.log("Total itens", typeof(response.data.results.length))
          setTotalPages(Math.ceil(response.data.results.length/perPage)+1)
          setPokemons(response.data.results)
          setDetailPokemon(response.data.results)    
      }catch(error){
          console.log(`Erro!${error.data.name} não foi adicionado a base.`)
          console.log(error)
      }

      setIsLoading(false)

    }

    console.log("Total Pages", totalPages)
 
    //Daniel: função para acrescentar pokemon na Pokelist.
    function addPokemonPokedex (pokemonAdd){
      setShowModal(true)
      setAction("add")
      // console.log("pokemonAdd", pokemonAdd)
      const pokemonOnList = pokemons.filter(
        (pokemon) => pokemon.name !== pokemonAdd.name)
        const newBrowserPokedex = [...pokedex, pokemonAdd]
        setPokedex(newBrowserPokedex)
        setPokemons(pokemonOnList)  
   
        // console.log("pokemonOnList", pokemonOnList)
        // console.log("IdPokemon ADD", pokemonAdd)
    }
  
    //Daniel: remover pokemon da Pokedex
    function removePokemonPokedex (pokemonAdd){
      setShowModal(true)
      setAction("remove")
      const pokemonOnPokedex = pokedex.filter(
        (pokemon) => pokemon.name !== pokemonAdd.name)
      // const pokemonOnList = pokemons.filter(
      //   (pokemon) => pokemon.name === pokemonAdd.name)    
      const newBrowserPokelist = [...pokemons, {name:pokemonAdd.name, url:`${BASE_URL}/${pokemonAdd.id}`}]
      setPokedex(pokemonOnPokedex) 
      setPokemons(newBrowserPokelist) 
      // console.log("pokemonAdd", pokemonAdd)
      // console.log("pokemon", pokemons[0])
      // console.log("pokemonOnList", pokemonOnList)
    }
  
    return{
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
      pageNumber,
      setPageNumber,
      perPage,
      setPerPage,
      totalPages,
      setTotalPages,
      firstPkm,
      lastPkm,
      searchHome, 
      setSearchHome,
      numbMin, 
      setNumbMin,
    }
}

export default GlobalState