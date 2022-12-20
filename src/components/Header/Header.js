import logo from "../../assets/logo-pokedex.svg"
import {MainHeader, ButtonPokedex} from "./styleHeader"
import { useNavigate, useLocation } from "react-router-dom";
import { goToPokedex, goToHome } from "../../routes/coordinator";

//logo pokemon
// Width 307px
// Height 113px
// Top 21px
// Left 566px

function Header() {

  const navigate = useNavigate()
  const location = useLocation()


    return (
      <>
        <MainHeader>
          
          <div>
            {location.pathname === "/pokedex" ?
            <a onClick={(()=>goToHome(navigate))}>Todos os Pokemons</a> 
           :''}
          </div>
          <div><img src={logo} alt="logo-pokedex"/></div>
          <div>
            {location.pathname === "/" ?
              <ButtonPokedex onClick={()=>goToPokedex(navigate)}>Pokédex</ButtonPokedex>
            :''}
          </div>
            
        </MainHeader>
      </>
    );
  }
  
  export default Header