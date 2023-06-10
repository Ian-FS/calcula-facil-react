/* eslint-disable react/prop-types */
import './InputBox.scss'

export default function InputBox({ labelBox, placeholder, stepValue, value, setValue, activeStyle, setActiveStyle }) {

    const handleChange = (event) => {
        setActiveStyle(false)
        setValue(event.target.value)
    }

    const styleErrorInput = { borderColor: activeStyle && value === '' ? '#e74c3c' : '' }
    const styleErrorExclamation = { visibility: activeStyle && value === '' ? 'visible' : '' }
    const styleErrorMessage = {
        visibility: activeStyle && value === '' ? 'visible' : '',
        position: activeStyle && value === '' ? 'relative' : ''
    }

    return (
        <div className="form-control">
            <label htmlFor="input">{labelBox}</label>
            <input
                className='inputComponent'
                style={styleErrorInput}
                value={value}
                type='number'
                step={stepValue}
                min="0"
                placeholder={placeholder}
                onChange={handleChange}
            />
            <i
                className="fas fa-exclamation-circle"
                style={styleErrorExclamation}
            />
            <small
                style={styleErrorMessage}
            >Informação obrigatória
            </small>
        </div>
    )
}