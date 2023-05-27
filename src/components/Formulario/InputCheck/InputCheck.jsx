/* eslint-disable react/prop-types */
import './InputCheck.scss'

export default function InputCheck({ labelCheck, nameCheck, valueCheck }) {
    return (
        <div className="form-control check">
            <input
                name={nameCheck}
                type="radio"
                value={valueCheck}
            />
            <label
                htmlFor="line"
            >
                {labelCheck}
            </label>
        </div>
    )
}