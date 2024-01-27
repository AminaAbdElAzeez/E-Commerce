import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './Routes/Root/Root';
import Home from './Routes/Home/Home';
import Shop from './Routes/Shop/Shop';
import Products from './Routes/Products/Products';
import Blog from './Routes/Blog/Blog';
import Contact from './Routes/Contact/Contact';
import ProductNumber from './Routes/ProductNumber/ProductNumber';
import Cart from './Routes/Cart/Cart';
import CartProvider from './Components/Context/CartProvider';
import ErrorPage from './Routes/ErrorPage/ErrorPage';
import Login from './Routes/Form/Login';
import Register from './Routes/Form/Register';

const routes = createBrowserRouter([
  {
    path : "/" ,
    element : <Root/>,
    errorElement : <ErrorPage/>,
    children : [
      { index : true , element : <Home/> },
      { path : "home" , element : <Home/> },
      { path : "shop" , element : <Shop/> },
      { path : "product" , element : <Products/> },
      { path : "blog" , element : <Blog/> },
      { path : "contact" , element : <Contact/> },
      { path : "register" , element : <Register/> },
      { path : "login" , element : <Login/> },
      { path : "product/:id" , element : <ProductNumber/> },
      { path : "cart" , element : <Cart/> },
      
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartProvider>
    <RouterProvider router={routes}/>
  </CartProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
