import Botao from "../Botao/Botao";
import InputBox from "../InputBox/InputBox";
import InputCheck from "../InputCheck/InputCheck";
import './style.scss'

export default function Formulario() {
    return (
        <div id="form-compression" className="form">
            <InputBox labelBox={'Carcaça total'} placeholder={'Informe a metragem'} />
            <InputBox labelBox={'Carcaça parcial'} placeholder={'Informe a metragem'} />
            <InputBox labelBox={'Extrusão parcial'} placeholder={'Informe a metragem'} />
            <InputBox labelBox={'Inválido inicial'} placeholder={'Informe a metragem'} />
            <InputCheck labelCheck={'Sentido crescente'} />
            <Botao />
        </div>
    )
}