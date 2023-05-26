import './App.scss'
import { Route, Routes } from 'react-router-dom';
import CompressionPage from './pages/calculates-compression'
import EndPipePage from './pages/calculates-end-pipe'
import HomePage from './pages/home'
import Header from './components/Header/Header';
import { useState } from 'react';

function App() {

  const [showResult, setShowResult] = useState(false)
  // const abreContainer = () => {
  //   document.getElementById('container').style.transition = '1s'
  //   document.getElementById('container').style.transform = 'scale(1)';
  // }
  return (
    <div>
      {!showResult && <Header ></Header>}
      <div id={'container'} className='container'>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='terminopipe' element={<EndPipePage showResult={showResult} setShowResult={setShowResult} />} />
          <Route path='compressao' element={<CompressionPage />} />
          <Route path='*' element={<h1>Página não encontrada</h1>} />
        </Routes>
      </div>

    </div >
  )
}

export default App
