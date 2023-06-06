/* eslint-disable react/prop-types */
import './ResultDashboard.scss'
import arrowSvg from '../../../assets/arrow.svg';
import { Link } from "react-router-dom";


export default function ResultDashboard(props) {

    console.log(props.mensagem())

    const handleClick = () => {
        props.setShowValue(false)
        // props.setActiveStyle(false)
        // props.setCheck(false)
    }
    return (
        <div className="container">
            <div className="result-container" id="result-container">
                <div className="result-header">
                    <Link to={props.to} >
                        <img onClick={handleClick} src={arrowSvg} alt="seta-voltar" />
                    </Link>
                    <h2>Voltar</h2>
                </div>
                <div className="result-box" id="result-box">
                    <h3>{props.mensagem()}</h3>
                </div>
            </div>
        </div>
    )
}