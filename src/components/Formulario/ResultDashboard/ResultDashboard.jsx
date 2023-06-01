/* eslint-disable react/prop-types */
import './ResultDashboard.scss'
import arrowSvg from '../../../assets/arrow.svg';


export default function ResultDashboard(props) {

    console.log(props.result())

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
                    <h3>{`A taxa de compressão está atualmente em ${props.result().taxCompress.toFixed(2)}%.`}</h3>
                    <h3>{`Caso essa taxa permaneça até o final da produção, o valor total de tubo válido será de ${props.result().totalValidPipeAfterCompress.toFixed(2)} metros. `} </h3>
                </div>
            </div>
        </div>
    )
}