import { Outlet } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import './Root.css';
import Particle from '../../Components/Particle/Particle';
import { Fragment, useEffect, useRef, useState } from 'react';
import SidebarCircle from '../../Components/SidebarCircle/SidebarCircle';
import './Root.css'
import SideNav from '../../Components/SideNav/SideNav';
import TopBtn from '../../Components/TopBtn/TopBtn';
import { FadeLoader } from 'react-spinners';


const Root = () => {
  const [loading,setLoading] = useState(false);

  const appContainer = useRef();
  const sideNav = useRef();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
        setLoading(false)
    },2000)
},[])




  const handleClick = () => {
    const hasClass = appContainer.current.classList.contains('show-nav');
    if(hasClass){
      appContainer.current.classList.remove('show-nav');
      sideNav.current.style.left="-151px"
      appContainer.current.style.transform="rotate(0deg)"
    }
    else {
      appContainer.current.classList.add('show-nav')
      sideNav.current.style.left="0px"
      appContainer.current.style.transform="rotate(-22deg)"
    }
  }


  return (
    <section>
      {
        loading ?
          <FadeLoader
            className='spin'
                color={"#a21026"}
                loading={loading}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
          />
        : 
        <Fragment>
          <Particle/>
          <div className='app-container' ref={appContainer}>
            <Header/>
            <SidebarCircle handleClick={handleClick}/>
            <Outlet/>
            <Footer/>
          </div>
          <SideNav sideNav={sideNav} handleClick={handleClick}/>
          <TopBtn/>
        </Fragment>
      }
    </section>
  )
}

export default Root
