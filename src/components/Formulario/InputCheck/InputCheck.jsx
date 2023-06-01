/* eslint-disable react/prop-types */
import './InputCheck.scss'

export default function InputCheck({ labelCheck, nameCheck, valueRadio, setValueRadio, setCheckSense, checkSense, setActiveStyle, type }) {


    return (
        <div className="form-control check">
            <input
                name={nameCheck}
                type={type}
                value={valueRadio}
                onClick={(event) => {
                    valueRadio > 0 && setValueRadio(parseFloat(event.target.value))
                    setCheckSense((prev) => !prev)
                    setActiveStyle(false)
                }}
            />
            <label
                htmlFor="line"
            >
                {labelCheck}
            </label>
        </div>
    )
}