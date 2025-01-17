/*import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kid_banner from './Components/Assets/banner_kids.png';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path='/' element={<Shop/>}></Route>
          <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}></Route>
          <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}></Route>
          <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>}></Route>


          <Route path="product" element={<Product/>}>
            <Route path=':productId' element={<Product/>}> </Route>
          </Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/login' element={<LoginSignup/>}></Route> 
        </Routes>

        <Footer />


      </BrowserRouter>
      
    </div>
  );
}

export default App;*/












import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import ShopCategory from "./Pages/ShopCategory";
import Shop from "./Pages/Shop";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import men_banner from "./Components/Assets/banner_mens.png";
import women_banner from "./Components/Assets/banner_women.png";
import kid_banner from "./Components/Assets/banner_kids.png";
import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <div id="root">
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/" element={<Shop />} />
                        <Route path="/mens" element={<ShopCategory banner={men_banner} category="men" />} />
                        <Route path="/womens" element={<ShopCategory banner={women_banner} category="women" />} />
                        <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kid" />} />
                        <Route path="product" element={<Product />}>
                            <Route path=":productId" element={<Product />} />
                        </Route>
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/login" element={<LoginSignup />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;

