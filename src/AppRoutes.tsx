import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './paginas/home/Home';
import NaoEncontrada from './paginas/NaoEncontrada';
import Categorias from './paginas/categorias/Categorias';
import Contato from './paginas/contato/Contato';
import Sobre from './paginas/sobre/Sobre';
import BarraDeNavegacao from './componentes/barraDeNavegacao/barraDeNavegacao';

function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <BarraDeNavegacao />
        <Routes>
          <Route index element={<Home />} />
          <Route path='/categorias' element={<Categorias />} />
          <Route path='/contato' element={<Contato />} />
          <Route path='/sobre' element={<Sobre />} />
          <Route path='/*' element={<NaoEncontrada />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppRoutes;
