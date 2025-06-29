import './carrossel.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import ModeloCard from '../modeloCard/modeloCard';

type Card = {
        textoDescricao: string,
        src: string,
        alt: string,
        link: string
    };

type Props = {
    espacoEntreCards: undefined | null | number;
    quantidadeCardsNaTela: undefined | null | number;
    loop: boolean | null;
    listaDeCards?: Card[];
}
const Carrossel = ({ espacoEntreCards, quantidadeCardsNaTela, loop, listaDeCards }: Props) => {

    const cards = [
        {
            textoDescricao: 'Calçados',
            src: 'imagemCard1.jpg',
            alt: 'calçados',
            link: 'calcados'
        }, {
            textoDescricao: 'Calças',
            src: 'calca2.jpg',
            alt: 'calças',
            link: 'calcas'
        }, {
            textoDescricao: 'Jaquetas',
            src: 'teste.jpg',
            alt: 'teste',
            link: 'jaquetas'
        }, {
            textoDescricao: 'Bolsas',
            src: 'calca3.jpg',
            alt: 'teste',
            link: 'bolsas'
        }, {
            textoDescricao: 'Saltos',
            src: 'calca4.jpg',
            alt: 'teste',
            link: 'saltos'
        }, {
            textoDescricao: 'Calçados',
            src: 'imagemCard1.jpg',
            alt: 'teste',
            link: 'calcados'
        }, {
            textoDescricao: 'Tênis',
            src: 'imagemCard1.jpg',
            alt: 'teste',
            link: 'tenis'
        }, {
            textoDescricao: 'Calçados',
            src: 'imagemCard1.jpg',
            alt: 'teste',
            link: 'calcados'
        }
    ];

    const gerandoCards = () => {
        const lista = listaDeCards != null && listaDeCards.length > 0 ? listaDeCards : cards;
        return lista.map((cardAtual, index) => (
            <SwiperSlide key={`${index}`}>
                <ModeloCard textoDescricao={cardAtual.textoDescricao} link={cardAtual.link}>
                    <img
                        key={index}
                        src={cardAtual.src}
                        alt={cardAtual.alt}
                    />
                </ModeloCard>
            </SwiperSlide>

        ));
    }

    return (
        <Swiper
            spaceBetween={espacoEntreCards == null ? -30 : espacoEntreCards}
            slidesPerView={quantidadeCardsNaTela == null ? 5 : quantidadeCardsNaTela}
            pagination={{
                clickable: true,
            }}
            loop={loop === false ? loop : true}
            modules={[Pagination]}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper: any) => console.log(swiper)}
        >
            {gerandoCards()}
        </Swiper>
    );
}

export default Carrossel;