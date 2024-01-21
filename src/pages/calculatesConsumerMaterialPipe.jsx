/* eslint-disable react/prop-types */
import { useState } from 'react';
import InputBox from '../components/Formulario/InputBox/InputBox';
import Botao from '../components/Formulario/Botao/Botao';
import ResultDashboard from '../components/Formulario/ResultDashboard/ResultDashboard';

export default function CalculatesConsumerMaterialPipe({
  showResult,
  setShowResult,
}) {
  const [espessuraNominal, setEspessuraNominal] = useState('');
  const [espessuraMedia, setEspessuraMedia] = useState('');
  const [consumoNominalPo, setConsumoNominalPo] = useState('');
  const [consumoNominalGranulado, setConsumoNominalGranulado] = useState('');
  const [consumoNominalPeroxido, setConsumoNominalPeroxido] = useState('');
  const [comprimentoTubo, setComprimentoTupo] = useState('');
  const [checkSense, setCheckSense] = useState(false);
  const [activeStyleTaxa, setActiveStyleTaxa] = useState(false);
  const [purgaCaixa, setPurgaCaixa] = useState('');

  console.log(typeof espessuraNominal);

  // function converteInputEmFloat() {
  //   setEspessuraNominal((prev) => parseFloat(prev));
  //   setEspessuraMedia((prev) => parseFloat(prev));
  //   setConsumoNominalPo((prev) => parseFloat(prev));
  //   setConsumoNominalGranulado((prev) => parseFloat(prev));
  //   setConsumoNominalPeroxido((prev) => parseFloat(prev));
  //   setComprimentoTupo((prev) => parseFloat(prev));
  //   setPurgaCaixa((prev) => parseFloat(prev));
  // }
  function calculaPurga() {
    const consumoMedioPo =
      (consumoNominalPo * espessuraMedia) / espessuraNominal;
    console.log(consumoMedioPo);
    const consumoMedioGranulado =
      (consumoNominalGranulado * espessuraMedia) / espessuraNominal;
    const consumoMedioPeroxido =
      (consumoNominalPeroxido * espessuraMedia) / espessuraNominal;
    let recipiente1 = (consumoMedioPo * comprimentoTubo) / 5;
    let recipiente2 = consumoMedioPo * comprimentoTubo - recipiente1;
    let recipiente3 = consumoMedioGranulado * comprimentoTubo;
    let peroxido = consumoMedioPeroxido * comprimentoTubo;
    let purgaCaixaPo = purgaCaixa * 0.9;
    let purgaCaixaGranulado = purgaCaixa * 0.1;
    let purgaCaixaPeroxido = purgaCaixa * 0.005;

    recipiente1 += purgaCaixaPo / 5;
    recipiente2 += purgaCaixa - purgaCaixa / 5;
    recipiente3 += purgaCaixaGranulado;
    peroxido += purgaCaixaPeroxido;

    const mensagem = `R1: ${recipiente1.toFixed(1)}
                      R2: ${recipiente2.toFixed(1)}
                      R3: ${recipiente3.toFixed(1)}
                      Peróxido: ${peroxido.toFixed(1)}                   `;
    console.log(mensagem);

    return mensagem;
  }

  const handleClick = (event) => {
    event.preventDefault();
    // converteInputEmFloat();
    calculaPurga();
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
            <h2>Informações na FS:</h2>
            <InputBox
              labelBox={'Espessura nominal:'}
              placeholder={'Informe a espessura'}
              stepValue="0.1"
              setValue={setEspessuraNominal}
              value={espessuraNominal}
              setActiveStyle={setActiveStyleTaxa}
              activeStyle={activeStyleTaxa}
            />
            <InputBox
              labelBox={'Consumo nominal de pó (kg/m):'}
              placeholder={'Informe o consumo'}
              stepValue="0.001"
              setValue={setConsumoNominalPo}
              value={consumoNominalPo}
              setActiveStyle={setActiveStyleTaxa}
              activeStyle={activeStyleTaxa}
            />
            <InputBox
              labelBox={'Consumo nominal de granulado(kg/m):'}
              placeholder={'Informe o consumo'}
              stepValue="0.001"
              setValue={setConsumoNominalGranulado}
              value={consumoNominalGranulado}
              setActiveStyle={setActiveStyleTaxa}
              activeStyle={activeStyleTaxa}
            />
            <InputBox
              labelBox={'Consumo nominal de peróxido (kg/m):'}
              placeholder={'Informe o consumo'}
              stepValue="0.001"
              setValue={setConsumoNominalPeroxido}
              value={consumoNominalPeroxido}
              setActiveStyle={setActiveStyleTaxa}
              activeStyle={activeStyleTaxa}
            />
            <h2>Outras informações:</h2>
            <InputBox
              labelBox={'Espessura média (medição):'}
              placeholder={'Informe a espessura'}
              stepValue="0.1"
              setValue={setEspessuraMedia}
              value={espessuraMedia}
              setActiveStyle={setActiveStyleTaxa}
              activeStyle={activeStyleTaxa}
            />
            <InputBox
              labelBox={'Comprimento do tubo (m):'}
              placeholder={'Informe a metragem'}
              stepValue="0.1"
              setValue={setComprimentoTupo}
              value={comprimentoTubo}
              activeStyle={activeStyleTaxa}
              setActiveStyle={setActiveStyleTaxa}
            />
            <InputBox
              labelBox={'Caixa de purga (kg):'}
              placeholder={'Informe o peso'}
              stepValue="0.1"
              setValue={setPurgaCaixa}
              value={purgaCaixa}
              activeStyle={activeStyleTaxa}
              setActiveStyle={setActiveStyleTaxa}
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
          mensagem={calculaPurga}
          to={'/compressao'}
          setShowValue={setShowResult}
          setActiveStyle={setActiveStyleTaxa}
          setCheck={setCheckSense}
        />
      )}
    </>
  );
}
