import { useState } from 'react';
import './carrinhoBotao.css';
import { ImCart } from "react-icons/im";
import CarrinhoDeCompras from '../carrinhoDeCompras/carrinhoDeCompras';

const CarrinhoBotao = () => {
    const [carrinhoAtivo, setCarrinhoAtivo] = useState(false);
    return (
        <>
            <div className='baseCarrinhoIcon' onClick={()=>setCarrinhoAtivo(!carrinhoAtivo)}>
                <ImCart className='iconCarrinho' />
            </div>
            <div className={carrinhoAtivo?'exibicaoCarrinhoCompras':'naoExibicaoCarrinhoCompras'}>
                <CarrinhoDeCompras />
            </div>
        </>
    );
};

export default CarrinhoBotao;