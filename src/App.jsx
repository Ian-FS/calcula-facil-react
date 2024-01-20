import './App.scss';
import { Route, Routes } from 'react-router-dom';
import CompressionPage from './pages/calculates-compression';
import EndPipePage from './pages/calculates-end-pipe';
import Header from './components/Header/Header';
import { useState } from 'react';
import CompressionPageTeste from './pages/calculates-compression-teste';
import CalculatesConsumerMaterialPipe from './pages/calculatesConsumerMaterialPipe';

function App() {
  const [showResult, setShowResult] = useState(false);
  return (
    <div className="container">
      <Header setShowResult={setShowResult}></Header>
      <div className="container-pages">
        <Routes>
          <Route
            path="/"
            element={
              <EndPipePage
                showResult={showResult}
                setShowResult={setShowResult}
              />
            }
          />
          <Route
            path="/compressao"
            element={
              <CompressionPage
                showResult={showResult}
                setShowResult={setShowResult}
              />
            }
          />
          <Route
            path="/consumoTubo"
            element={
              <CalculatesConsumerMaterialPipe
                showResult={showResult}
                setShowResult={setShowResult}
              />
            }
          />
          <Route
            path="/teste"
            element={
              <CompressionPageTeste
                showResult={showResult}
                setShowResult={setShowResult}
              />
            }
          />
          <Route path="*" element={<h1>Página não encontrada</h1>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
