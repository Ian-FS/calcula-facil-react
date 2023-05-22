import InputBox from "../components/Formulario/InputBox/InputBox"
import InputCheck from "../components/Formulario/InputCheck/InputCheck"
import Botao from "../components/Formulario/Botao/Botao"

export default function EndPipePage() {




    return (
        <div className="form">
            <InputBox labelBox={'Carcaça total'} placeholder={'Informe a metragem'} />
            <InputBox labelBox={'Extrusão parcial'} placeholder={'Informe a metragem'} />
            <InputBox labelBox={'Velocidade da Linha'} placeholder={'Informe a velocidade'} />
            <div id={'number-line'} className="number-line">
                <InputCheck labelCheck={'Linha 1'} />
                <InputCheck labelCheck={'Linha 2'} />
                <InputCheck labelCheck={'Linha 3'} />
            </div>
            <div id={'end-refer'} className="end-refer">
                <InputCheck labelCheck={'Underroller'} />
                <InputCheck labelCheck={'Ferramenta'} />
            </div>
            <Botao />
        </div>

    )
}