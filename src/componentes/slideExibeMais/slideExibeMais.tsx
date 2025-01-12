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
                    <h1 className='headLineDestaque'>Se Sinta Poderosa, Todos os Dias!</h1>
                    <h3 className='subHeadLineDestaque'>Realce sua confiança e atraia olhares por onde passar</h3>
                    <p className='descricaoDestaque'>Descubra o poder de uma calça que modela suas curvas sem esforço, trazendo conforto e estilo para qualquer momento do seu dia. Com um design atemporal e moderno, você nunca mais vai querer usar outra peça. Afinal, se sentir bem é o segredo para conquistar o mundo!</p>
                    <BotaoAtrativo textoBotao='teste' />
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