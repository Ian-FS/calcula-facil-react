import { useState } from "react";
import InputBox from "../components/Formulario/InputBox/InputBox";
import InputCheck from "../components/Formulario/InputCheck/InputCheck";
import ResultDashboard from "../components/Formulario/ResultDashboard/ResultDashboard"
import Botao from "../components/Formulario/Botao/Botao"
import './style.scss'

export default function CompressionPage() {

    const [activeStyleTaxa, setActiveStyleTaxa] = useState(false)
    const [showResultTaxa, setShowResultTaxa] = useState(false)
    const [carcassTotal, setCarcassTotal] = useState('')
    const [carcassPartial, setCarcassPartial] = useState('')
    const [extrusionPartial, setExtrusionPartial] = useState('')
    const [invalid, setInvalid] = useState('')
    const [checkTaxa, setCheckTaxa] = useState(false)


    const calculaTaxa = () => { }
    const handleClick = () => { }

    return (
        <>
            {!showResultTaxa &&
                <form className="form" onSubmit={handleClick}>
                    <div>
                        <InputBox
                            labelBox={'Carcaça total'}
                            placeholder={'Informe a metragem'}
                            stepValue="0.1"
                            setValue={setCarcassTotal}
                            value={carcassTotal}
                            setActiveStyle={setActiveStyleTaxa}
                            activeStyle={activeStyleTaxa}
                        />
                        <InputBox
                            labelBox={'Carcaça parcial'}
                            placeholder={'Informe a metragem'}
                            stepValue="0.1"
                            setValue={setCarcassPartial}
                            value={carcassPartial}
                            setActiveStyle={setActiveStyleTaxa}
                            activeStyle={activeStyleTaxa}
                        />
                        <InputBox
                            labelBox={'Extrusão parcial'}
                            placeholder={'Informe a metragem'}
                            stepValue="0.1"
                            setValue={setExtrusionPartial}
                            value={extrusionPartial}
                            setActiveStyle={setActiveStyleTaxa}
                            activeStyle={activeStyleTaxa}
                        />
                        <InputBox
                            labelBox={'Invalido inicial'}
                            placeholder={'Informe a metragem'}
                            stepValue="0.1"
                            setValue={setInvalid}
                            value={invalid}
                            setActiveStyle={setActiveStyleTaxa}
                            activeStyle={activeStyleTaxa}
                        />
                        <div className="number-line">
                            <InputCheck
                                labelCheck={'Carcaça em sentido crescente'}
                                nameCheck={'line'}
                                setCheck={setCheckTaxa}
                                check={checkTaxa}
                                setActiveStyle={setActiveStyleTaxa}
                                type={'radio'}
                            />

                        </div>
                        {(!checkTaxa && activeStyleTaxa) && <small className="small-message"> Escolha uma Linha</small>}
                        <Botao />
                    </div>
                </form>
            }
            {
                (showResultTaxa) &&
                <ResultDashboard
                    mensagem={calculaTaxa}
                    setShowValue={setShowResultTaxa}
                    setActiveStyle={setActiveStyleTaxa}
                    setCheck={setCheckTaxa}
                />
            }
        </>
    )
}