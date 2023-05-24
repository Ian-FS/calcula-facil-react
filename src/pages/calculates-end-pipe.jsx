import InputBox from "../components/Formulario/InputBox/InputBox"
import InputCheck from "../components/Formulario/InputCheck/InputCheck"
import Botao from "../components/Formulario/Botao/Botao"
import { useState } from "react"
import ResultDashboard from "../components/Formulario/ResultDashboard/ResultDashboard";

export default function EndPipePage() {
    const [toBeProduced, setToBeProduced] = useState('');
    const [produced, setProduced] = useState('');
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

    const meses = ['Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
    ]

    const endTime = () => (toBeProduced - produced) / speedLine

    const convertedTimes = {
        days: Math.trunc((endTime() / 60) / 24), // dias
        hours: Math.trunc(endTime() / 60), // horas
        minutes: (endTime() % 60).toFixed(0) //minutos
    }

    const addTime = () => {
        let currentDate = new Date()
        let newDate = new Date()

        newDate.setDate(currentDate.getDate() + convertedTimes.days)
        newDate.setHours(currentDate.getHours() + convertedTimes.hours)
        newDate.setMinutes(currentDate.getMinutes() + (convertedTimes.minutes))

        const diaDaSemana = diasDaSemana[newDate.getDay()]
        const newMinutes = newDate.getMinutes().toString()
        const newHours = newDate.getHours()
        const newDays = newDate.getDate().toString()
        const newMonth = newDate.getMonth()
        const newYears = newDate.getFullYear()

        let mensagem = `O tubo terminará no(a) ${diaDaSemana}, ${newDays.padStart(2, '0')} de ${meses[newMonth]} de ${newYears}, às ${newHours}:${newMinutes.padStart(2, '0')}.`

        return mensagem
    }

    const isClicked = () => false

    const handleClick = (event) => {
        event.preventDefault();
        addTime()
    }

    return (
        <form className="form" onSubmit={handleClick}>
            <InputBox
                labelBox={'Tubo a ser produzido'}
                placeholder={'Informe a metragem'}
                stepValue="0.1"
                setValue={setToBeProduced}
                value={toBeProduced}
            />
            <InputBox
                labelBox={'Tubo produzido'}
                placeholder={'Informe a metragem'}
                stepValue="0.1"
                setValue={setProduced}
                value={produced}
            />
            <InputBox
                labelBox={'Velocidade da Linha'}
                placeholder={'Informe a velocidade'}
                stepValue="0.01"
                setValue={setSpeedLine}
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
            <Botao />
            {
                isClicked && <ResultDashboard mensagem={addTime()} />
            }
        </form>
    )
}