import './Special.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
// import required modules
import { EffectCards } from 'swiper/modules';
import { useContext } from 'react';
import CartContext from '../Context/CartContext';
import { Link } from 'react-router-dom';

const Special = ({products}) => {
  const {addToCart} = useContext(CartContext);

  return (
    <div className='special'>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper special"
      >
        {products.slice(2,15).map((product)=>(
          <SwiperSlide key={product.id} className='special-product'>
            <img src={product.image} alt='special-product'/>
            <div className='special-layer'>
              <button className='special-btn' onClick={()=>addToCart({...product,quantity:1})}>
                <i className="bi bi-cart-plus-fill"></i>
              </button>
              <Link to={`/product/${product.id}`} className='special-btn'>
                <i className="bi bi-eye-fill"></i>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Special
