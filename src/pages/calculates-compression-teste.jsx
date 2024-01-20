import { useForm } from "react-hook-form"
import Botao from "../components/Formulario/Botao/Botao"
import ResultDashboard from "../components/Formulario/ResultDashboard/ResultDashboard"
import './compression-teste.scss'

// eslint-disable-next-line react/prop-types
export default function CompressionPageTeste({ showResult, setShowResult }) {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = data => {

        const {
            totalCarcass,
            partialCarcass,
            partialExtrusion,
            invalidExtrusion,
            invalidCarcass,
            carcassSense,
            refValue
        } = data

        const resultInvalid = +invalidExtrusion - +invalidCarcass

        if (carcassSense) {
            const validCarcass = +partialCarcass - resultInvalid;
            const compressionRatio = 100 - 100 / (+validCarcass / (+partialExtrusion + +refValue));
            const totalValidPipeAfterCompress = (+totalCarcass - resultInvalid) - (+totalCarcass * (compressionRatio / 100));
            setShowResult(true)

        } else {
            const validCarcass = +totalCarcass - +partialCarcass - resultInvalid;
            const compressionRatio = 100 - 100 / (validCarcass / (+partialExtrusion + +refValue));
            const totalValidPipeAfterCompress = (+totalCarcass - resultInvalid) - (+totalCarcass * (compressionRatio / 100));
            setShowResult(true)
            console.log(showResult)
            let mensagem = `A taxa de compressão está atualmente em ${compressionRatio.toFixed(2)}%.
            Caso essa taxa permaneça até o final da produção, o valor total de tubo válido será de ${totalValidPipeAfterCompress.toFixed(2)} metros.`
            console.log(mensagem)
            return mensagem
        }
    }
    // console.log()

    return (
        <>
            {!showResult &&
                <form onSubmit={handleSubmit(onSubmit)} className="form">
                    <label htmlFor="totalCarcass">Carcaça a ser produzida</label>
                    <input
                        type="number"
                        min={0}
                        step='0.1'
                        placeholder="Informe a metragem"
                        {...register('totalCarcass', { required: true })}
                    />
                    <p>{errors.totalCarcass && "Informação obrigatória."}</p>

                    <label htmlFor="partialCarcass">Carcaça produzida</label>
                    <input
                        type="number"
                        min={0}
                        step='0.1'
                        placeholder="Informe a metragem"
                        {...register('partialCarcass', { required: true })}
                    />
                    <p>{errors.partialCarcass && "Informação obrigatória."}</p>

                    <label htmlFor="partialExtrusion">Extrusão produzida</label>
                    <input
                        type="number"
                        min={0}
                        step='0.1'
                        placeholder="Informe a metragem"
                        {...register('partialExtrusion', { required: true })}
                    />
                    <p>{errors.partialExtrusion && "Informação obrigatória."}</p>

                    <label htmlFor="invalidExtrusion">DNE Extrusão</label>
                    <input
                        type="number"
                        min={0}
                        step='0.1'
                        placeholder="Informe a metragem"
                        {...register('invalidExtrusion', { required: true })}
                    />
                    <p>{errors.invalidExtrusion && "Informação obrigatória."}</p>

                    <label htmlFor="invalidCarcass">DNE final da carcaça</label>
                    <input
                        type="number"
                        min={0}
                        step='0.1'
                        placeholder="Informe a metragem"
                        {...register('invalidCarcass', { required: true })}
                    />
                    <p>{errors.invalidCarcass && "Informação obrigatória."}</p>

                    <label htmlFor="refValue">Metragem de referência</label>
                    <input
                        type="number"
                        min={0}
                        step='0.1'
                        placeholder="Informe a metragem"
                        {...register('refValue', { required: true })}
                    />
                    <p>{errors.refValue && "Informação obrigatória."}</p>

                    <div className="carcasss-sense">
                        <input
                            className="input-check"
                            type="checkbox"
                            {...register('carcassSense')}
                        />
                        <label htmlFor="carcassSense">Carcaça em sentido crescente</label>
                    </div>
                    <Botao />
                </form>
            }
            {
                (showResult) &&
                <ResultDashboard
                    titulo={'Taxa de compressão'}
                    // mensagem={}
                    to={"/teste"}
                    setShowResult={setShowResult}
                />
            }
        </>

    )
}