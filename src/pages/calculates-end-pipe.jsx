import InputBox from "../components/Formulario/InputBox/InputBox"
import InputCheck from "../components/Formulario/InputCheck/InputCheck"
import Botao from "../components/Formulario/Botao/Botao"
import { useState } from "react"

export default function EndPipePage() {
    const [carcassTotal, setCarcassTotal] = useState();
    const [partialExtrusion, setPartialExtrusion] = useState();
    const [speedLine, setSpeedLine] = useState();

    const diasDaSemana = [
        'domingo',
        'segunda-feira',
        'terça-feira',
        'quarta-feira',
        'quinta-feira',
        'sexta-feira',
        'sábado'
    ]

    const CalculaTermino = () => {
        const data = new Date()
        const diaDaSemana = diasDaSemana[data.getDay()]
        const dia = data.getDate()
        const mes = data.getMonth() + 1
        const ano = data.getFullYear()
        const hora = data.getHours()
        const minutos = data.getMinutes()

        const diaConvertido = Math.trunc((1970 / 60) / 24) // dias
        const horaConvertida = Math.trunc(1970 / 60) // horas
        const minutoConvertida = 1970 % 60 //minutos

        console.log(diaConvertido, horaConvertida, minutoConvertida)
    }

    return (
        <div className="form">
            <InputBox
                handleChange={(event) => setCarcassTotal(event.target.value)}
                labelBox={'Carcaça total'}
                placeholder={'Informe a metragem'}
                value={carcassTotal}
            />
            <InputBox
                handleChange={(event) => setPartialExtrusion(event.target.value)}
                labelBox={'Extrusão parcial'}
                placeholder={'Informe a metragem'}
                value={partialExtrusion}
            />
            <InputBox
                handleChange={(event) => setSpeedLine(event.target.value)}
                labelBox={'Velocidade da Linha'}
                placeholder={'Informe a velocidade'}
                value={speedLine}
            />
            <div id={'number-line'} className="number-line">
                <InputCheck
                    labelCheck={'Linha 1'}
                />
                <InputCheck
                    labelCheck={'Linha 2'}
                />
                <InputCheck
                    labelCheck={'Linha 3'}
                />
            </div>
            <div id={'end-refer'} className="end-refer">
                <InputCheck labelCheck={'Underroller'} />
                <InputCheck labelCheck={'Ferramenta'} />
            </div>
            <Botao
                handleClick={CalculaTermino}
            />
        </div>

    )
}