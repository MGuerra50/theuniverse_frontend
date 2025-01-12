import CarrinhoBotao from '../carrinhoBotao/carrinhoBotao';
import ModeloBotao from '../modeloBotao/modeloBotao';
import './barraDeNavegacao.css';
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';

const BarraDeNavegacao = () => {

    return (
        <div className='backBase'>
            <div className="base">
                <div className='logoSpace'>
                    <Link to={'/'} style={{ textDecoration: 'none', color: '#ffffff' }}>
                        <h1>The Universe</h1>
                    </Link>
                </div>
                <div className='espacoBarraDePesquisa'>
                    <input type='text' className='barraDePesquisa' placeholder='  Pesquise aqui' />
                    <Link to={'urlPesquisa'}>
                        <div className='containerBotaoPesquisa'>
                            <CiSearch className='botaoPesquisa' />
                        </div>
                    </Link>
                </div>
                <div className='linksNavegacao'>
                    <ModeloBotao to='/categorias' texto='Categorias' />
                    <ModeloBotao to='/contato' texto='Contato' />
                    <ModeloBotao to='/sobre' texto='Sobre' />
                    <ModeloBotao to='/acesso' texto='Entrar' />
                    <CarrinhoBotao />
                </div>
            </div>
        </div>
    );
}
export default BarraDeNavegacao;