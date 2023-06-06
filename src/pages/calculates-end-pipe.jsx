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
    console.log(endTime())

    const addTime = () => {

        let newDate = new Date()
        newDate.setMinutes(newDate.getMinutes() + endTime())

        const diaDaSemana = diasDaSemana[newDate.getDay()]
        const newMinutes = newDate.getMinutes()
        const newHours = newDate.getHours()
        const newDays = newDate.getDate()
        const newMonth = newDate.getMonth()
        const newYears = newDate.getFullYear()

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
        console.log(event)
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
                                valueRadio={58}
                                setValueRadio={setValueRadioLine}
                                setCheckLine={setCheckLine}
                                check={check}
                                setActiveStyle={setActiveStyle}
                                type={'radio'}
                            />
                            <InputCheck
                                labelCheck={'Linha 2'}
                                nameCheck={'line'}
                                valueRadio={56}
                                setValueRadio={setValueRadioLine}
                                setCheckLine={setCheckLine}
                                check={check}
                                setActiveStyle={setActiveStyle}
                                type={'radio'}
                            />
                            <InputCheck
                                labelCheck={'Linha 3'}
                                nameCheck={'line'}
                                valueRadio={61}
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
                    titulo={'Término do tubo'}
                    mensagem={addTime}
                    to={"/"}
                    setShowValue={setShowResult}
                    setActiveStyle={setActiveStyle}
                    setCheckLine={setCheckLine}
                />
            }
        </>
    )
}