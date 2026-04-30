import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'

import Home from './Pages/Home/Home'
import Sobre from './Pages/Sobre/Sobre'
import Servicos from './Pages/Servicos/Servicos'
import Contato from './Pages/Contato/Contato'
import Equipe from './Pages/Equipe/Equipe'
import Extra from './Pages/Extra/Extra'
import NotFound from './Pages/NotFound/NotFound'
import './App.module.css'


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <main style={{minHeight: '80vh', padding: '20px'}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Sobre" element={<Sobre />} />
          <Route path="/Servicos" element={<Servicos />} />
          <Route path="/Contato" element={<Contato />} />
          <Route path="/Equipe" element={<Equipe />} />
          <Route path="/Extra" element={<Extra />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App