import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import './Header.css';
import { useContext } from "react";
import CartContext from "../Context/CartContext";

const Header = () => {
  const {cartItemsLength} = useContext(CartContext);
  return (
    <header className='header'>
        <div className='container'>
            <div className="header-wrapper">
                <Link to="/" className='logo'>
                    <i className="bi bi-shop"></i>
                    E-Commerce 
                </Link>
                <Navbar/>
                <Link to="/cart" className="cart-icon-wrapper">
                  {cartItemsLength > 0 && (
                    <b className="cart-notification">{cartItemsLength}</b>
                  )}
                  <i className="bi bi-cart2 header-cart"></i>
                </Link>
            </div>
        </div>
    </header>
  )
}

export default Header
