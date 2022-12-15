import styled from "styled-components";
import fundocard from "../../assets/pngwing.svg"

export const MainCard = styled.div`
    width: 440px;
    height: 210px;
    border-radius: 12px;
    background-color: #729F92;
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
    `

    export const CardTop = styled.div`
        display: flex;

        p{
            padding-left: 20px;
            padding-top: 20px;
            font-size: 16px;
            font-weight: bold;
        }

        h1{
            padding-left: 20px;
            font-size: 28px;
            font-weight: bold;
        }
        
        img{
            width: 193px;
            margin-left: 100px;
            margin-top: -50px;
        }

        span:first-child{
            padding-left: 20px;
        }
        `

    export const CardBottom = styled.div`
        display: flex;
        justify-content: space-between;
        padding-left: 20px;
        padding-right: 20px;
        `