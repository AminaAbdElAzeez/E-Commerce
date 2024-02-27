import { Link } from 'react-router-dom'
import './SideNav.css'

const SideNav = ({sideNav,handleClick}) => {

  return (
    <nav className='sidebar-nav' ref={sideNav}>
        <ul className='sidebar-list'>
            <li><Link to='/' onClick={()=>handleClick()}><i className="bi bi-house-door-fill"></i>home</Link></li>
            <li><Link to='shop' onClick={()=>handleClick()}><i className="bi bi-shop-window"></i>shop</Link></li>
            <li><Link to='product' onClick={()=>handleClick()}><i className="bi bi-basket-fill"></i>product</Link></li>
            <li><Link to='blog' onClick={()=>handleClick()}><i className="bi bi-globe2"></i>blog</Link></li>
            <li><Link to='contact' onClick={()=>handleClick()}><i className="bi bi-envelope-heart-fill"></i>contact</Link></li>
            <li><Link to='register' onClick={()=>handleClick()}><i className="bi bi-person-add"></i>register</Link></li>
            <li><Link to='error-404' onClick={()=>handleClick()}><i className="bi bi-emoji-frown-fill"></i>error-404</Link></li>
        </ul>
    </nav>
  )
}

export default SideNav
