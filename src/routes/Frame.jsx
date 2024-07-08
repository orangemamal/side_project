import React, {useState, useCallback, useEffect} from "react";
import { useLocation } from "react-router-dom";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Cart from "../routes/Cart";
import Checkout from "../routes/Checkout";
import ThankYou from "../routes/ThankYou";

import Home from "../components/pageComp/Home";
import Shop from "../components/pageComp/Shop";
import Services from "../components/pageComp/Services";
import Blog from "../components/pageComp/Blog";
import About from "../components/pageComp/About";
import Contact from "../components/pageComp/Contact";

import { Route, Routes } from "react-router-dom";
import {setBasketListData} from "../store/userCommon";
import {useDispatch} from "react-redux";

export default function Frame() {
  const [onCartPage, setOnCartPage] = useState(false);
  const [onCheckoutPage, setOnCheckoutPage] = useState(false);

  const location = useLocation();
  const dispatch = useDispatch();


  // 도메인이 벗어날 경우 원상태의 기본 Hero 변경
  React.useEffect(() => {
    let basicBasketCount = 0
    if(location.pathname === '/') {
      localStorage.clear()
      dispatch(setBasketListData({basketList: basicBasketCount}))
    }

    if (
      location.pathname !== "/Cart" &&
      location.pathname !== "/Checkout" &&
      location.pathname !== "/ThankYou"
    ) {
      setOnCartPage(false);
      setOnCheckoutPage(false);
    }
  }, [location]);

  const handleCartPageRender = useCallback(() => {
    setOnCartPage(true);
    setOnCheckoutPage(false);
  }, []);

  const handleCheckoutPageRender = useCallback(() => {
    setOnCheckoutPage(true);
    setOnCartPage(false);
  }, []);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="app">

      <Navigation />

      <div className="main_frame">
        <Hero onCartPage={onCartPage} onCheckoutPage={onCheckoutPage} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Cart" element={<Cart onPageRender={handleCartPageRender} />} />
          <Route path="/Checkout" element={<Checkout onPageRender={handleCheckoutPageRender} />} />
          <Route path="/ThankYou" element={<ThankYou onPageRender={handleCartPageRender} />} />
        </Routes>
      </div>

      <Footer />

    </div>
  );
}
