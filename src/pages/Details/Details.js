import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import { MainContainer, DisplayCards } from "../../constants/stylePages";

function Details() {

  const context = useContext(GlobalContext)
  const {pokemons, pokedex} = context

    return (
      <> 
        <Header/>
          <MainContainer>
          <div><h1>Detalhes</h1></div>
          <DisplayCards>
            {/* {pokemons.map((pokemon)=>( 
            <Card
            key={pokemon.id}
            pokemon={pokemon}/>
            ))} */}
          </DisplayCards>  
        </MainContainer>
      </>
    );
  }

  export default Details