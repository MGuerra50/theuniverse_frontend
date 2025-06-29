import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './paginas/home/Home';
import NaoEncontrada from './paginas/NaoEncontrada';
import Explorar from './paginas/categorias/Explorar';
import Contato from './paginas/contato/Contato';
import Sobre from './paginas/sobre/Sobre';
import BarraDeNavegacao from './componentes/barraDeNavegacao/barraDeNavegacao';
import { CarrinhoProvider } from './componentes/carrinhoContext/carrinhoContext';
import ExibeProdutoSelecionado from './paginas/exibeProdutoSelecionado/ExibeProdutoSelecionado';
import PoliticasEPrivacidade from './paginas/politicasEPrivacidade/politicasEPrivacidade';
import TermosUso from './paginas/termosUso/termosUso';

function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <CarrinhoProvider>
          <BarraDeNavegacao />
          <Routes>
            <Route index element={<Home />} />
            <Route path='/categorias' element={<Explorar />} />
            <Route path='/contato' element={<Contato />} />
            <Route path='/sobre' element={<Sobre />} />
            <Route path='/product/:id' element={<ExibeProdutoSelecionado />} />
            <Route path='/politicaseprivacidade' element={<PoliticasEPrivacidade />} />
            <Route path='/termosDeUso' element={<TermosUso />} />
            <Route path='/*' element={<NaoEncontrada />} />
          </Routes>
        </CarrinhoProvider>
      </BrowserRouter>
    </>
  );
}

export default AppRoutes;
