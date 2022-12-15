import {createGlobalStyle} from 'styled-components'
import loading from './assets/Pikachu.gif' //verificar como atualizar essa imagem no cursor

export const GlobalStyled = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        // cursor: url(${loading});
    }
    `