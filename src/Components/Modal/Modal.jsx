import { useContext, useState } from 'react'
import CartContext from '../Context/CartContext';
import Rating from '../Rating/Rating';
import './Modal.css'
import { Link } from 'react-router-dom';

const Modal = ({data,setOpenModal}) => {
    const {addToCart} = useContext(CartContext);
    const [qty,setQty] = useState(1);
    const {id , title , price , image , rating , category}=data;

    return (
        <div onClick={()=>setOpenModal(false)} className='modal'>
            <div onClick={(e)=>e.stopPropagation()} className='modal-content'>
                <i className='bi bi-x-circle-fill modal-icon' onClick={()=>setOpenModal(false)}></i>
                <div className='container'>
                    <div className='modal-content-items'>
                        <div className='modal-content-img'>
                            <img src={image} alt={title}/>
                        </div>
                        <div className='modal-content-info'>
                            <h2 className='modal-content-info-title'>{title.slice(0,17)}</h2>
                            <p className='modal-content-info-item'>
                                <b>Category</b> : {category}
                            </p>
                            <p className='modal-content-info-item'>
                                <b>Price</b> : ${price}
                            </p>
                            <Rating rating={rating['rate']}/>
                            <div className='modal-add-to-cart'>
                                <input className='modal-add-to-cart-input' type='number' min='1' max='100' value={qty} onChange={e=>setQty(e.target.value)}/>
                                <button className='modal-add-to-cart-btn' onClick={()=>addToCart({...data,quantity:qty})}>
                                    <i className='bi bi-cart-plus'></i>
                                    add to cart
                                </button>
                            </div>
                            <Link to={`/product/${id}`} className='modal-content-info-link' onClick={()=>setOpenModal(false)}>
                                see more details...
                            </Link>
                        </div>
                    </div>
            </div>
            </div>
        </div>
    )
}

export default Modal
