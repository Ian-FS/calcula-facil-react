/* eslint-disable react/prop-types */
import './InputCheck.scss'

export default function InputCheck({ labelCheck, nameCheck, valueCheck, setValueRadio, setCheck, check, setActiveStyle }) {
    return (
        <div className="form-control check">
            <input
                name={nameCheck}
                type="radio"
                value={valueCheck}
                onClick={(event) => {
                    setValueRadio(parseFloat(event.target.value))
                    setCheck(true)
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