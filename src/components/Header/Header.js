import logo from "../../assets/logo-pokedex.svg"
import {MainHeader, ButtonPokedex} from "./styleHeader"
import { useNavigate } from "react-router-dom";
import { goToPokedex } from "../../routes/coordinator";

//logo pokemon
// Width 307px
// Height 113px
// Top 21px
// Left 566px

function Header() {

  const navigate = useNavigate()


    return (
      <>
        <MainHeader>
          <div></div>
          <div><img src={logo} alt="logo-pokedex"/></div>
          <div><ButtonPokedex onClick={()=>goToPokedex(navigate)}>Pokédex</ButtonPokedex></div>
            
        </MainHeader>
      </>
    );
  }
  
  export default Header