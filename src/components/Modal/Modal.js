import { GlobalContext } from "../../context/GlobalContext";
import { useContext } from "react";
import { MainModal } from "./styleModal"
import { LoadingBar } from "./styleModal";
import { ModalAlert } from "./styleModal";
import pikachu from "../../assets/Pikachu.gif"

function Modal(props) {

    const context = useContext(GlobalContext)
    const progress = Number(10)

    const renderModal = () => {
        console.log(props)
        switch (props.action) {
            case 'add':
                return <>
                    <h2>Gotcha!</h2>
                    <p>Pokemon adicionado a sua Pokédex</p>
                </>

            case 'remove':
                return <>
                    <h2>Oh, no!</h2>
                    <p>O Pokemon foi removido da sua Pokédex</p>
                </>
            case 'alert':
                return <>
                    <ModalAlert>
                    <p><img src={pikachu} alt="Pikachu correndo"/></p>
                    <h2>Atualização!</h2>
                    <p>Este projeto está em atualização, mas sinta-se a vontade para navegar.</p>
                    <p><LoadingBar progress={progress}><div></div></LoadingBar></p>
                    </ModalAlert>
                </>
            default:
                return <>
                    <h2>Ops!</h2>
                    <p>Algo deu errado! Verifique.</p>
                </>
        }
    }
    return (
        <>
            <MainModal onClick={() => { context.setShowModal(false) }}>

                {renderModal()}

            </MainModal>
        </>
    )
}

export default Modal
