/* eslint-disable react/prop-types */
import './InputCheck.scss'

export default function InputCheck({ labelCheck }) {
    return (
        <div className="form-control check">
            <input id="check-box" type="checkbox" />
            <label htmlFor="check-box">{labelCheck}</label>
        </div>
    )
}