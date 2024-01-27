import { useEffect, useState } from 'react'
import Slider from '../../Components/Slider/Slider'
import HeadingTitle from '../../Components/HeadingTitle/HeadingTitle'
import Services from '../../Components/Services/Services'
import ProductsList from '../../Components/ProductsList/ProductsList'
import Testimonial from '../../Components/Testimonial/Testimonial'
import NewArrival from '../../Components/NewArrival/NewArrival'
import Special from '../../Components/Special/Special'
import Support from '../../Components/Support/Support'
import Particle from '../../Components/Particle/Particle'

const Home = () => {
  const [products,setProducts] = useState([]);
  useEffect(()=>{
    fetchApi()
  },[])

  async function fetchApi(){
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    setProducts(data);
}


  return (
    <section>
      <Slider/>
      <Particle/>
      <HeadingTitle title={"services"}/>
      <Services/>
      <HeadingTitle title={"upcoming"}/>
      <ProductsList products={products}/>
      <HeadingTitle title={"what our client’s say"}/>
      <Testimonial/>
      <HeadingTitle title={"new arrival"}/>
      <NewArrival products={products}/>
      <HeadingTitle title={"special products"}/>
      <Special products={products}/>
      <HeadingTitle title={"support"}/>
      <Support/>
    </section>
  )
}

export default Home
