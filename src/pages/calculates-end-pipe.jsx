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
        const newMinutes = newDate.getMinutes().toString()
        const newHours = newDate.getHours()
        const newDays = newDate.getDate().toString()
        const newMonth = newDate.getMonth()
        const newYears = newDate.getFullYear()

        let mensagem = `O tubo terminará no(a) ${diaDaSemana}, ${newDays.padStart(2, '0')} de ${meses[newMonth]} de ${newYears}, às ${newHours}:${newMinutes.padStart(2, '0')}.`

        return mensagem
    }



    const checkInput = () => {
        if (toBeProduced === "") {
            setActiveStyle(true)
            let message = "Metragem total a ser produzido necessária";
            return
        }
        if (produced === "") {
            setActiveStyle(true)
            let message = "Metragem atual produzida necessária";
            return
        }
        if (speedLine === "") {
            setActiveStyle(true)
            let message = "Metragem de referência da carcaça necessária";
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
                    </div>
                </form>
            }
            {
                showResult && <ResultDashboard mensagem={addTime()} setShowValue={setShowResult} />
            }
        </>
    )
}