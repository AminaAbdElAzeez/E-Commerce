import { useContext, useEffect, useState } from 'react';
import './Products.css';
import Particle from '../../Components/Particle/Particle';
import CartContext from '../../Components/Context/CartContext';
import HeadingTitle from '../../Components/HeadingTitle/HeadingTitle';
import { Link } from 'react-router-dom';

const Products = () => {
  const [search,setSearch] = useState("");
  const [products,setProducts] = useState([]);
  const {addToCart} = useContext(CartContext);

  useEffect(()=>{
    fetchApi()
  },[])

  async function fetchApi(){
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    setProducts(data);
}

  return (
    <section className='our-products'>
      <Particle/>
      <HeadingTitle title={"our products"}/>
      <div className='container'>
        <div className='product-search'>
          <input value={search} onChange={(e)=>setSearch(e.target.value)} type='search' placeholder='Search in Products...' />
        </div>
        <div className='our-products-wrapper'>
          {products.filter(a=>a.title.toLowerCase().includes(search)).map((product)=>(
            <div key={product.id} className='our-product-item'>
              <div className='img'>
                <img src={product.image} alt={product.name}/>
                <div className='our-product-item-icon'>
                  <button onClick={()=>addToCart({...product,quantity:1})}>
                    <i className="bi bi-cart-plus-fill"></i>
                  </button>
                  <Link to={`/product/${product.id}`} className='our-products-wrapper-link'>
                    <i className="bi bi-eye-fill"></i>
                  </Link>
                </div>
              </div>
              <h4 className='our-product-item-name'>{product.title.slice(0,12)}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
