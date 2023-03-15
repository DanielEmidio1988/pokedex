import { useContext , useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";
import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import { MainContainer, DisplayCards, SectionButtons } from "../../constants/stylePages";
import Footer from "../../components/Footer/Footer";
import { goToNextHomePage } from "../../routes/coordinator";

function Home() {

  const context = useContext(GlobalContext)
  const navigate= useNavigate()
  const params = useParams()
  const {pokemons, addPokemonPokedex}=context
  const [search, setSearch] = useState('')
  const filterPokemon = pokemons && pokemons
  .filter((pokemon)=> pokemon?.name?.includes(search.toLowerCase()))
  .filter((pokemon, i)=> i > context.firstPkm && i < context.lastPkm)

  const handlePageTurn = (value)=>{
    if(value === 0){
        context.setPageNumber(1)
        context.setNumbMin(0)
        goToNextHomePage(navigate,1)
    }else if(value === context.totalPages){
        context.setPageNumber(context.totalPages)
        context.setNumbMin((context.totalPages -1)*context.perPage)
        goToNextHomePage(navigate,context.totalPages)
    }else{
        context.setPageNumber((context.pageNumber + value))
        context.setNumbMin(((context.pageNumber + value)-1)*context.perPage)
        goToNextHomePage(navigate,context.pageNumber+value)
    }
}

  useEffect(()=>{
    if(params.results){
        context.setNumbMin(Number(params.results)*context.perPage)
        context.setPageNumber(Number(params.results))
    }
  },[])

    return (
      <>       
        <Header/>
          <MainContainer>
          <div className={context.showModal ? 'menu-overlay-open' : 'menu-overlay-close'}></div> 
          <div className="boxFilter">
            <input value={search} onChange={(event)=>setSearch(event.target.value)} placeholder="Insira o nome do Pokemon"/>
          </div>
          <div>
            <h1>Todos Pokemons</h1>
          </div>
          <DisplayCards>
            {filterPokemon    
            .map((pokemon)=>( 
            <Card
            addPokemonPokedex={addPokemonPokedex}
            pokemonUrl={pokemon.url}
            />
            ))}
          </DisplayCards>
          <SectionButtons>
                            {/* Daniel: Condicionais para renderizar os botões de acordo com a página atual */}
                            {context.pageNumber !== 1 && <button onClick={()=>handlePageTurn(0)}>{"<<"}</button>
                            }{context.pageNumber - 2 > 0 && <button onClick={()=>handlePageTurn(-2)}>{context.pageNumber - 2}</button>
                            }{context.pageNumber - 1 > 0 && <button onClick={()=>handlePageTurn(-1)}>{context.pageNumber - 1}</button>}
                            <button>{context.pageNumber}</button>                   
                            {context.pageNumber + 1 < context.totalPages && <button onClick={()=>handlePageTurn(1)}>{context.pageNumber + 1}</button>
                            }{context.pageNumber + 2 < context.totalPages && <button onClick={()=>handlePageTurn(2)}>{context.pageNumber + 2}</button>
                            }{context.pageNumber !== context.totalPages < context.totalPages && <button onClick={()=>handlePageTurn(context.totalPages)}>{">>"}</button>
                        }  
          </SectionButtons>  
        </MainContainer>
        <Footer/>
      </>
    );
  }
  
  export default Home