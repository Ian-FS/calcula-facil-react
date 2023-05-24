import InputBox from "../components/Formulario/InputBox/InputBox"
import InputCheck from "../components/Formulario/InputCheck/InputCheck"
import Botao from "../components/Formulario/Botao/Botao"
import { useState } from "react"
import ResultDashboard from "../components/Formulario/ResultDashboard/ResultDashboard";

export default function EndPipePage() {
    const [carcassTotal, setCarcassTotal] = useState('');
    const [partialExtrusion, setPartialExtrusion] = useState('');
    const [speedLine, setSpeedLine] = useState('');

    const diasDaSemana = [
        'domingo',
        'segunda-feira',
        'terça-feira',
        'quarta-feira',
        'quinta-feira',
        'sexta-feira',
        'sábado'
    ]

    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

    const calculaTermino = () => (carcassTotal - partialExtrusion) / speedLine
    const calculaTempoTermino = () => {

        let currentDate = new Date()
        let newDate = new Date()

        const diasConvertidos = Math.trunc((calculaTermino() / 60) / 24) // dias
        const horasConvertidas = Math.trunc(calculaTermino() / 60) // horas
        const minutosConvertidos = calculaTermino() % 60 //minutos


        newDate.setDate(currentDate.getDate() + diasConvertidos)
        newDate.setHours(currentDate.getHours() + horasConvertidas)
        newDate.setMinutes(currentDate.getMinutes() + minutosConvertidos)

        let diaDaSemana = diasDaSemana[newDate.getDay()]

        console.log(`O tubo terminará na ${diaDaSemana}, ${newDate.getDate()} de ${meses[newDate.getMonth()]} de ${newDate.getFullYear()}, às ${newDate.getHours()}:${newDate.getMinutes()}.`)
        return <p>
            {`O tubo terminará na ${diaDaSemana}, ${newDate.getDate()} de ${meses[newDate.getMonth()]} de ${newDate.getFullYear()}, às ${newDate.getHours()}:${newDate.getMinutes()}.`}
        </p>
    }



    return (
        <div className="form">
            <InputBox
                handleChange={(event) => setCarcassTotal(parseFloat(event.target.value))}
                labelBox={'Carcaça total'}
                placeholder={'Informe a metragem'}
                value={carcassTotal}
            />
            <InputBox
                handleChange={(event) => setPartialExtrusion(parseFloat(event.target.value))}
                labelBox={'Extrusão parcial'}
                placeholder={'Informe a metragem'}
                value={partialExtrusion}
            />
            <InputBox
                handleChange={(event) => setSpeedLine(parseFloat(event.target.value))}
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
                handleClick={calculaTempoTermino}
            />
            {calculaTempoTermino()}
            <ResultDashboard />
        </div>
    )
}