/* eslint-disable react/prop-types */
import './ResultDashboard.scss'

export default function ResultDashboard(props) {
    return (
        <div className="container">
            <div className="result-container" id="result-container">
                <div className="result-header">
                    <img onClick={() => props.setShowValue(false)} src="/src/assets/arrow.svg" alt="seta-voltar" />
                    <h2>Término do tubo</h2>
                </div>
                <div className="result-box" id="result-box">
                    <h3>{props.mensagem}</h3>
                </div>
            </div>
        </div>
    )
}