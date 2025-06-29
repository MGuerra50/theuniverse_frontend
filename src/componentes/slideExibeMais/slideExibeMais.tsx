import './slideExibeMais.css';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCube } from 'swiper/modules';
import BotaoAtrativo from '../botaoAtrativo/botaoAtrativo';

const SlideExibeMais = () => {

    return (
        <div className='estruturaSlideExibeMais'>
            <div className='imagemDestaque'>
                <div className='espacoImagem'>
                    <img src='teste.jpg' alt={'teste'} className='imagem' />
                </div>
                <div className='textosDescricao'>
                    <h1 className='headLineDestaque'>Nova coleção</h1>
                    <h3 className='subHeadLineDestaque'>Urban Style</h3>
                    <p className='descricaoDestaque'>Esteja pronta para o que for com a linha urban style de The Universe, versatilidade e práticidade você encontra aqui!</p>
                    <BotaoAtrativo textoBotao='Urban Style' />
                </div>
            </div>
            <div className='espacoSlideSimilares'>
                <Swiper
                    effect={'cube'}
                    grabCursor={true}
                    loop={true}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: true
                    }}
                    modules={[Autoplay, EffectCube, Pagination]}
                    className='slideExibeMais'
                >
                    <SwiperSlide>
                        <div className='configurandoDefinicoesDasImagens'>
                            <img src='calca2.jpg' alt={'teste'} className='imagemSlideCubo' id='casoAtipicoImagem' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='configurandoDefinicoesDasImagens'>
                            <img src='calca3.jpg' alt={'teste'} className='imagemSlideCubo' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='configurandoDefinicoesDasImagens'>
                            <img src='calca4.jpg' alt={'teste'} className='imagemSlideCubo' />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}
export default SlideExibeMais;