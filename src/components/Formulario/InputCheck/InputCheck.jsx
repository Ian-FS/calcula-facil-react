/* eslint-disable react/prop-types */
import './InputCheck.scss';

export default function InputCheck({
  labelCheck,
  nameCheck,
  valueRadio,
  setValueRadio,
  setCheckLine,
  setCheckSense,
  checkSense,
  setCheckRefe,
  //   setActiveStyle,
  type,
}) {
  return (
    <div className="form-control check">
      <input
        name={nameCheck}
        type={type}
        value={valueRadio}
        onClick={(event) => {
          valueRadio > 0 && setValueRadio(parseFloat(event.target.value));
          nameCheck === 'line' && setCheckLine(true);
          nameCheck === 'referencia' && setCheckRefe(true);
          nameCheck === 'sense' && setCheckSense(checkSense);
          //   setActiveStyle(true);
        }}
      />
      <label htmlFor="line">{labelCheck}</label>
    </div>
  );
}
