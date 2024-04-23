import React from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

import Home from "../components/Home";
import Shop from "../components/Shop";

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
      </Routes>
      <Footer />

    </div>
  );
}

