import './Special.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
// import required modules
import { EffectCards } from 'swiper/modules';
import { useContext, useState } from 'react';
import CartContext from '../Context/CartContext';
import Modal from '../Modal/Modal';

const Special = ({products}) => {
  const [openModal,setOpenModal] = useState(false);
  const [data,setData] = useState(null);
  const {addToCart} = useContext(CartContext);

  // Modal Handler 
  const openModalHandler = (item) => {
    setOpenModal(true);
    setData(item)
  }

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
              <button className='special-btn' onClick={()=>openModalHandler(product)}>
                <i className="bi bi-eye-fill"></i>
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {openModal && <Modal data={data} setOpenModal={setOpenModal}/>}
    </div>
  )
}

export default Special
