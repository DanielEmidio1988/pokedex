import styled from "styled-components";
import fundocard from "../../assets/pngwing.svg"

//Daniel: Estilização do Container da página de detalhes do Pokemon
export const MainCardDetails = styled.div`
    border-radius: 24px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 90%;
    height: 90vh;
    
    .boxDetailsShowPokemon{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        width: 40%;

        img{
            width: 28vw;
        }

        .boxDetailsShowPokemonType{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 2vw;
        }
    }

    @media screen and (max-device-width: 800px){
        flex-direction: column-reverse;

        .boxDetailsShowPokemon{
            width: 100%;
            margin: 12vh 0 4vh 0;
        }

    }

`

export const SectionBoxInfoPkm = styled.section`
    height: 100%;
    width: 50%;
    padding-top: 4vh;   

    .introPokemon{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 24%;   
        

        div:first-child{       
            text-align: center;
            color: #F8ED91;
            width: 300px;
            height: 100px;
            border-radius: 8px;
            border: 1.5px solid #F8ED91;
            box-shadow: 0px 0px 2px #904F16;
            background-color: #483838;
            margin-bottom: 2vh;   
            
            h2{
                font-family:'Poppins';
                font-weight: 500;
                color: #F8ED91;
            }
    
            h3{
                font-family:'Poppins';
                font-weight: 500;
                color: #F8ED91;
            }
        }

        div:last-child{
            margin-bottom: 4vh;
        }
    }

    .statusPokemon{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 66%;

        h2{
            color: #483838;
        }

        .boxFilters{
            display: flex;
            justify-content: center;
            gap: 2vh;
            height: 30%;
            padding-top: 4vh;
        }

        .boxResultFilter{
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: center;
        }
    }
    @media screen and (max-device-width: 800px){
        width: 100%;
    }
`

export const ButtonStatusPokemon = styled.button`
    background-color: #483838;
    color: #F8ED91;
    border: 1px solid #F8ED91;
    box-shadow: 0px 0px 2px #904F16;
    border-radius: 8px;
    height: 40px;
    width: 100px;
    opacity: ${props=> props.statusPokemon ? 1 : 0.5};


:hover{
    cursor: pointer;
}
`

export const DisplayPokemon = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 613px;
    margin-left: 40px;

    div{
        display: flex;
        justify-content: center;     
        align-items: center;
        border-radius: 8px;
        width: 282px;
        height: 282px;
        background-color: white;
    }

    img{
        width: 70%;
    } 
`

export const DisplayBaseStats = styled.div`
    border-radius: 12px;
    font-family: 'Poppins';
    width: 60%;
    text-transform: capitalize;

    h2{
        margin-bottom: 2vh;
    }

    p{
        display: flex;
        text-align: right;
        justify-content: space-between;
        font-size: 12px;
        
        span:first-child{
            width: 20%;
            text-align: end;
        }

        span:last-child{
            width: 60%;
        }
    }
`

export const BarStats = styled.span`
    border-radius: 4px;
    height: 10px;   
    
    div{
        border: 1px solid ${props => props.stats < 50 ? 'red' :props.stats < 99? 'orange':'#73AC31'};
        width: ${props => (props.stats/100)*100}%;
        background-color: ${props => props.stats < 50 ? '#FF7B2E' :props.stats < 99? '#FFC000':'#B5E61D'};
        border-radius: 8px;
        height: 100%;
    }
`

export const DisplayNameMove = styled.div`
    font-family: 'Poppins';

    h2{
        margin-bottom: 2vh;
    }

    div:last-child{
        border-radius: 8px;
        padding: 20px;
        width: 20vw;
    }

`

export const CardType = styled.div`
    cursor: default;
    text-align: center;
    width: 10vw;
    font-size: 18px;
    background-color: ${props => props.color};
    font-family:'Poppins';
    color: #F8ED91;
    border: 1.5px solid #F1EDDF;
    border-radius: 6px;
    text-transform: uppercase; 
    box-shadow: 0px 0px 2px #904F16;

@media screen and (max-device-width: 800px){
    font-size: 14px;
    width: 100px;
} 
`

export const DisplayMoves = styled.p`
    background-color: #F1EDDF;
    font-size: 14px;
    border-radius: 12px;
    border: 1px #904F16 dashed;
    margin-bottom: 10px;
    width: auto;
    height: 37px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: capitalize;
`

export const BoxEvolution = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
`

export const CardEvolution = styled.div`
div:first-child{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: black;
}`