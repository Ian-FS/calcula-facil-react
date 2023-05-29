/* eslint-disable react/prop-types */
import './ResultDashboard.scss'
import arrowSvg from '../../../assets/arrow.svg';


export default function ResultDashboard(props) {

    const handleClick = () => {
        props.setShowValue(false)
        props.setActiveStyle(false)
        props.setCheck(false)
    }
    return (
        <div className="container">
            <div className="result-container" id="result-container">
                <div className="result-header">
                    <img onClick={handleClick} src={arrowSvg} alt="seta-voltar" />
                    <h2>Término do tubo</h2>
                </div>
                <div className="result-box" id="result-box">
                    <h3>{props.mensagem}</h3>
                </div>
            </div>
        </div>
    )
}