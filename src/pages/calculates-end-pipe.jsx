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
    const [valueRadioLine, setValueRadioLine] = useState(0)
    // const [valueRadioRef, setValueRadioRef] = useState(0)

    console.log(typeof valueRadioLine)

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

    const endTime = () => (toBeProduced - produced - valueRadioLine / speedLine)

    console.log(endTime())

    const convertedTimes = {
        days: Math.trunc((endTime() / 60) / 24), // dias
        hours: Math.trunc(endTime() / 60), // horas
        minutes: (endTime() % 60).toFixed(0) //minutos
    }
    console.log(convertedTimes.days)
    console.log(convertedTimes.hours)
    console.log(convertedTimes.minutes)

    const addTime = () => {
        let currentDate = new Date()
        let newDate = new Date()

        console.log(currentDate)
        newDate.setDate(currentDate.getDate() + convertedTimes.days)
        console.log(newDate)
        newDate.setHours(currentDate.getHours() + convertedTimes.hours)
        console.log(newDate)
        newDate.setMinutes(currentDate.getMinutes() + (convertedTimes.minutes))
        console.log(newDate)



        const diaDaSemana = diasDaSemana[newDate.getDay()]
        const newMinutes = newDate.getMinutes()
        const newHours = newDate.getHours()
        const newDays = newDate.getDate()
        const newMonth = newDate.getMonth()
        const newYears = newDate.getFullYear()

        console.log(newDays, newMonth, newYears, ' ', newHours, newMinutes)

        let mensagem = `O tubo terminará no(a) ${diaDaSemana}, ${(newDays.toString()).padStart(2, '0')} de ${meses[newMonth]} de ${newYears}, às ${(newHours.toString()).padStart(2, '0')}:${(newMinutes.toString()).padStart(2, '0')}.`

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

                        {/* <div id={'end-refer'} className="end-refer">
                            <InputCheck
                                labelCheck={'Underroller'}
                                nameCheck={'refer'}
                                valueCheck={104}
                            />
                            <InputCheck
                                labelCheck={'Ferramenta'}
                                nameCheck={'refer'}
                            />
                        </div> */}

                        <div id={'number-line'} className="number-line">
                            <InputCheck
                                labelCheck={'Linha 1'}
                                nameCheck={'line'}
                                valueCheck={58}
                                setCheck={setValueRadioLine}
                            />
                            <InputCheck
                                labelCheck={'Linha 2'}
                                nameCheck={'line'}
                                valueCheck={56}
                                setCheck={setValueRadioLine}
                            />
                            <InputCheck
                                labelCheck={'Linha 3'}
                                nameCheck={'line'}
                                valueCheck={61}
                                setCheck={setValueRadioLine}
                            />
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