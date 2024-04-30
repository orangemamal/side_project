import React from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

import Home from "../components/pageComp/Home";
import Shop from "../components/pageComp/Shop";
import Services from "../components/pageComp/Services";
import Blog from "../components/pageComp/Blog";
import About from "../components/pageComp/About";
import Contact from "../components/pageComp/Contact";

import { Route, Routes } from "react-router-dom";

export default function Frame() {

  return (
    <div className="app">

      <Navigation />
      <Hero />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />

    </div>
  );
}

