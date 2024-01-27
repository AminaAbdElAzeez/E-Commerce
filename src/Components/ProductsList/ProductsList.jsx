import { useContext, useState } from 'react';
import Rating from '../Rating/Rating';
import './ProductsList.css'
import CartContext from '../Context/CartContext';
import Modal from '../Modal/Modal';

const ProductsList = ({products}) => {
  const [openModal,setOpenModal] = useState(false);
  const [data,setData] = useState(null);
  const {addToCart} = useContext(CartContext);

  // Modal Handler 
  const openModalHandler = (item) => {
    setOpenModal(true);
    setData(item)
  }

  return (
    <div className='products'>
      <div className='container'>
        <div className='products-wrapper'>
          {products.map((product)=>(
            <div className='product-item' key={product.id}>
              <img src={product.image} alt="product-item"/>
              <div className='product-item-layer'>
                <h4>{product.title.slice(0,12)}</h4>
                <span className='product-price'><b>Price: </b>${product.price}</span>
                <Rating rating={product.rating["rate"]}/>
                <button className='product-add-to-cart' onClick={()=>addToCart({...product,quantity:1})}>
                  <i className="bi bi-cart-plus-fill"></i>
                  Add to Cart
                </button>
                <button className='product-view' onClick={()=>openModalHandler(product)}>
                  <i className="bi bi-eye-fill"></i>
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {openModal && <Modal data={data} setOpenModal={setOpenModal}/>}
    </div>
  )
}

export default ProductsList
