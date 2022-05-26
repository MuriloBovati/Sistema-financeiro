import "./Infor.css"
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai"

const Infor = () =>{
    return (
        <div className="containerInfo">
            <div className="containerData">
                <AiOutlineArrowLeft className="imgSeta"/>
                <label>Mes</label>
                <AiOutlineArrowRight className="imgSeta"/>
            </div>
            <div className="containerValor">
                <label>Receita</label>
                <label>R$0.00</label>
            </div>
            <div className="containerValor">
                <label>Despesa</label>
                <label>R$0.00</label>
            </div>
            <div className="containerValor">
                <label>Balanco</label>
                <label>R$0.00</label>
            </div>
        </div>
    )
}

export default Infor