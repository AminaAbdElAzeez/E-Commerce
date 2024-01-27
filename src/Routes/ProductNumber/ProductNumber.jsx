import { useContext, useEffect, useState } from 'react'
import CartContext from '../../Components/Context/CartContext';
import { useParams } from 'react-router-dom';
import Rating from '../../Components/Rating/Rating';
import './ProductNumber.css'
import Particle from '../../Components/Particle/Particle';

const ProductNumber = () => {
  const [products,setProducts] = useState([]);
  const [qty,setQty] = useState(1);
  const {addToCart} = useContext(CartContext);
  const {id} = useParams();

  useEffect(()=>{
    fetchApi()
  },[])

  async function fetchApi(){
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    setProducts(data);
}

  const product = products.find((b)=>b.id === +id)
  
  return (
    <section className='product-number'>
    <Particle/>
      {product && (
        <div className='container'>
          <div className='product-number-wrapper'>
            <div className='product-number-img'>
              <img src={product.image} alt={product.title}/>
            </div>
            <div className='product-number-info'>
              <h2 className='product-number-title'>{product.title.slice(0,15)}</h2>
              <h5 className='product-number-item'><b>Category: </b>({product.category})</h5>
              <Rating rating={product.rating["rate"]}/>
              <h4 className='product-number-item'><b>Price: </b>(${product.price})</h4>
              <div className='product-number-add-to-cart'>
                <input className='product-number-add-to-cart-input' type='number' min='1' max='100' value={qty} onChange={e=>setQty(e.target.value)} />
                <button className='product-number-add-to-cart-btn' onClick={()=>addToCart({...product,quantity:qty})}>
                  <i className='bi bi-cart-plus'></i>
                  add to cart
                </button>
              </div>
            </div>
          </div>
          <p className='product-number-desc'>{product.description}</p>
        </div>
      )}
    </section>
  )
}

export default ProductNumber
