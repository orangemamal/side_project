import React from 'react';
import Slick from "../Slick";

export default function Services() {
  const itemsProduct = [1, 2, 3];

  const servicesItems = [
    {
      keyword: 'truck',
      title: 'Fast & Free Shipping',
    },
    {
      keyword: 'bag',
      title: 'Easy to Shop',
    },
    {
      keyword: 'support',
      title: '24/7 Support',
    },
    {
      keyword: 'return',
      title: 'Hassle Free Returns',
    },
  ];

  return (
    <main>
      <div className="why-choose-section">
        <div className="container">
          <div className="row my-5">

            {servicesItems.map((item, index) => (
              <div className="col-6 col-md-6 col-lg-3 mb-4" key={index}>
                <div className="feature">
                  <div className="icon">
                    <img src={require(`assets/icons/${item.keyword}.svg`)} alt="Image" className="imf-fluid" />
                  </div>
                  <h3>{item.title}</h3>
                  <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>

      <div className="product-section pt-0">
        <div className="container">
          <div className="row">

            <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
              <h2 className="mb-4 section-title">Crafted with excellent material.</h2>
              <p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. </p>
              <p><a href="#" className="btn">Explore</a></p>
            </div>

            {itemsProduct.map((item, index) => (
              <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0" key={index}>
                <a className="product-item" href="#">
                  <img src={require(`assets/images/product-${item}.png`)} className="img-fluid product-thumbnail" />
                    <h3 className="product-title">Nordic Chair</h3>
                    <strong className="product-price">$50.00</strong>

                    <span className="icon-cross">
                  <img src={require("assets/icons/cross.svg").default} className="img-fluid" />
                </span>
                </a>
              </div>
            ))}

          </div>
        </div>
      </div>

      <div className="testimonial-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 mx-auto text-center">
              <h2 className="section-title">Testimonials</h2>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="testimonial-slider-wrap text-center">
                <div className="testimonial-slider">

                  <Slick />

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
};
