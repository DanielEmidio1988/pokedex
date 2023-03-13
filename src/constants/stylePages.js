import styled from "styled-components";

export const MainContainer = styled.div`
    padding-top: 32px;
    width: 100%;
    min-height: 128vh;
    background-color: #FCFAEB;

    // h1{
    //     cursor: default;
    //     font-family: 'Poppins';
    //     font-size: 48px;
    //     padding-left: 40px;
    //     font-weight: 500;
    //     color: #483838;
    //     // background-color: #7B7774;
    // }

    h2{
        cursor: default;
        font-family: 'Poppins';
        font-size: 34px;
        color: #E8BE67;
        text-transform: capitalize;
        font-weight: 700;
    }

    h3{
        cursor: default;
        font-family: 'Poppins';
        text-transform: capitalize;
        font-weight: 400;
        color: #904F16;
    }

    p{
        font-family: 'Inter';  
    }
    
    .boxFilter{
        width: 100%;
        height: 10vh;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2vw;

        input{
            width: 80%;
            height: 20px;
            padding-left: 2vw;
            border: 1px solid #FFFFC4;
            color: #904F16;
            background-color: #F8ED91;
            border-radius: 6px;
            box-shadow: 0px 0px 2px #904F16;

        }

        input:focus{
            outline: none;
        }

        button{
            width: 10%;
            height: 20px;
            color: #904F16;
            border-radius: 6px;
            border: 1.5px solid #904F16;
            background-color: #E6E7BF;
            height: 20px;
            // box-shadow: 0px 0px 2px #904F16;
        }

        button:hover{
            // cursor: pointer;
            background-color: #F5F2E9;
        }
    }

    @media screen and (max-device-width: 500px){

        h1{
            font-size: 30px;
        }

        .boxFilter{
            input{
                width: 70%;
                height: 36px;
            }

            button{
                width: 20%;
                height: 36px;
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
        height: 100vh;
        background-color: #000000;
        opacity: 0.8;
    }
`

export const DisplayCards = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
    padding-top: 32px;
`

export const SectionAbout = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;

    .boxImgIntro{
        width: 40%;
        display: flex;
        justify-content: center;
        align-items: center;

        img{
            width: 14vw;
            min-width: 100px;
        }
    }

    .boxTextIntro{
        width: 60%;
        text-align: center;

        p{
            cursor: default;
            padding-bottom: 2vh;
        }
    }

    @media screen and (max-device-width: 800px){
        flex-direction: column;

        .boxImgIntro{
            width: 100%;
            margin: 4vh 0 4vh 0;
        }

        ..boxTextIntro{
            width: 100%;
        }
    }
`

export const SectionButtons = styled.section`
    padding-top: 2vh;
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 1vw;

    button{
        background-color: #483838;
        color: #F8ED91;
        font-family:'Poppins';
        font-weight: 500;
        font-size: 14px;
        width: 2vw;
        min-width: 40px;
        height: 2vw;
        min-height: 40px;
        border-radius: 8px;
        border: 1px solid #F8ED91;
        box-shadow: 0px 0px 2px #904F16;
    }

    button:hover{
        cursor: pointer;
        color: #F1EDDF;
    }

    @media screen and (max-device-width: 500px){
        padding: 4vh 0 4vh 0;
        gap: 0;
        justify-content: space-evenly;

    }
    
`