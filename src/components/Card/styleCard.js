import styled from "styled-components";
import fundocard from "../../assets/pngwing.svg"

export const MainCard = styled.div`
    width: 440px;
    height: 210px;
    border-radius: 12px;
    background-color: ${props => props.colorCard};
    font-family: "Inter";
    color: white;
    margin-top: 30px;
    background-image: url(${fundocard});
    background-size: 50% auto;
    background-repeat: no-repeat;
    background-position: top right;

    a{
        font-family: "Poppins";
        font-weight: bold;
    }

    a:hover{
        cursor: pointer;
    }
    
    button{
        width: 146px;
        height: 38px;
        border-radius: 8px;
        border: none;
        background: white;
        font-family: "Poppins"
        font-size: 16px;
    }

    button:hover{
        cursor: pointer;
    }
    `

    export const CardTop = styled.div`
        display: flex;

        p{
            padding-left: 20px;
            padding-top: 20px;
            font-size: 16px;
            font-weight: bold;
        }

        h2{
            padding-left: 20px;
            font-size: 28px;
            font-weight: bold;
        }

        `

    export const CardBottom = styled.div`
        display: flex;
        justify-content: space-between;
        padding-left: 20px;
        padding-right: 20px;
        `
    export const CardType = styled.span`
        display: flex;
        margin-top: 8px;
        padding-left: 20px;

        img{
            width: 99px;
            height: 31px;
        }
        `
    export const SpriteOficialPokemon = styled.img`  
            width: 193px;
            margin-left: 40px;
            margin-top: -50px;       
    `