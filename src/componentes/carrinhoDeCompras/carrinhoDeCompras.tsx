import './carrinhoDeCompras.css';
import Tilt from 'react-parallax-tilt';
import { FaSquarePlus, FaSquareMinus } from "react-icons/fa6";
import { useEffect, useState } from 'react';

const CarrinhoDeCompras = () => {
    const precoItem = 75.77;
    const [quantidadeItem, setQuantidadeItem] = useState(1);
    const [valor, setValor] = useState(quantidadeItem * precoItem);
    useEffect(() => {
        setValor(precoItem * quantidadeItem);
    }, [quantidadeItem]);

    const formandoListaCarrinho = () => {
        return (
            <>
                <div className='espacoDoItemDoCarrinho'>
                    <div className='imagemCarrinho'>
                        <Tilt
                            tiltMaxAngleX={7}
                            tiltMaxAngleY={7}
                            scale={1.02}
                        >
                            <img src='teste.jpg' alt='testeImagemCarrinho' className='imagemItemExpecificoCarrinho' />
                        </Tilt>
                    </div>
                    <div className='tituloProdutoEQuantidadeItemCarrinho'>
                        <div className='tituloDoItemNoCarrinho'>Calça jeans casual super estilosa</div>
                        <div className='quantidadeDoItemNoCarrinho'>
                            <div className='ordenandoBotoes'>
                                <FaSquarePlus className='iconesMaisEMenos' onClick={
                                    () => {
                                        setQuantidadeItem(quantidadeItem + 1);
                                    }
                                } />
                                <FaSquareMinus className='iconesMaisEMenos' onClick={() => {
                                    setQuantidadeItem((quantidadeItem - 1) > 0 ? (quantidadeItem - 1) : 0);
                                }}
                                />
                            </div>
                            <div className='quantidadeItensSelecionados'>
                                {quantidadeItem}
                            </div>
                            <div className='valorCalculadoDoItemNoCarrinho'>{`R$ ${parseFloat(valor.toFixed(2))}`}</div>
                        </div>
                    </div>
                </div>
                <div className='espacoSeparador'>
                    <div className='separador' />
                </div>
            </>
        );
    };
    return (
        <div className='baseCarrinhoLateral'>
            {formandoListaCarrinho()}
            {formandoListaCarrinho()}
            {formandoListaCarrinho()}
            {formandoListaCarrinho()}
            {formandoListaCarrinho()}
            {formandoListaCarrinho()}
            {formandoListaCarrinho()}
            {formandoListaCarrinho()}
        </div>
    );
};

export default CarrinhoDeCompras;