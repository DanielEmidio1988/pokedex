import logo from "../../assets/logo-pokedex.svg"
import {MainHeader} from "./styleHeader"

//logo pokemon
// Width 307px
// Height 113px
// Top 21px
// Left 566px
function Header() {
    return (
      <>
        <MainHeader>
            <img src={logo} alt="logo-pokedex"/>
        </MainHeader>
      </>
    );
  }
  
  export default Header