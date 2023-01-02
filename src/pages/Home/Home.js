import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import { MainContainer, DisplayCards } from "../../constants/stylePages";

function Home() {

  const context = useContext(GlobalContext)
  const {pokemons}=context

    return (
      <> 
        <Header/>
          <MainContainer>
          <div><h1>Todos Pokemons</h1></div>
          <DisplayCards>
            {pokemons && pokemons
            .sort((a,b)=>{
              if(a?.id > b?.id){
                return 1
              }else{
                return-1
              }
            })
            .map((pokemon)=>( 
            <Card
            key={pokemon.id}
            pokemon={pokemon}/>
            ))}
          </DisplayCards>  
        </MainContainer>
      </>
    );
  }
  
  export default Home