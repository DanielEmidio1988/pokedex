import logo from "../../assets/logo-pokedex.svg"
import {MainHeader, ButtonPokedex} from "./styleHeader"
import { useNavigate, useLocation } from "react-router-dom";
import { goToPokedex, goToHome } from "../../routes/coordinator";

function Header() {

  const navigate = useNavigate()
  const location = useLocation()


    return (
      <>
        <MainHeader>
          
          <div>
            {location.pathname === "/" ?
            '' 
           :<a onClick={(()=>goToHome(navigate))}>Todos os Pokemons</a>}
          </div>
          <div><img src={logo} alt="logo-pokedex"/></div>
          {location.pathname === "/:idPokemon" ?
          <div>
            <button>teste</button>
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