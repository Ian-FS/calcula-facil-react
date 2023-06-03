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
    const [check, setCheckLine] = useState(false);
    const [activeStyle, setActiveStyle] = useState(false)
    const [valueRadioLine, setValueRadioLine] = useState(0)

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

    const endTime = () => ((toBeProduced - produced - valueRadioLine) / speedLine)

    // console.log(`minutos calculados: ${endTime()}`)

    const convertedTimes = {
        days: Math.trunc((endTime() / 60) / 24), // dias
        hours: Math.trunc(((endTime() / 1440) - Math.trunc(endTime() / 1440)) * 60) - (24 * Math.trunc(endTime() / 1440)), // horas
        minutes: parseFloat((endTime() % 60).toFixed(0)) //minutos
    }
    console.log(`${endTime()}: ${convertedTimes.days} dias, ${convertedTimes.hours} horas e ${convertedTimes.minutes} minutos.`)
    console.log(3000 % 7)
    const addTime = () => {

        let currentDate = new Date()
        console.log(`data atual:${currentDate}`)
        let newDate = new Date()

        newDate.setDate(currentDate.getDate() + convertedTimes.days)
        // console.log(`apos adicionar os dias: ${newDate.getDate()}`)
        newDate.setHours(currentDate.getHours() + convertedTimes.hours)
        // console.log(`apos adicionar as horas: ${newDate.getHours()}`)
        newDate.setMinutes(currentDate.getMinutes() + convertedTimes.minutes)
        // console.log(`apos adicionar os minutos: ${newDate.getMinutes()}`)



        const diaDaSemana = diasDaSemana[newDate.getDay()]
        const newMinutes = newDate.getMinutes()
        const newHours = newDate.getHours()
        const newDays = newDate.getDate()
        const newMonth = newDate.getMonth()
        const newYears = newDate.getFullYear()

        console.log(newDate.getUTCDate())
        if (endTime() > 0 && endTime() < 999999) {
            let mensagem = `Término do tubo na boca da ferramenta previsto para ${diaDaSemana}, ${(newDays.toString()).padStart(2, '0')} de ${meses[newMonth]} de ${newYears}, às ${(newHours.toString()).padStart(2, '0')}:${(newMinutes.toString()).padStart(2, '0')}.`

            return mensagem
        } else {
            let mensagem = 'Revise os valores atribuidos!'
            return mensagem
        }
    }

    const checkInput = () => {
        if (toBeProduced === "") {
            // console.log(toBeProduced)
            setActiveStyle(true)
            return false
        }
        if (produced === "") {
            setActiveStyle(true)
            return false
        }
        if (speedLine === "") {
            setActiveStyle(true)
            return false
        }
        if (!check) {
            console.log(!check)
            setActiveStyle(true)
            return false
        } else {
            addTime()
            return true
        }
    }


    const handleClick = (event) => {
        event.preventDefault();
        setShowResult(checkInput)
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
                        <div className="number-line">
                            <InputCheck
                                labelCheck={'Linha 1'}
                                nameCheck={'line'}
                                valueCheck={58}
                                setValueRadio={setValueRadioLine}
                                setCheckLine={setCheckLine}
                                check={check}
                                setActiveStyle={setActiveStyle}
                                type={'radio'}
                            />
                            <InputCheck
                                labelCheck={'Linha 2'}
                                nameCheck={'line'}
                                valueCheck={56}
                                setValueRadio={setValueRadioLine}
                                setCheckLine={setCheckLine}
                                check={check}
                                setActiveStyle={setActiveStyle}
                                type={'radio'}
                            />
                            <InputCheck
                                labelCheck={'Linha 3'}
                                nameCheck={'line'}
                                valueCheck={61}
                                setValueRadio={setValueRadioLine}
                                setCheckLine={setCheckLine}
                                check={check}
                                setActiveStyle={setActiveStyle}
                                type={'radio'}
                            />
                        </div>
                        {(!check && activeStyle) && <small className="small-message"> Escolha uma Linha</small>}
                        <Botao />
                    </div>
                </form>
            }
            {
                (showResult) &&
                <ResultDashboard
                    mensagem={addTime}
                    setShowValue={setShowResult}
                    setActiveStyle={setActiveStyle}
                    setCheckLine={setCheckLine}
                />
            }
        </>
    )
}