import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const Links=["Home" , "Shop" , "Product" , "Blog" , "Contact" , "Register"]

  return (
    <footer className='footer'>
        <div className='container'>
            <div className='footer-wrapper'>
                <div className='footer-item'>
                    <h3>About us</h3>
                    <p className='footer-item-desc'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    </p>
                    <ul className='footer-media'>
                        <li><a href='/#'><i className="bi bi-facebook"></i></a></li>
                        <li><a href='/#'><i className="bi bi-google"></i></a></li>
                        <li><a href='/#'><i className="bi bi-twitter"></i></a></li>
                        <li><a href='/#'><i className="bi bi-instagram"></i></a></li>
                    </ul>
                </div>
                <div className='footer-item'>
                    <Link to='/' className='footer-logo'>
                        <i className="bi bi-shop-window"></i>
                        E-Commerce 
                    </Link>
                </div>
                <div className='footer-item'>
                    <h3>Useful Links</h3>
                    <ul className='footer-links'>
                        {Links.map((link) => (
                            <li key={link}>
                                <Link to={`/${link.toLowerCase()}`} className='footer-link'>{link}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <p>Created by<b> amina abdElAzeez</b></p>
        </div>
    </footer>
  )
}

export default Footer
