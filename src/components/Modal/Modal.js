import { GlobalContext } from "../../context/GlobalContext";
import { useContext } from "react";
import "./styleModal"

function Modal(){

    const context = useContext(GlobalContext)

    const renderModal = ()=>{
        switch (context.action) {
            case 'add':
                <>
                <h2>Gotcha!</h2>
                <p>Pokemon adicionado a sua Pokédex</p>
                </>
            break;
            case 'remove':
                <>
                <h2>Oh, no!</h2>
                <p>O Pokemon foi removido da sua Pokédex</p>
                </>
            break;        
            default:
                <>
                <h2>Ops!</h2>
                <p>Algo deu errado! Verifique.</p>
                </>                
                break;
        }
    }
    return(
        <>
        <MainModal>
        <div onClick={()=>{context.setShowModal(false)}}></div>
        <div>
            {context.setShowModal && renderModal()}
        </div>
        </MainModal>
        </>
    )
}

export default Modal