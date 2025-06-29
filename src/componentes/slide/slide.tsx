import './slide.css';
import 'swiper/css';
import 'swiper/css/effect-creative';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCreative } from 'swiper/modules';

const Slide = () => {
    return (
        <div className='baseSlide'>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false
                }}
                grabCursor={true}
                effect={'creative'}
                creativeEffect={{
                    prev: {
                        origin: 'left center',
                        shadow: true,
                        translate: [0, 0, -200],
                        rotate:[0,100,0]
                    },
                    next: {
                        origin: 'right center',
                        shadow: true,
                        translate: [0, 0, -200],
                        rotate: [0,-100,0]
                    }
                }}
                loop= {true}
                modules={[Autoplay, EffectCreative]}
                className='slide'
            >
                <SwiperSlide><img src='creativeSlide/1.png' alt='imagem destaque' style={{ width: '100%', height: '100%', margin:'0',   objectFit: "cover" }} /></SwiperSlide>
                <SwiperSlide><img src='creativeSlide/2.png' alt='imagem destaque' style={{ width: '100%', height: '100%', margin:'0',   objectFit: "cover" }} /></SwiperSlide>
                <SwiperSlide><img src='creativeSlide/3.png' alt='imagem destaque' style={{ width: '100%', height: '100%', margin:'0',   objectFit: "cover" }} /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slide;