import './ResultDashboard.scss'

export default function ResultDashboard({ mensagem }) {
    return (
        <div className="container">
            <div className="result-container" id="result-container">
                <div className="result-header">
                    <img id="arrow-back" src="/src/assets/arrow.svg" alt="seta-voltar" />
                    <h2>Termino de tubo</h2>
                </div>
                <div className="result-box" id="result-box">
                    <h3>{mensagem}</h3>
                </div>
            </div>
        </div>
    )
}