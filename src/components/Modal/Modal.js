import { GlobalContext } from "../../context/GlobalContext";
import { useContext } from "react";
import { MainModal } from "./styleModal"

function Modal(props) {

    const context = useContext(GlobalContext)
    const progress = Number(40)

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
