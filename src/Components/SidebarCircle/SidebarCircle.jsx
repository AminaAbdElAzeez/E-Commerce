import { useContext } from 'react';
import './SidebarCircle.css';
import CartContext from '../Context/CartContext';
import { Link } from 'react-router-dom';

const SidebarCircle = ({handleClick}) => {
    const {cartItemsLength} = useContext(CartContext);

    return (
        <div className='sidebar-circle-wrapper'>
            <div className="circle-container">
                <div className="circle">
                    <button id="close" onClick={()=>handleClick()}>
                        <i className="bi bi-x"></i>
                    </button>
                    <button id="open" onClick={()=>handleClick()}>
                        <i className="bi bi-list"></i>
                    </button>
                </div>
            </div>
            <Link to="/cart" className="cart-icon-wrapper">
                {cartItemsLength > 0 && (
                    <b className="cart-notification">{cartItemsLength}</b>
                )}
                <i className="bi bi-cart2 sidebar-circle-cart"></i>
            </Link>
        </div>
    )
}

export default SidebarCircle
// <i className="bi bi-cart2 sidebar-circle-cart"></i>