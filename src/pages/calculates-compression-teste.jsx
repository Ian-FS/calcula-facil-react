import { useForm } from "react-hook-form"
import Botao from "../components/Formulario/Botao/Botao"
import './compression-teste.scss'

export default function CompressionPageTeste() {

    const { register, handleSubmit } = useForm()

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
            let mensagem = `A taxa de compressão está atualmente em ${compressionRatio.toFixed(2)}%.
            Caso essa taxa permaneça até o final da produção, o valor total de tubo válido será de ${totalValidPipeAfterCompress.toFixed(2)} metros.`
            console.log(mensagem)
            return mensagem

        } else {
            const validCarcass = +totalCarcass - +partialCarcass - resultInvalid;
            const compressionRatio = 100 - 100 / (validCarcass / (+partialExtrusion + +refValue));
            const totalValidPipeAfterCompress = (+totalCarcass - resultInvalid) - (+totalCarcass * (compressionRatio / 100));
            let mensagem = `A taxa de compressão está atualmente em ${compressionRatio.toFixed(2)
                }%.
            Caso essa taxa permaneça até o final da produção, o valor total de tubo válido será de ${totalValidPipeAfterCompress.toFixed(2)} metros. `
            console.log(mensagem)
            console.log(data)
            return mensagem

        }
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="form">
                <label htmlFor="totalCarcass">Carcaça a ser produzida</label>
                <input
                    type="number"
                    min={0}
                    step='0.1'
                    {...register('totalCarcass')}
                />
                <label htmlFor="partialCarcass">Carcaça produzida</label>
                <input
                    type="number"
                    min={0}
                    step='0.1'
                    {...register('partialCarcass')}
                />
                <label htmlFor="partialExtrusion">Extrusão produzida</label>
                <input
                    type="number"
                    min={0}
                    step='0.1'
                    {...register('partialExtrusion')}
                />
                <label htmlFor="invalidExtrusion">DNE Extrusão</label>
                <input
                    type="number"
                    min={0}
                    step='0.1'
                    {...register('invalidExtrusion')}
                />
                <label htmlFor="invalidCarcass">DNE final da carcaça</label>
                <input
                    type="number"
                    min={0}
                    step='0.1'
                    {...register('invalidCarcass')}
                />
                <label htmlFor="refValue">Metragem de referência</label>
                <input
                    type="number"
                    min={0}
                    step='0.1'
                    {...register('refValue')}
                />
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
        </>
    )
}