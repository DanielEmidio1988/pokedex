import logo from "../../assets/logo-pokedex.svg"
import { useContext, useState } from "react";
import {MainHeader, MenuNav} from "./styleHeader"
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { goToPokedex, goToHome, goToAbout } from "../../routes/coordinator";
import { GlobalContext } from "../../context/GlobalContext";
import menuhamburguer from "../../assets/menu.svg"

function Header() {

  const navigate = useNavigate()
  const location = useLocation()
  const context = useContext(GlobalContext)
  const params = useParams()
  const pokeName = params.PokemonName
  const [menu, setMenu] = useState(false)

    return (
        <MainHeader>
        <div className={menu ? 'menu-overlay-open' : 'menu-overlay-close'} onClick={()=>setMenu(false)}></div> 
          
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

              <nav className="boxMenu-hamburguer">
                {/* Daniel: Condicional para estilização do Header de acordo com a página atual */}
                <div>
                  <img src={menuhamburguer} alt="menu-pokedex" onClick={()=>setMenu(true)}/>
                </div>
                <div className={menu ? "menu-open" : "menu-close"} onClick={()=>setMenu(false)}>
                    {location.pathname === "/" || location.pathname === `/${context.pageNumber}`  ?
                    <>
                    <MenuNav>                      
                      <h1 onClick={()=>goToAbout(navigate)}>SOBRE</h1>
                    </MenuNav>

                    <MenuNav>      
                      <h1 onClick={()=>goToPokedex(navigate)}>POKEDEX</h1>
                    </MenuNav>
                    </>    
                    :
                    ''
                    }

                    {location.pathname === "/pokedex" ?
                    <>
                    <MenuNav>                      
                      <h1 onClick={()=>goToHome(navigate)}>PRINCIPAL</h1>
                    </MenuNav>  
                    <MenuNav>                      
                      <h1 onClick={()=>goToAbout(navigate)}>SOBRE</h1>
                    </MenuNav> 
                    </>  
                    :
                    ''
                    }

                    {location.pathname === "/sobre" ?
                    <>
                    <MenuNav>                      
                      <h1 onClick={()=>goToHome(navigate)}>PRINCIPAL</h1>
                    </MenuNav>  
                    <MenuNav>      
                      <h1 onClick={()=>goToPokedex(navigate)}>POKEDEX</h1>
                    </MenuNav>
                    </>  
                    :
                    ''
                    }

                    {location.pathname === `/pokemon/${pokeName}` ?
                    <>
                    <MenuNav>                      
                      <h1 onClick={()=>goToHome(navigate)}>PRINCIPAL</h1>
                    </MenuNav> 

                    <MenuNav>                      
                      <h1 onClick={()=>goToAbout(navigate)}>SOBRE</h1>
                    </MenuNav>

                    <MenuNav>      
                      <h1 onClick={()=>goToPokedex(navigate)}>POKEDEX</h1>
                    </MenuNav>
                    </>   
                    :
                    ''
                    }
                </div>                    
              </nav>
          </section>
            
        </MainHeader>     
    );
  }
  
  export default Header