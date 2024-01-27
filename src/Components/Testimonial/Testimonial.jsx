import './Testimonial.css';
import Image1 from '../../Assets/01.webp';
import Image2 from '../../Assets/5d578d6481cf25fa4e26624d2a0d003c.jpg';
import Image3 from '../../Assets/02.webp';
import Image4 from '../../Assets/bd973c8d8df301b7a263db2b3d677b46.jpg';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination,Autoplay } from 'swiper/modules';

const Testimonial = () => {
  return (
    <div className='testimonial'>
        <Swiper
            slidesPerView={'auto'}
            centeredSlides={true}
            spaceBetween={30}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                }}
            pagination={{
            clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper test"
        >   
            <SwiperSlide>
                <div className='slide-test'>
                    <div className='top-test'>
                        <img src={Image1} alt='testimonial'/>
                        <div className='star-test'>
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star-half'></i>
                        </div>
                    </div>
                    <p>
                        Sed perspiciatis unde omnis iste natus erolup tatem accusantium doloremque laudantium totam reperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.Sed perspiciatis unde omnis iste natus erolup tatem accusantium doloremque.
                    </p>
                    <div className='bottom-test'>
                        <h4>Sebastian Barry</h4>
                        <span className='job'>Business Manager</span>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='slide-test'>
                    <div className='top-test'>
                        <img src={Image2} alt='testimonial'/>
                        <div className='star-test'>
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star'></i>
                        </div>
                    </div>
                    <p>
                        Sed perspiciatis unde omnis iste natus erolup tatem accusantium doloremque laudantium totam reperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.Sed perspiciatis unde omnis iste natus erolup tatem accusantium doloremque.
                    </p>
                    <div className='bottom-test'>
                        <h4>Oliver Greenwood</h4>
                        <span className='job'>Business Manager</span>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='slide-test'>
                    <div className='top-test'>
                        <img src={Image3} alt='testimonial'/>
                        <div className='star-test'>
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star'></i>
                            <i className='bi bi-star'></i>
                        </div>
                    </div>
                    <p>
                        Sed perspiciatis unde omnis iste natus erolup tatem accusantium doloremque laudantium totam reperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.Sed perspiciatis unde omnis iste natus erolup tatem accusantium doloremque.
                    </p>
                    <div className='bottom-test'>
                        <h4>Teo Greenwood</h4>
                        <span className='job'>Business Manager</span>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='slide-test'>
                    <div className='top-test'>
                        <img src={Image4} alt='testimonial'/>
                        <div className='star-test'>
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star-half'></i>
                        </div>
                    </div>
                    <p>
                        Sed perspiciatis unde omnis iste natus erolup tatem accusantium doloremque laudantium totam reperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        Sed perspiciatis unde omnis iste natus erolup tatem accusantium doloremque.
                    </p>
                    <div className='bottom-test'>
                        <h4>Oliver Greenwood</h4>
                        <span className='job'>Business Manager</span>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>

    </div>
  )
}

export default Testimonial
