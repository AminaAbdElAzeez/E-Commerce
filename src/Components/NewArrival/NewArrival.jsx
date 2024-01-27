import './NewArrival.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper/modules';
import { useContext, useState } from 'react';
import CartContext from '../Context/CartContext';
import Modal from '../Modal/Modal';


const NewArrival = ({products}) => {
  const [openModal,setOpenModal] = useState(false);
  const [data,setData] = useState(null);
  const {addToCart} = useContext(CartContext);

  // Modal Handler 
  const openModalHandler = (item) => {
    setOpenModal(true);
    setData(item)
  }
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
            <button className='new-view' onClick={()=>openModalHandler(product)}>
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

export default NewArrival
