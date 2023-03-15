import styled from "styled-components";

export const FooterContainer = styled.div`
    width: 100%;
    height: 16vh;
    background-color: #FCFAEB;
    color: #904F16;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-top: 2vh;
    
    section{
        width: 96%;
        height: 90%;     
        border-radius: 12px;
        border: 1.5px solid #F5F2E9;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background-color: #E6E7BF;
        box-shadow: 0px 0px 2px #904F16;

        h3{
            font-family: 'Poppins';
            font-weight: 400;
            cursor: default;
        }

        div:last-child{
            padding-top: 1vh;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 4vw;

            img{
                width: 24px;
            }

            img:hover{
                cursor: pointer;
                opacity: 0.8;
            }
        }
    }

    @media screen and (max-device-width: 500px){
        height: 24vh;
    
        section{
            padding-top: 4vh;
            width: 100%;
            height: 100%;
            border-radius: 12px 12px 0 0;

            h2{
                font-size: 4vw;
            }

            div:last-child{
                padding: 4vh 0 2vh 0;
                justify-content: space-evenly;

                img{
                    width: 60px;
                }
            }
        }
    }
`