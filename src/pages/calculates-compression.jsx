import { useState } from "react";
import InputBox from "../components/Formulario/InputBox/InputBox";
import InputCheck from "../components/Formulario/InputCheck/InputCheck";
import ResultDashboard from "../components/Formulario/ResultDashboard/ResultDashboard"
import Botao from "../components/Formulario/Botao/Botao"
import './style.scss'

// eslint-disable-next-line react/prop-types
export default function CompressionPage({ showResult, setShowResult }) {

    const [activeStyleTaxa, setActiveStyleTaxa] = useState(false)
    const [carcassTotal, setCarcassTotal] = useState('')
    const [carcassPartial, setCarcassPartial] = useState('')
    const [extrusionPartial, setExtrusionPartial] = useState('')
    const [invalid, setInvalid] = useState('')
    const [checkSense, setCheckSense] = useState(false)


    const calculaTaxa = () => {
        if (checkSense) {
            let validCarcass = carcassPartial - invalid;
            let taxCompress = 100 - 100 / (validCarcass / extrusionPartial);

            const totalValidPipeAfterCompress = (carcassTotal - invalid) - (carcassTotal * (taxCompress / 100));
            console.log(taxCompress, totalValidPipeAfterCompress)
            let mensagem = `A taxa de compressão está atualmente em ${taxCompress.toFixed(2)}%.
            Caso essa taxa permaneça até o final da produção, o valor total de tubo válido será de ${totalValidPipeAfterCompress.toFixed(2)} metros. `

            return mensagem

        } else {
            let validCarcass = carcassTotal - carcassPartial - invalid;
            let taxCompress = 100 - 100 / (validCarcass / extrusionPartial);
            const totalValidPipeAfterCompress = (carcassTotal - invalid) - (carcassTotal * (taxCompress / 100));
            console.log(taxCompress, totalValidPipeAfterCompress)
            let mensagem = `A taxa de compressão está atualmente em ${taxCompress.toFixed(2)}%.
            Caso essa taxa permaneça até o final da produção, o valor total de tubo válido será de ${totalValidPipeAfterCompress.toFixed(2)} metros. `
            return mensagem
        }
    }
    const handleClick = (event) => {
        event.preventDefault()
        calculaTaxa()
        setShowResult(true)
        console.log(event.target.parentNode.parentNode.children[0].children[0].children[0].children[0])

    }

    return (
        <>
            {!showResult &&
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
                                nameCheck={'sense'}
                                setCheckSense={setCheckSense}
                                checkSense={checkSense}
                                setActiveStyle={setActiveStyleTaxa}
                                type={'checkbox'}
                            />

                        </div>
                        {(!checkSense && activeStyleTaxa) && <small className="small-message"> Escolha uma Linha</small>}
                        <Botao />
                    </div>
                </form>
            }
            {
                (showResult) &&
                <ResultDashboard
                    titulo={'Taxa de compressão'}
                    mensagem={calculaTaxa}
                    to={"/compressao"}
                    setShowValue={setShowResult}
                    setActiveStyle={setActiveStyleTaxa}
                    setCheck={setCheckSense}
                />
            }
        </>
    )
}