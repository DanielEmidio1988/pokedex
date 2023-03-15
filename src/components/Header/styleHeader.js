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
    }

    @media screen and (min-device-width: 800px){
           section{

                .boxLogo{
                    width: 30%;
                    justify-content: flex-start;
                    padding-left: 4vw;
        
                        img{
                            min-width: 100px;
                            width: 12vw;        
                        }
                }

                .boxMenu-hamburguer{
                    display: none;
                }
                
                .boxMenu{
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                    width: 70%;  
                    gap: 2vw;

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
                      
            }               
    }

    @media screen and (max-device-width: 800px){
        section{
            
            .boxLogo{
                padding-top: 4vh;
                width: 30%;  
                
                img{
                    min-width: 150px;
                    width: 28vw;        
                }
            }

            .boxMenu{
                display: none;                
            }

            .boxMenu-hamburguer{
                width: 70%; 
                display: flex;
                justify-content: flex-end;
                align-items: center;

                img{
                    width: 50px;
                }

                .menu-close{
                    display: none;
                }

                .menu-open{
                    padding-top: 10vh;
                    position: fixed;
                    width: 50%;
                    height: 100vh;
                    top: 0%;
                    right: 0%;
                    text-align: center;
                    background-color: #F5F2E9;   
                    border: 1.5px solid #904F16;
                }
            }
        }

        .menu-overlay-close{
            display: none;
        }
    
        .menu-overlay-open{
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            min-height: 100vh;
            background-color: #000000;
            opacity: 0.8;
        }
    }

    @media screen and (max-device-width: 500px){
        section{

            .boxlogo{
                width: 10%;
            }

            nav{
                width: 45%;
            }

            .boxMenu-hamburguer{
                width: 70%; 
                display: flex;
                justify-content: flex-end;
                align-items: center;

                img{
                    width: 50px;
                }

                .menu-close{
                    display: none;
                }

                .menu-open{
                    padding-top: 10vh;
                    position: fixed;
                    width: 80%;
                    height: 100vh;
                    top: 0%;
                    right: 0%;
                    text-align: center;
                    background-color: #F5F2E9;   
                    border: 1.5px solid #904F16;
                }
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
        font-size: 14px;
        border: 1px solid #F8ED91;
    
        :hover{

            color: #F1EDDF;
        }

    }
`
