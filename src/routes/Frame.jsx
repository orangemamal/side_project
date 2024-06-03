import React, { useState } from "react";
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

export default function Frame() {
  const [onCartPage, setOnCartPage] = useState(false);
  const [onCheckoutPage, setOnCheckoutPage] = useState(false);

  const location = useLocation();

  // 도메인이 벗어날 경우 원상태의 기본 Hero 변경
  React.useEffect(() => {
    if (
      location.pathname !== "/Cart" &&
      location.pathname !== "/Checkout" &&
      location.pathname !== "/ThankYou"
    ) {
      setOnCartPage(false);
      setOnCheckoutPage(false);
    }
  }, [location]);

  const handleCartPageRender = () => {
    setOnCartPage(true);
    setOnCheckoutPage(false);
  }
  const handleCheckoutPageRender = () => {
    setOnCheckoutPage(true);
    setOnCartPage(false);
  }
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
          <Route path="/About-us" element={<About />} />
          <Route path="/Contact-us" element={<Contact />} />
          <Route path="/Cart" element={<Cart onPageRender={handleCartPageRender} />} />
          <Route path="/Checkout" element={<Checkout onPageRender={handleCheckoutPageRender} />} />
          <Route path="/ThankYou" element={<ThankYou onPageRender={handleCartPageRender} />} />
        </Routes>
      </div>

      <Footer />

    </div>
  );
}

