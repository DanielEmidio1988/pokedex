import Header from "../../components/Header/Header";
import { MainContainer } from "../../constants/stylePages";
import Footer from "../../components/Footer/Footer";
import OakDesktop from "../../assets/OakDesktop.png"
import { SectionAbout } from "../../constants/stylePages";

function About() {

    return (
      <> 
        <Header/>

          <MainContainer>
          <div><h1>Sobre este projeto</h1></div>
          <SectionAbout >

            <div className="boxImgIntro">
              <img src={OakDesktop} alt="Prof. Oak"/>

            </div>
            <div className="boxTextIntro">
              <p>Olá, treinador(a)!</p>
              <p></p>
              <p>Seja bem vindo a minha Pokedex! Meu nome é Daniel e este projeto é habitado por criaturas conhecidas como Pokemon.</p>
              <p></p>
              <p>Para muitas pessoas, Pokemons fazem parte da memória afetiva, enquanto outras assim como eu continuam apaixonados.</p>
              <p></p>
              <p>Aqui você encontrará as principais informações sobre cada um dos 1008 pokemons disponiveis até o momento e este projeto estará em constante atualização, sempre com novos recursos e funcionalidades.</p>
              <p></p>
              <p>Este projeto foi feito de coração e espero que possam aproveitá-lo.</p>
              <p>Caso queira oferecer alguma sugestão, critica ou bater um papo sobre este projeto, é só me chamar pelo meu LinkedIn e ficarei feliz em conversar com você. :D</p>
            </div>

          </SectionAbout>  
        </MainContainer>
        <Footer/>
      </>
    );
  }

  export default About