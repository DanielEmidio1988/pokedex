import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import { MainContainer, DisplayCards } from "../../constants/stylePages";

function Pokedex() {

  const context = useContext(GlobalContext)
  const {pokedex}=context

    return (
      <> 
        <Header/>
          <MainContainer>
          <div><h1>Meus Pokemons</h1></div>
          <DisplayCards>
            {pokedex.map((pokemon)=>( 
            <Card
            key={pokemon.id}
            pokemon={pokemon}/>
            ))}
          </DisplayCards>  
        </MainContainer>
      </>
    );
  }
  
  export default Pokedex