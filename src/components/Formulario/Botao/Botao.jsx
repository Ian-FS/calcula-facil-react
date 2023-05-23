import './Botao.scss'
export default function Botao({ handleClick }) {
    return (
        <button
            id="button"
            type="submit"
            onClick={handleClick}
        >
            Calcular
        </button>
    )
}