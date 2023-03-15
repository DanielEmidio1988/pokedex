import styled from "styled-components";

export const MainModal = styled.div`
    background-color: #F5F2E9;  
    border-radius: 8px;
    min-width: 300px;
    width: 38vw;
    height: 200px;
    position: fixed;
    top: 40%;
    left: 34%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #483838;
    
    h2{
        font-size: 48px;
        font-family: 'Poppins';
        font-weight: 500;
    }
    
    p{
        font-size: 14px;
        font-family: 'Poppins';
    }
    
    button{
        margin-top: 4vh;
        background-color: #E2B868; 
        border: 1.5px solid #EACD87;
        color: #904F16;
        width: 60%;
        height: 16%;
    }

    @media screen and (max-device-width: 500px){
        top: 20%;
        left: 10%;
    }

    `