import './exibeProdutoSelecionado.css';
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import { BsCartPlus, BsFillCartCheckFill } from "react-icons/bs";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Mousewheel, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import EstrelasAvaliacao from '../../componentes/estrelasAvaliacao/estrelasAvaliacao';
import ExibeTamanhos from './exibeTamanhos/exibeTamanhos';
import { useEffect, useState } from 'react';
import BotaoAtrativo from '../../componentes/botaoAtrativo/botaoAtrativo';
import Footer from '../../componentes/footer/footer';

const ExibeProdutoSelecionado = () => {
    const precoProdutoAtual = 149.95;
    const [quantidadeSelecionadaItens, setQuantidadeSelecionadaItens] = useState(1);
    const [modeloSelecionadoTipo, setModeloSelecionadoTipo] = useState(-1);
    const [like, setLike] = useState(false);
    const [adicaoAoCarrinho, setAdicaoAoCarrinho] = useState(false);
    const [precoAtual, setPrecoAtual] = useState(precoProdutoAtual);

    useEffect(() => {
        setPrecoAtual(precoProdutoAtual * quantidadeSelecionadaItens);
    }, [quantidadeSelecionadaItens]);

    const listaImagensItemSelecionado = [
        '../../../calca2.jpg',
        '../../../calca3.jpg',
        '../../../calca4.jpg',
        '../../../calca3.jpg',
        '../../../calca2.jpg',
        '../../../calca4.jpg',
        '../../../calca2.jpg',
        '../../../calca4.jpg',
        '../../../calca2.jpg',
        '../../../calca2.jpg',
        '../../../calca3.jpg',
        '../../../calca3.jpg',
        '../../../calca4.jpg',
        '../../../calca2.jpg',
        '../../../calca3.jpg'
    ];

    const listaModelosDisponiveis = [
        '../../../calca2.jpg',
        '../../../calca3.jpg',
        '../../../calca4.jpg',
        '../../../calca3.jpg',
        '../../../calca2.jpg',
        '../../../calca4.jpg',
        '../../../calca2.jpg',
        '../../../calca3.jpg'
    ];

    const listaSemelhantesVertical = [
        '../../../calca2.jpg',
        '../../../calca3.jpg',
        '../../../calca4.jpg',
        '../../../calca2.jpg',
        '../../../calca3.jpg',
        '../../../calca4.jpg',
        '../../../calca2.jpg',
        '../../../calca3.jpg',
        '../../../calca4.jpg',
        '../../../calca2.jpg',
        '../../../calca3.jpg',
        '../../../calca4.jpg'
    ];

    const gerarListaExibeProdutoSelecionado = () => {
        return listaImagensItemSelecionado.map((endereco, index) => (
            <SwiperSlide key={index}>
                <img
                    key={index}
                    src={`${endereco}`}
                    alt={'Imagem em destaque do produto selecionado'}
                    className='imagensTeste' />
            </SwiperSlide>
        ));
    };

    const gerandoCardModelos = () => {
        return listaModelosDisponiveis.map((endereco, index) => (
            <div className='espacoModelo' key={index}>
                <img
                    key={index}
                    src={`${endereco}`}
                    alt={'modele disponivel para escolha'}
                    className={
                        modeloSelecionadoTipo === index
                            ? 'cardModeloSelecionadoTipo'
                            : 'cardModeloDisponivel'
                    }
                    onClick={() => { setModeloSelecionadoTipo(index) }}
                />
            </div>
        ));
    };

    const formarListaVerticalLateral = () => {
        return listaSemelhantesVertical.map((endereco, index) => (
            <SwiperSlide key={index}>
                <div className='definindoDimensoes'>
                    <div className='likeItem'>
                        {
                            like === false
                                ? <IoIosHeartEmpty
                                    className='likeItemSelecionado'
                                    onClick={() => { setLike(!like) }}
                                />
                                : <IoIosHeart
                                    className='likeItemSelecionado'
                                    onClick={() => { setLike(!like) }}
                                />
                        }
                    </div>
                    <img
                        key={index}
                        src={`${endereco}`}
                        alt={'imagem de produto semelhante'}
                        className='imagensSlideSemelhantes'
                    />
                </div>
            </SwiperSlide>
        ));
    };
    return (
        <>
            <div className='estruturaDaPaginaExibeProduto'>
                <div className='baseExibeProdutos'>
                    <div className='slideExibeProduto' title='Gire a bolinha do mouse ou arraste para o lado para ver mais'>
                        <Swiper
                            slidesPerView={1}
                            slidesPerGroup={1}
                            spaceBetween={0}
                            grabCursor={true}
                            centeredSlides={true}
                            mousewheel={true}
                            autoplay={{
                                delay: 3500
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            loop={listaImagensItemSelecionado.length >= 4 ? true : false}
                            modules={[Autoplay, Mousewheel, Pagination]}
                        >
                            {gerarListaExibeProdutoSelecionado()}
                        </Swiper>
                    </div>
                    <div className='informacoesProduto'>
                        <div>
                            <h5 className='tituloProduto'>Calça alfaiataria feminina bege</h5>
                            <div className='marcaEAvaliacao'>
                                <EstrelasAvaliacao nota={4} />
                                <h5 className='marcaProduto'>Feito por: The Universe</h5>
                            </div>
                            <div className='separador' />
                            <div className='configuracoesDoPedido'>
                                <div>
                                    <ExibeTamanhos />
                                    <h5>Quantidade:</h5>
                                    <div className='estruturaBotesQuantidade'>
                                        <div className='botoesQuantidade' onClick={() => { setQuantidadeSelecionadaItens(quantidadeSelecionadaItens + 1) }}>+</div>
                                        <div className='quantidadeSelecionada'>{quantidadeSelecionadaItens}</div>
                                        <div className='botoesQuantidade' onClick={() => { setQuantidadeSelecionadaItens(quantidadeSelecionadaItens <= 1 ? quantidadeSelecionadaItens : (quantidadeSelecionadaItens - 1)) }}>-</div>
                                    </div>
                                </div>
                                <div className='modelosDisponiveis'>
                                    {listaModelosDisponiveis.length >= 1 ? gerandoCardModelos() : null}
                                </div>
                                <div>
                                    {
                                        like === false
                                            ? <IoIosHeartEmpty
                                                className='likeItemSelecionado'
                                                onClick={() => { setLike(!like) }}
                                            />
                                            : <IoIosHeart
                                                className='likeItemSelecionado'
                                                onClick={() => { setLike(!like) }}
                                            />
                                    }
                                </div>
                            </div>
                            <div className='separador' />
                            <div className='precificacaoFreteEMais'>
                                <div className='precoProdutoSelecionado'>
                                    <BotaoAtrativo textoBotao={'Comprar'} />
                                    <p className='precoAtualizado'>
                                        {`R$ ${parseFloat(precoAtual.toFixed(2))}`}
                                    </p>
                                </div>
                                <div>

                                </div>
                                <div>
                                    {
                                        adicaoAoCarrinho === false
                                            ? (
                                                <BsCartPlus
                                                    className='botaoCarrinhoItem'
                                                    onClick={() => { setAdicaoAoCarrinho(!adicaoAoCarrinho) }}
                                                />
                                            ) : (
                                                <BsFillCartCheckFill
                                                    className='botaoCarrinhoItem'
                                                    onClick={() => { setAdicaoAoCarrinho(!adicaoAoCarrinho) }}
                                                />
                                            )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='secaoProdutosSemelhantes'>
                        <div className='verticalProdutosSemelhantesItem'>
                            <Swiper
                                direction={'vertical'}
                                slidesPerView={2}
                                slidesPerGroup={1}
                                spaceBetween={10}
                                mousewheel={true}
                                loop={listaSemelhantesVertical.length >= 4 ? true : false}
                                modules={[Mousewheel]}
                            >
                                {formarListaVerticalLateral()}
                            </Swiper>
                        </div>
                    </div>
                </div>
                <div style={{ width: '80%', justifySelf: 'center' }}>
                    <div className='separadorPagina' />
                </div>
            </div>
            <div className='limitesFooter'>
                <Footer />
            </div>
        </>
    );
}

export default ExibeProdutoSelecionado;