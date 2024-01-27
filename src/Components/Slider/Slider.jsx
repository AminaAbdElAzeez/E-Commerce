// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Slider.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Slider Images
import Image1 from '../../Assets/slide-1.jpg';
import Image2 from '../../Assets/slide-2.jpg'
import Image4 from '../../Assets/slide-4.jpg'
import Image5 from '../../Assets/slide-5.jpg'

const Slider = () => {
  return (
    <div>
        <Swiper
            slidesPerView={'auto'}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            }}
            pagination={{
            clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper slider"
        >
            <SwiperSlide className='slide-1'>
                <div className='slider-wrapper'>
                    <div className='slider-text'>
                        <h1 className='slider-content-title'>feeling relax day</h1>
                        <h3>enjoy weekEnd</h3>
                    </div>
                    <div className='slider-wrapper-img'>
                        <img src={Image1} alt='slider-img'/>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='slide-2'>
                <div className='slider-wrapper'>
                    <div className='slider-text'>
                        <h1 className='slider-content-title'>feeling relax day</h1>
                        <h3>enjoy weekEnd</h3>
                    </div>
                    <div className='slider-wrapper-img'>
                        <img src={Image2} alt='slider-img'/>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='slide-4'>
                <div className='slider-wrapper'>
                    <div className='slider-text'>
                        <h1 className='slider-content-title'>feeling relax day</h1>
                        <h3>enjoy weekEnd</h3>
                    </div>
                    <div className='slider-wrapper-img'>
                        <img src={Image4} alt='slider-img'/>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='slide-5'>
                <div className='slider-wrapper'>
                    <div className='slider-text'>
                        <h1 className='slider-content-title'>feeling relax day</h1>
                        <h3>enjoy weekEnd</h3>
                    </div>
                    <div className='slider-wrapper-img'>
                        <img src={Image5} alt='slider-img'/>
                    </div>
                </div>
            </SwiperSlide>

        </Swiper>
    </div>
  )
}

export default Slider
