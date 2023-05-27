/* eslint-disable react/prop-types */
import InputBox from "../components/Formulario/InputBox/InputBox"
import InputCheck from "../components/Formulario/InputCheck/InputCheck"
import Botao from "../components/Formulario/Botao/Botao"
import { useState } from "react"
import ResultDashboard from "../components/Formulario/ResultDashboard/ResultDashboard";

export default function EndPipePage({ showResult, setShowResult }) {
    const [toBeProduced, setToBeProduced] = useState('');
    const [produced, setProduced] = useState('');
    const [speedLine, setSpeedLine] = useState('');
    const [activeStyle, setActiveStyle] = useState(false)

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
        const newMinutes = newDate.getMinutes()
        const newHours = newDate.getHours()
        const newDays = newDate.getDate()
        const newMonth = newDate.getMonth()
        const newYears = newDate.getFullYear()

        let mensagem = `O tubo terminará no(a) ${diaDaSemana}, ${(newDays.toString()).padStart(2, '0')} de ${meses[newMonth]} de ${newYears}, às ${newHours}:${(newMinutes.toString()).padStart(2, '0')}.`

        return mensagem
    }

    const checkInput = () => {
        if (toBeProduced === "") {
            setActiveStyle(true)
            return
        }
        if (produced === "") {
            setActiveStyle(true)
            return
        }
        if (speedLine === "") {
            setActiveStyle(true)
            return
        } else {
            addTime()
            setShowResult(true)
        }
    }


    const handleClick = (event) => {
        event.preventDefault();
        checkInput()

    }

    return (
        <>
            {!showResult &&
                <form className="form" onSubmit={handleClick}>
                    <div>
                        <InputBox
                            labelBox={'Tubo a ser produzido'}
                            placeholder={'Informe a metragem'}
                            stepValue="0.1"
                            setValue={setToBeProduced}
                            value={toBeProduced}
                            setActiveStyle={setActiveStyle}
                            activeStyle={activeStyle}
                        />
                        <InputBox
                            labelBox={'Tubo produzido'}
                            placeholder={'Informe a metragem'}
                            stepValue="0.1"
                            setValue={setProduced}
                            value={produced}
                            setActiveStyle={setActiveStyle}
                            activeStyle={activeStyle}
                        />
                        <InputBox
                            labelBox={'Velocidade da Linha'}
                            placeholder={'Informe a velocidade'}
                            stepValue="0.01"
                            setValue={setSpeedLine}
                            value={speedLine}
                            setActiveStyle={setActiveStyle}
                            activeStyle={activeStyle}
                        />
                        <div id={'number-line'} className="number-line">
                            <InputCheck
                                labelCheck={'Linha 1'}
                                nameCheck={'line'}
                                checked={true}
                                valueCheck={58}
                            />
                            <InputCheck
                                labelCheck={'Linha 2'}
                                nameCheck={'line'}
                                checked={false}
                                valueCheck={56}
                            />
                            <InputCheck
                                labelCheck={'Linha 3'}
                                nameCheck={'line'}
                                valueCheck={61}
                            />
                        </div>
                        <div id={'end-refer'} className="end-refer">
                            <InputCheck
                                labelCheck={'Underroller'}
                                nameCheck={'refer'}
                            />
                            <InputCheck
                                labelCheck={'Ferramenta'}
                                nameCheck={'refer'} />
                        </div>
                        <Botao />
                    </div>
                </form>
            }
            {
                showResult && <ResultDashboard mensagem={addTime()} setShowValue={setShowResult} />
            }
        </>
    )
}