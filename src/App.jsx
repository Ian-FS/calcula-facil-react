import './App.scss'
import { Route, Routes } from 'react-router-dom';
import CompressionPage from './pages/calculates-compression'
import EndPipePage from './pages/calculates-end-pipe'
import HomePage from './pages/home'
import Header from './components/Header/Header';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='terminopipe' element={<EndPipePage />} />
        <Route path='compressao' element={<CompressionPage />} />
        <Route path='*' element={<h1>Página não encontrada</h1>} />
      </Routes>
    </div>
  )
}

export default App
