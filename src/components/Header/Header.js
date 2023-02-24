import logo from "../../assets/logo-pokedex.svg"
import { useContext } from "react";
import {MainHeader, MenuNav} from "./styleHeader"
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { goToPokedex, goToHome, goToAbout } from "../../routes/coordinator";
import { GlobalContext } from "../../context/GlobalContext";

function Header() {

  const navigate = useNavigate()
  const location = useLocation()
  const context = useContext(GlobalContext)
  const params = useParams()
  const pokeName = params.PokemonName

  const thisPokemon = context.detailPokemon.find(pokemon => pokemon.name === pokeName)
  const isInPokedex = context.pokedex.find(pokemon => pokemon.name === pokeName)

//Daniel: callback searchPokedex será aplicada dentro da página de detalhes
  const searchPokedex = ()=>{
    switch (location.pathname) {
      case "/":
        return <></> 
      case `/${pokeName}`:
        return(
          <>
        {isInPokedex?
        <button onClick={()=>{context.removePokemonPokedex(thisPokemon)}}>LIBERAR</button>
          :
        <button onClick={()=>{context.addPokemonPokedex(thisPokemon)}}>CAPTURAR</button>}
        </>
      )  
      default:
        return <></>;
    }
  }

    return (
        <MainHeader>
          
          <section>
              <nav className="boxLogo">
                    <img src={logo} alt="logo-pokedex"/>
              </nav>
              <nav className="boxMenu">
                {/* Daniel: Condicional para estilização do Header de acordo com a página atual */}
                    {location.pathname === "/" || location.pathname === `/${context.pageNumber}`  ?
                    <>
                    <MenuNav>                      
                      <button className="buttonNav" onClick={()=>goToAbout(navigate)}>SOBRE</button>
                    </MenuNav>

                    <MenuNav>      
                      <button className="buttonNav" onClick={()=>goToPokedex(navigate)}>POKEDEX</button>
                    </MenuNav>
                    </>    
                    :
                    ''
                    }

                    {location.pathname === "/pokedex" ?
                    <>
                    <MenuNav>                      
                      <button className="buttonNav" onClick={()=>goToHome(navigate)}>PRINCIPAL</button>
                    </MenuNav>  
                    <MenuNav>                      
                      <button className="buttonNav" onClick={()=>goToAbout(navigate)}>SOBRE</button>
                    </MenuNav> 
                    </>  
                    :
                    ''
                    }

                    {location.pathname === "/sobre" ?
                    <>
                    <MenuNav>                      
                      <button className="buttonNav" onClick={()=>goToHome(navigate)}>PRINCIPAL</button>
                    </MenuNav>  
                    <MenuNav>      
                      <button className="buttonNav" onClick={()=>goToPokedex(navigate)}>POKEDEX</button>
                    </MenuNav>
                    </>  
                    :
                    ''
                    }

                    {location.pathname === `/pokemon/${pokeName}` ?
                    <>
                    <MenuNav>                      
                      <button className="buttonNav" onClick={()=>goToHome(navigate)}>PRINCIPAL</button>
                    </MenuNav> 

                    <MenuNav>                      
                      <button className="buttonNav" onClick={()=>goToAbout(navigate)}>SOBRE</button>
                    </MenuNav>

                    <MenuNav>      
                      <button className="buttonNav" onClick={()=>goToPokedex(navigate)}>POKEDEX</button>
                    </MenuNav>
                    </>   
                    :
                    ''
                    }                    
              </nav>
          </section>
            
        </MainHeader>     
    );
  }
  
  export default Header