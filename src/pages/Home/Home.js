import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import { MainContainer, listCard } from "../../constants/stylePages";

function Home() {

  const context = useContext(GlobalContext)
  const {pokemons}=context
  console.log("Pokemons", context.pokemons)

    return (
      <> 
        <Header/>
          <MainContainer>

            {pokemons.map((pokemon)=>( 
            <Card
            key={pokemon.id}
            pokemon={pokemon}/>
            ))}
            
        </MainContainer>
      </>
    );
  }
  
  export default Home