import './NewArrival.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper/modules';
import { useContext } from 'react';
import CartContext from '../Context/CartContext';
import { Link } from 'react-router-dom';


const NewArrival = ({products}) => {
  const {addToCart} = useContext(CartContext);

  return (
    <div className='new'>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {products.map((product)=>(
          <SwiperSlide key={product.id} className='new-product'>
          <img src={product.image} alt='product-item' />
          <div className='new-overlay'>
            <button className='new-add-to-cart' onClick={()=>addToCart({...product,quantity:1})}>
              <i className="bi bi-cart-plus-fill"></i>
              Add to Cart
            </button>
            <Link to={`/product/${product.id}`} className='new-view'>
              <i className="bi bi-eye-fill"></i>
            </Link>
          </div>
        </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default NewArrival
