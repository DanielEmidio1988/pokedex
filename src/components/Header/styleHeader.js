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
    }
    
    a{
        font-family: 'Poppins';
        text-decoration-line: underline;
        font-size: 24px;
        font-weight: bold;
    }
    
    a:hover{
        cursor:pointer;
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

export const ButtonDeletePokemon = styled.button`
    width: 226px;
    height: 57px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-family: 'Poppins';
    background-color: #FF6262;
    color: white;
    border: none;

    :hover{
        cursor: pointer;
    }
`

export const AddPokemon = styled.button`
    width: 226px;
    height: 57px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-family: 'Poppins';
    background-color: #33A4F5;
    color: white;
    border: none;
    
    :hover{
        cursor: pointer;
    }
`