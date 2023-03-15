import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import { MainContainer, DisplayCards } from "../../constants/stylePages";
import { BASE_URL } from "../../constants/BASE_URL";

function Pokedex() {

  const context = useContext(GlobalContext)
  const {pokedex}=context

    return (
      <> 
        <Header/>
          <MainContainer>
          <div><h1>Meus Pokemons</h1></div>
          <DisplayCards>
            {pokedex && pokedex.map((pokemon)=>( 
            <Card
            key={pokemon.id}
            pokemonUrl={`${BASE_URL}/pokemon/${pokemon.id}`}
            />
            ))}
          </DisplayCards>  
        </MainContainer>
      </>
    );
  }
  
  export default Pokedex