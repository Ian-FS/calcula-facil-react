/* eslint-disable react/prop-types */
import './InputCheck.scss'

export default function InputCheck({ labelCheck, nameCheck, valueCheck, setCheck }) {
    return (
        <div className="form-control check">
            <input
                name={nameCheck}
                type="radio"
                value={valueCheck}
                onClick={(event) => {
                    setCheck(parseFloat(event.target.value))
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