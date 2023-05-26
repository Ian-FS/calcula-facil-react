/* eslint-disable react/prop-types */
import './InputBox.scss'

export default function InputBox({ labelBox, placeholder, stepValue, value, setValue, activeStyle }) {

    const handleChange = (event) => setValue(event.target.value)

    const styleError = activeStyle && { visibility: 'visible', position: 'relative' }

    return (
        <div id="input-box" className="form-control">
            <label htmlFor="input">{labelBox}</label>
            <input
                style={{ styleError }}
                value={value}
                type='number'
                step={stepValue}
                min="0"
                placeholder={placeholder}
                onChange={handleChange}
            />
            <i className="fas fa-exclamation-circle"></i>
            <i className="fas fa-check-circle"></i>
            <small>Informação obrigatória</small>
        </div>
    )
}