import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const Links=["Home" , "Shop" , "Product" , "Blog" , "Contact" , "Register"]

  return (
    <nav className='navbar'>
        <ul className='nav-links'>
            {Links.map((link) => (
                <li key={link}>
                    <Link to={`/${link.toLowerCase()}`} className='nav-link'>{link}</Link>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default Navbar
