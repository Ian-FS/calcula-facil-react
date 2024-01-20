import { useState } from 'react';
import InputBox from '../components/Formulario/InputBox/InputBox';
import InputCheck from '../components/Formulario/InputCheck/InputCheck';
import ResultDashboard from '../components/Formulario/ResultDashboard/ResultDashboard';
import Botao from '../components/Formulario/Botao/Botao';
import './style.scss';

// eslint-disable-next-line react/prop-types
export default function CompressionPage({ showResult, setShowResult }) {
  const [activeStyleTaxa, setActiveStyleTaxa] = useState(false);
  const [carcassTotal, setCarcassTotal] = useState('');
  const [carcassPartial, setCarcassPartial] = useState('');
  const [extrusionPartial, setExtrusionPartial] = useState('');
  const [invalidExtrusion, setInvalidExtrusion] = useState('');
  const [invalidCarcass, setInvalidCarcass] = useState('');
  //   const [checkRefe, setCheckRefe] = useState(false);
  //   const [check, setCheckLine] = useState(false);
  const [checkSense, setCheckSense] = useState(false);
  const [valueRadio, setValueRadio] = useState(0);

  console.log(extrusionPartial + valueRadio);

  const calculaTaxa = () => {
    const resultInvalid = invalidExtrusion - invalidCarcass;
    console.log(extrusionPartial);
    console.log(extrusionPartial + valueRadio);
    if (checkSense) {
      let validCarcass = carcassPartial - resultInvalid;
      let taxCompress =
        100 - 100 / (validCarcass / (parseInt(extrusionPartial) + valueRadio));

      const totalValidPipeAfterCompress =
        carcassTotal - resultInvalid - carcassTotal * (taxCompress / 100);
      console.log(taxCompress, totalValidPipeAfterCompress);
      let mensagem = `A taxa de compressão está atualmente em ${taxCompress.toFixed(
        2,
      )}%.
            Caso essa taxa permaneça até o final da produção, o valor total de tubo válido será de ${totalValidPipeAfterCompress.toFixed(
              2,
            )} metros. `;

      return mensagem;
    } else {
      let validCarcass = carcassTotal - carcassPartial - resultInvalid;
      let taxCompress =
        100 - 100 / (validCarcass / (extrusionPartial + valueRadio));
      const totalValidPipeAfterCompress =
        carcassTotal - resultInvalid - carcassTotal * (taxCompress / 100);
      console.log(taxCompress, totalValidPipeAfterCompress);
      let mensagem = `A taxa de compressão está atualmente em ${taxCompress.toFixed(
        2,
      )}%.
            Caso essa taxa permaneça até o final da produção, o valor total de tubo válido será de ${totalValidPipeAfterCompress.toFixed(
              2,
            )} metros. `;
      return mensagem;
    }
  };
  const handleClick = (event) => {
    event.preventDefault();
    calculaTaxa();
    setShowResult(true);
    console.log(
      event.target.parentNode.parentNode.children[0].children[0].children[0]
        .children[0],
    );
  };

  return (
    <>
      {!showResult && (
        <form className="form" onSubmit={handleClick}>
          <div>
            <h2 style={{ marginBottom: '10px' }}>Informações do Pipe Chart:</h2>
            <InputBox
              labelBox={'Carcaça total (m):'}
              placeholder={'Informe a metragem'}
              stepValue="0.1"
              setValue={setCarcassTotal}
              value={carcassTotal}
              setActiveStyle={setActiveStyleTaxa}
              activeStyle={activeStyleTaxa}
            />
            <InputBox
              labelBox={'DNE final da carcaça (m):'}
              placeholder={'Informe a metragem'}
              stepValue="0.1"
              setValue={setInvalidCarcass}
              value={invalidCarcass}
              setActiveStyle={setActiveStyleTaxa}
              activeStyle={activeStyleTaxa}
            />
            <InputBox
              labelBox={'DNE inicial da extrusão (m):'}
              placeholder={'Informe a metragem'}
              stepValue="0.1"
              setValue={setInvalidExtrusion}
              value={invalidExtrusion}
              setActiveStyle={setActiveStyleTaxa}
              activeStyle={activeStyleTaxa}
            />

            <h2 style={{ margin: '20px 0 10px 0' }}>Ponto de referência:</h2>
            <div className="number-line">
              <InputCheck
                labelCheck={'Ferramenta'}
                nameCheck={'referencia'}
                valueRadio={61}
                setValueRadio={setValueRadio}
                // setCheckRefe={setCheckRefe}
                // check={check}
                // setActiveStyle={setActiveStyle}
                type={'radio'}
              />
              <InputCheck
                labelCheck={'Tape 2'}
                nameCheck={'referencia'}
                valueRadio={73}
                setValueRadio={setValueRadio}
                // setCheckRefe={setCheckRefe}
                // check={check}
                // setActiveStyle={setActiveStyle}
                type={'radio'}
              />
              <InputCheck
                labelCheck={'Tape 1'}
                nameCheck={'referencia'}
                valueRadio={79}
                setValueRadio={setValueRadio}
                // setCheckRefe={setCheckRefe}
                // check={checkRefe}
                // setActiveStyle={setActiveStyle}
                type={'radio'}
              />
            </div>

            <h2 style={{ margin: '20px 0 10px 0' }}>Sentido da carcaça:</h2>
            <div className="number-line">
              <InputCheck
                labelCheck={'Decrescente'}
                nameCheck={'sense'}
                checkSense={false}
                setCheckSense={setCheckSense}
                // setValueRadio={setValueRadioLine}
                // setCheckLine={setCheckLine}
                // check={check}
                // setActiveStyle={setActiveStyle}
                type={'radio'}
              />
              <InputCheck
                labelCheck={'Crescente'}
                nameCheck={'sense'}
                checkSense={true}
                setCheckSense={setCheckSense}
                // setValueRadio={setValueRadioLine}
                // setCheckLine={setCheckLine}
                // check={check}
                // setActiveStyle={setActiveStyle}
                type={'radio'}
              />
            </div>
            <h2 style={{ margin: '20px 0 10px 0' }}>Outras informações:</h2>
            <InputBox
              labelBox={'Metragem na carcaça (m):'}
              placeholder={'Informe a metragem'}
              stepValue="0.1"
              setValue={setCarcassPartial}
              value={carcassPartial}
              setActiveStyle={setActiveStyleTaxa}
              activeStyle={activeStyleTaxa}
            />
            <InputBox
              labelBox={'Tubo produzido no contador (m):'}
              placeholder={'Informe a metragem'}
              stepValue="0.1"
              setValue={setExtrusionPartial}
              value={extrusionPartial}
              setActiveStyle={setActiveStyleTaxa}
              activeStyle={activeStyleTaxa}
            />
            {!checkSense && activeStyleTaxa && (
              <small className="small-message"> Escolha uma Linha</small>
            )}
            <Botao />
          </div>
        </form>
      )}
      {showResult && (
        <ResultDashboard
          titulo={'Taxa de compressão'}
          mensagem={calculaTaxa}
          to={'/compressao'}
          setShowValue={setShowResult}
          setActiveStyle={setActiveStyleTaxa}
          setCheck={setCheckSense}
        />
      )}
    </>
  );
}
