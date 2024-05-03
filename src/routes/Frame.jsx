import React, { useState } from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Cart from "../routes/Cart";
import Checkout from "../routes/Checkout";

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

  const handleCartPageRender = () => {
    setOnCartPage(true);
    console.log(Cart)
  }
  const handleCheckoutPageRender = () => {
    setOnCheckoutPage(true);
    console.log(Checkout)
  }

  return (
    <div className="app">

      <Navigation />
      <Hero hideContent={[onCartPage, onCheckoutPage]} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/About-us" element={<About />} />
        <Route path="/Contact-us" element={<Contact />} />
        <Route path="/Cart" element={<Cart onPageRender={handleCartPageRender} />} />
        <Route path="/Checkout" element={<Checkout onPageRender={handleCheckoutPageRender} />} />
      </Routes>
      <Footer />

    </div>
  );
}

