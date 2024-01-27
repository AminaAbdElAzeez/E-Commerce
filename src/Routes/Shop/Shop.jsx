import { useContext, useEffect, useState } from 'react'
import Rating from '../../Components/Rating/Rating';
import CartContext from '../../Components/Context/CartContext';
import Modal from '../../Components/Modal/Modal';
import HeadingTitle from '../../Components/HeadingTitle/HeadingTitle';
import ProductsList from '../../Components/ProductsList/ProductsList';
import './Shop.css'
import Particle from '../../Components/Particle/Particle';

const Shop = () => {
  const [products,setProducts] = useState([]);
  const [items,setItems] = useState(products);
  const [openModal,setOpenModal] = useState(false);
  const [toggle,setToggle] = useState(false);
  const [data,setData] = useState(null);
  const {addToCart} = useContext(CartContext);

  useEffect(()=>{
    fetchApi()
  },[])

  // Modal Handler 
  const openModalHandler = (item) => {
    setOpenModal(true);
    setData(item)
  }

  async function fetchApi(){
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    setProducts(data);
}

  const filterItems = (catItem) => {
    const updateItems = products.filter((curItem)=>{
      return curItem.category === catItem
    });
    setItems(updateItems);
    setToggle(true)
  }

  return (
    <section className='shop'>
      <Particle/>
      <HeadingTitle title={"our store"}/>
      <div className='container'>
        <div className='filter-btn'>
          <button type='button' onClick={()=>setItems(products)}>all products</button>
          <button type='button' onClick={()=>filterItems("men's clothing")}>men's clothing</button>
          <button type='button' onClick={()=>filterItems("jewelery")}>jewelery</button>
          <button type='button' onClick={()=>filterItems("electronics")}>electronics</button>
          <button type='button' onClick={()=>filterItems("women's clothing")}>women's clothing</button>
        </div>
        {toggle ? (
          <div className='products-wrapper'>
          {items.map((product)=>(
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
        ) : (      
          <ProductsList products={products}/>
        )}
      </div>
      {openModal && <Modal data={data} setOpenModal={setOpenModal}/>}
    </section>
  )
}

export default Shop
