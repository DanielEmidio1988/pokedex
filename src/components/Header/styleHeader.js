import styled from "styled-components";

export const MainHeader = styled.div`
    background-color: white;
    height: 160px;
    display: flex;
    width: 100%;
    
    img{
        width: 307px;
        height: 113px;        
    }
    
    div{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 33.33%;        
    }`

export const ButtonPokedex = styled.button`
    width: 287px;
    height: 74px;
    background-color: #33A4F5;
    border-radius: 8px;
    color: white;
    font-family:'Poppins';
    font-weight: bold;
    font-size: 24px;
    border: none;

    :hover{
        cursor: pointer;
    }
`