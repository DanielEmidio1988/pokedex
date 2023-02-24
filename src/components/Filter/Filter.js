import { ContainerFilter } from "./styleFilter"
import navFilter from  "../../assets/filter.png"

function FilterMenu (props){
    return(
        <ContainerFilter>
            <div className={props.filter ? 'open':'close'}>
                <img src={navFilter} alt="icone-filtro"/>
                <input placeholder="Id ou Nome"/>
                <input placeholder="Tipo"/>
                <input placeholder="Geração"/>
                <button onClick={()=>props.setFilter(false)}>FECHAR</button>
            </div>
        </ContainerFilter>
    )
}

export default FilterMenu