import styled from "styled-components";

export const ContainerFilter = styled.div`
    .open{ 
        position: fixed;
        top: 40%;
        left: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 20vw;
        min-width: 130px;
        background-color: #F5F2E9;   
        border: 1.5px solid #904F16;
        border-radius: 8px;
        // box-shadow: 2px 2px 2px #904F16; #E6E7BF
        padding: 2vh 0 2vh 0;
        gap: 0.5vw;

        img{
            padding: 4vh 0 2vh 0;        
            width: 70px; 
        }

        button{
            width: 100px;
            height: 20px;
            background-color: #F2BF40;
            border-radius: 8px;
            color: #904F16;
            font-family:'Poppins';
            font-weight: bold;
            font-size: 12px;
            border: 2px solid #904F16;
            margin-bottom: -24px;
        
            :hover{
                cursor: pointer;
                background-color: #F2BF40;  
            }
        }

        input{
            width: 80%;
            height: 4vh;
            background-color: #E6E7BF; 
            border: 1.5px solid #904F16;
            border-radius: 6px;
            color: #F5CF6B;
            padding-left: 1vw;
        }

        input:hover{
            cursor: pointer;
        }

        input: focus{
            background-color: #483838;
            outline: none;
        }
    }

    .close{
        display: none;
    }

    @media screen and (min-device-width: 500px) and (max-device-width: 800px){
        .open{ 
            left: 76%;
            width: 24vw;
        }
    }

    @media screen and (max-device-width: 500px) {

        .open{ 
            left: 0%;
            width: 100%;

            img{
                padding: 4vh 0 2vh 0;        
                width: 40vw; 
            }

            input{
                height: 10vh;
                margin-bottom: 2vh;
                text-align: center;
                padding: 0;
                font-size: 18px;
            }

            button{
                height: 8vh;
                width: 60vw;
                border: 3px solid #904F16;
                font-size: 24px;
            }
        }

    }
`