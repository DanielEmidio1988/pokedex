import styled from "styled-components";

export const MainModal = styled.div`
    background-color: #F5F2E9;  
    border-radius: 8px;
    // border: 2px solid #C7B89B;
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

    // :hover{
    //     cursor: pointer;
    // }
    
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
        // box-shadow: 0px 0px 2px #904F16;
        background-color: #E2B868; 
        border: 1.5px solid #EACD87;
        // border-radius: 6px;
        color: #904F16;
        width: 60%;
        height: 16%;
    }

    // button:hover{
    //     cursor: pointer;
    // }
    `

    // export const LoadingBar = styled.div`
    //     width: 300px;
    //     height: 20px;
    //     border: 2px solid #904F16;
    //     background-color: #FD6049;

    //     div{
    //         width: ${props=> props.progress}%;
    //         height: 100%;
    //         background-color: #92D050;
    //         border: 1px solid #904F16;
    //     }
    // `

    // export const ModalAlert = styled.div`
    //     text-align: center;
    //     display: flex;
    //     flex-direction: column;
    //     justify-content: center;
    //     align-items: center;
        
    //     img{
    //         width: 100px;
    //     }

    //     p{
    //         font-size: 12px;
    //     }

    // `

