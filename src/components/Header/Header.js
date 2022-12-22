import logo from "../../assets/logo-pokedex.svg"
import { useContext } from "react";
import {MainHeader, ButtonPokedex} from "./styleHeader"
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { goToPokedex, goToHome } from "../../routes/coordinator";
import { GlobalContext } from "../../context/GlobalContext";

function Header() {

  const navigate = useNavigate()
  const location = useLocation()
  const context = useContext(GlobalContext)

  const params = useParams()
  const pokeName = params.PokemonName

  // const searchPokedex = context.pokedex.filter((pokemon)=>{
  //   return pokemon.name === pokeName
  // })

  console.log('Search', context.pokedex.filter((pokemon)=>{return pokemon.name === pokeName}))

    return (
      <>
        <MainHeader>
          
          <div>
            {location.pathname === "/" ?
            '' 
           :<a onClick={(()=>goToHome(navigate))}>Todos os Pokemons</a>}
          </div>
          <div><img src={logo} alt="logo-pokedex"/></div>
          {location.pathname === `/${pokeName}` ?
          <div>
            {/* {context.pokedex?.includes(pokeName) ? <button>Remover Pokemon</button> : <button>Adicionar Pokemon</button>} */}
            {context.pokedex && context.pokedex.filter((pokemon)=> {return pokemon.name === pokeName}) ? <button>Remover Pokemon</button> : <button>Adicionar Pokemon</button>}
          </div>
          :
          <div>
            {location.pathname === "/" ?
              <ButtonPokedex onClick={()=>goToPokedex(navigate)}>Pokédex</ButtonPokedex>
            :''}
          </div>}
            
        </MainHeader>
      </>
    );
  }
  
  export default Header