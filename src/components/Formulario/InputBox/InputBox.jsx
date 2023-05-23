/* eslint-disable react/prop-types */
import './InputBox.scss'

export default function InputBox({ labelBox, placeholder, value, handleChange }) {
    return (
        <div id="input-box" className="form-control">
            <label htmlFor="input">{labelBox}</label>
            <input
                value={value}
                type="number"
                step="0.1"
                min="0"
                id="input"
                placeholder={placeholder}
                onChange={handleChange}
            />
            <i className="fas fa-exclamation-circle"></i>
            <i className="fas fa-check-circle"></i>
            <small>Informação obrigatória</small>
        </div>
    )
}