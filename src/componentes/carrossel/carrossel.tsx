import './carrossel.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import ModeloCard from '../modeloCard/modeloCard';

type Props = {
    espacoEntreCards: undefined | null | number;
    quantidadeCardsNaTela: undefined | null | number;
    loop: boolean | null;
}
const Carrossel = ({espacoEntreCards, quantidadeCardsNaTela, loop}: Props) => {
    return (
        <Swiper
            spaceBetween={espacoEntreCards == null ? -30 : espacoEntreCards}
            slidesPerView={quantidadeCardsNaTela == null ? 5 : quantidadeCardsNaTela}
            pagination={{
                clickable: true,
            }}
            loop = {loop === false ? loop : true}
            modules={[Pagination]}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper: any) => console.log(swiper)}
        >
            <SwiperSlide><ModeloCard/></SwiperSlide>
            <SwiperSlide><ModeloCard/></SwiperSlide>
            <SwiperSlide><ModeloCard/></SwiperSlide>
            <SwiperSlide><ModeloCard/></SwiperSlide>
            <SwiperSlide><ModeloCard/></SwiperSlide>
            <SwiperSlide><ModeloCard/></SwiperSlide>
            <SwiperSlide><ModeloCard/></SwiperSlide>
            <SwiperSlide><ModeloCard/></SwiperSlide>
        </Swiper>
    );
}

export default Carrossel;