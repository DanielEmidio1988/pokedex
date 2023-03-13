import styled from 'styled-components';

export const MainHeader = styled.div`
    width: 100%;
    height: 16vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FCFAEB;

    section{
        display: flex;
        width: 96%;
        height: 90%;

        .boxLogo{
            width: 30%;
            justify-content: flex-start;
            padding-left: 4vw;

                img{
                    min-width: 100px;
                    width: 12vw;        
                }
        }
        
        .boxMenu{
            display: flex;
            justify-content: flex-end;
            align-items: center;
            width: 70%;  
            gap: 2vw;
        }
        
        a{
            font-family: 'Poppins';
            text-decoration-line: underline;
            font-size: 24px;
            font-weight: bold;
        }
        
        a:hover{
            cursor:pointer;
        }

    }

    @media screen and (max-device-width: 800px){
        section{
            width: 100%;

            .boxLogo{
                padding-top: 4vh;
                width: 30%;            
            }

            .boxMenu{
                width: 70%;
                
            }
        }
    }

    @media screen and (max-device-width: 500px){
        section{
            width: 100%;
            height: 100%;
            border-radius: 0 0 12px 12px;

            .boxlogo{
                width: 10%;
            }

            nav{
                width: 45%;
            }
        }
    }
   
    `

export const MenuNav = styled.div`
display: flex;
justify-content: center;
align-items: center;

    .buttonNav{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: 10vw;
        min-width: 90px;
        height: 36px;
        background-color: #483838;
        border-radius: 8px;
        color: #F8ED91;
        // font-family:'Poppins';
        // font-weight: 500;
        font-size: 14px;
        border: 1px solid #F8ED91;
        // box-shadow: 0px 0px 2px #904F16;     
    
        :hover{
            // cursor: pointer;
            color: #F1EDDF;
        }

    }
`
