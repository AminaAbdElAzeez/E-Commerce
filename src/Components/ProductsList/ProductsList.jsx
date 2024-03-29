import { useContext } from 'react';
import Rating from '../Rating/Rating';
import './ProductsList.css'
import CartContext from '../Context/CartContext';
import { Link } from 'react-router-dom';

const ProductsList = ({products}) => {
  const {addToCart} = useContext(CartContext);


  return (
    <div className='products'>
      <div className='products-wrapper'>
        {products.slice(0,10).map((product)=>(
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
              <Link to={`/product/${product.id}`} className='product-view'>
                <i className="bi bi-eye-fill"></i>
                View
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductsList
