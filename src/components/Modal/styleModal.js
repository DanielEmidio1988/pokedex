import styled from "styled-components";

export const MainModal = styled.div`
    background-color: white;
    border-radius: 12px;
    width: 415px;
    height: 222px;
    position: absolute;
    top: 30%;
    left: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    :hover{
        cursor: pointer;
    }
    
    h2{
        font-size: 48px;
        font-family: 'Poppins';
    }
    
    p{
        font-size: 16px;
        font-family: 'Poppins';
    }`

    export const LoadingBar = styled.div`
        width: 300px;
        height: 20px;
        border: 2px solid #904F16;
        background-color: #FD6049;

        div{
            width: ${props=> props.progress}%;
            height: 100%;
            background-color: #92D050;
            border: 1px solid #904F16;
        }
    `

    export const ModalAlert = styled.div`
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        img{
            width: 100px;
        }

        p{
            font-size: 12px;
        }
    `