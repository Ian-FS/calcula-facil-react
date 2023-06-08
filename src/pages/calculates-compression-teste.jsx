import { useForm } from "react-hook-form"
import Botao from "../components/Formulario/Botao/Botao"
import './style.scss'

export default function CompressionPageTeste() {

    const { register, handleSubmit } = useForm()

    const onSubmit = data => {

        const { totalCarcass, partialCarcass, partialExtrusion, invalid } = data

        let validCarcass = +partialCarcass - +invalid;
        let compressionRatio = 100 - 100 / (+validCarcass / +partialExtrusion);

        const totalValidPipeAfterCompress = (+totalCarcass - +invalid) - (+totalCarcass * (compressionRatio / 100));

        let mensagem = `A taxa de compressão está atualmente em ${compressionRatio.toFixed(2)}%.
            Caso essa taxa permaneça até o final da produção, o valor total de tubo válido será de ${totalValidPipeAfterCompress.toFixed(2)} metros. `
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
                <label htmlFor="invalid">Inválido inicial</label>
                <input
                    type="number"
                    min={0}
                    step='0.1'
                    {...register('invalid')}
                />
                <input
                    type="checkbox"
                    {...register('carcassSense')}
                />
                <label htmlFor="carcassSense">Carcaça em sentido crescente</label>

                <Botao />
            </form>
        </>
    )
}