import styled from "styled-components";
export const CardContainer = styled.div`
    width: 14vw;
    min-width: 200px;
    height: 22vw;
    min-height: 300px;
    border-radius: 8px;
    border: 2px solid #904F16;
    background-color: #E6E7BF;
    font-family: "Inter";
    color: white;
    margin-top: 30px;
    box-shadow: 2px 2px 4px #729F92;
    animation: fromTop .7s .3s backwards; 

    .loadingStatus{
        height: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @keyframes fromTop {
        from{
            opacity: 0;
            transform: translateY(-20px);      
        }
    
        to{
            opacity: 1;
            transform: translateY(0);
        }
    }

    @media screen and (max-device-width: 500px){
        width: 90%;
        min-height: 200px;      
    }
    
    `

    export const CardHeader = styled.header`
        padding-top: 10px;
        height: 20%;
        width: 100%;
        display: flex;
        justify-content: center;
        text-align: center;

        .pokemonName{
            width: 80%;
            min-width: 120px;
            height: 50px;
            border-radius: 8px;
            border: 2px solid #904F16;
            background-color: #F5F2E9;
            box-shadow: 0px 2px 2px #904F16;
            margin-top: -20px;
        }

        p{
            color: #904F16;
            cursor: default;
            font-size: 12px;         
        }

        h3{
            font-size: 20px;
        }

        @media screen and (max-device-width: 500px){
            justify-content: flex-end;
            padding-right: 2vw;
            
            .pokemonName{
                width: 50%;           
                height: 56px;

                h2{
                    font-size: 26px;
                }

                p{
                    font-size: 16px;
                }
            }
        }
        `
    
    export const CardMain = styled.section`
        width: 100%;
        height: 60%;

        div{
            display: flex;
            justify-content: center;
        }

        div:last-child{
            span{ 
                display: flex;
                gap: 1vw;
                margin-top: 0.5vw;
                cursor: default;
            }
        }

        @media screen and (max-device-width: 500px){
            div{
                margin-left: 4vw;
                flex-direction: column;
            }

        }
    `

    export const CardType = styled.div`
            text-align: center;
            width: 44px;
            font-size: 8px;
            background-color: ${props => props.color};
            border: 1.5px solid #F1EDDF;
            border-radius: 4px;
            text-transform: uppercase; 
            box-shadow: 0px 0px 2px #904F16;

        `

    export const CardFooter = styled.footer`
        width: 100%;
        height: 20%;

        section{
            display: flex;
            justify-content: space-evenly;
        }

        @media screen and (max-device-width: 500px){
            margin-top: -60px;
            margin-left: 200px;

            section{
                gap: 1vh;
                flex-direction: column; 
            }
        }     
    `
   
    export const SpriteOficialPokemon = styled.img`  
            width: 10vw;
            min-width: 140px; 

            @media screen and (max-device-width: 500px){
                min-width: 120px; 
            }

    `

    export const ButtonDetails = styled.button`
        width: 20%;
        min-height: 40px;
        height: 3vw;
        border: 1.5px solid #FFFFC4; 
        background-color: #F8ED91;
        
        img{
            width: 60%;
        }
        
        :hover{
            background-color: #F5CF6B;       
        }

        @media screen and (max-device-width: 500px){
            min-width: 40%;

            img{
                width: 36px;
            }
        }
    `
    export const ButtonDeletePokemon = styled.button`
        width: 70%;
        min-height: 40px;
        height: 3vw;
        font-size: 16px;
        background-color: #FF6262;
        border: 1.5px solid #FEC2BA; 
        color: #904F16;

        :hover{
            background-color: #F44900;
            color: #F5CF6B;
        }

        @media screen and (max-device-width: 500px){
            width: 40%;
        }
        `

    export const AddPokemon = styled.button`
        width: 70%;
        min-height: 40px;
        height: 3vw;
        border-radius: 8px;
        font-size: 16px;
        background-color: #ABEA51;
        border: 1.5px solid #E1F886;
        color: #588824;

        :hover{
            color: #E1F886;
            background-color: #AADD5C;
        }

        @media screen and (max-device-width: 500px){
            width: 40%;
        }
        `