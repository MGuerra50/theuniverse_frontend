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
                    delay: 3000,
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
                <SwiperSlide><h1 style={{ backgroundColor: 'blue', width: '100%', height: '100%', margin:'0' }}>Teste1</h1></SwiperSlide>
                <SwiperSlide><h1 style={{ backgroundColor: 'red', width: '100%', height: '100%', margin:'0' }}>Teste2</h1></SwiperSlide>
                <SwiperSlide><h1 style={{ backgroundColor: 'orange', width: '100%', height: '100%', margin:'0' }}>Teste3</h1></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slide;