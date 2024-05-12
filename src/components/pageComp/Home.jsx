import React from 'react';
import Slick from "../Slick";

const Home = () => {

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
      <div className="product-section">
        <div className="container">
          <div className="row">

            <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
              <h2 className="mb-4 section-title">Crafted with excellent material.</h2>
              <p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
                vulputate
                velit imperdiet dolor tempor tristique. </p>
              <p><a href="shop.html" className="btn">Explore</a></p>
            </div>

            {itemsProduct.map((item, index) => (
              <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0" key={index}>
                <a className="product-item" href="cart.html">
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

      <div className="why-choose-section">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-6">
              <h2 className="section-title">Why Choose Us</h2>
              <p>Donec vitae odio quis nisl dapibus malesuada.
                Nullam ac aliquet velit. Aliquam vulputate velit imperdiet
                dolor tempor tristique.
              </p>

              <div className="row my-5">

                {servicesItems.map((item, index) => (
                  <div className="col-6 col-md-6" key={index}>
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

            <div className="col-lg-5">
              <div className="img-wrap">
                <img src={require("assets/images/why-choose-us-img.jpg")} alt="Image" className="img-fluid" />
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="we-help-section">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-7 mb-5 mb-lg-0">
              <div className="imgs-grid">
                <div className="grid grid-1"><img src={require("assets/images/img-grid-1.jpg")} alt="Untree.co" /></div>
                <div className="grid grid-2"><img src={require("assets/images/img-grid-2.jpg")} alt="Untree.co" /></div>
                <div className="grid grid-3"><img src={require("assets/images/img-grid-3.jpg")} alt="Untree.co" /></div>
              </div>
            </div>
            <div className="col-lg-5 ps-lg-5">
              <h2 className="section-title mb-4">We Help You Make Modern Interior Design</h2>
              <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi
                tristique senectus et netus et malesuada</p>

              <ul className="list-unstyled custom-list my-4">
                <li>Donec vitae odio quis nisl dapibus malesuada</li>
                <li>Donec vitae odio quis nisl dapibus malesuada</li>
                <li>Donec vitae odio quis nisl dapibus malesuada</li>
                <li>Donec vitae odio quis nisl dapibus malesuada</li>
              </ul>
              <p><a herf="#" className="btn">Explore</a></p>
            </div>
          </div>
        </div>
      </div>

      <div className="popular-product">
        <div className="container">
          <div className="row">

            {itemsProduct.map((item, index) => (
              <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0" key={index}>
                <div className="product-item-sm d-flex">
                  <div className="thumbnail">
                    <img src={require(`assets/images/product-${item}.png`)} alt="Image" className="img-fluid" />
                  </div>
                  <div className="pt-3">
                    <h3>Nordic Chair</h3>
                    <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio </p>
                    <p><a href="#">Read More</a></p>
                  </div>
                </div>
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

      <div className="blog-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-6">
              <h2 className="section-title">Recent Blog</h2>
            </div>
            <div className="col-md-6 text-start text-md-end">
              <a href="#" className="more">View All Posts</a>
            </div>
          </div>

          <div className="row">

            {itemsProduct.map((item, index) => (
              <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0" key={index}>
                <div className="post-entry">
                  <a href="#" className="post-thumbnail">
                    <img src={require(`assets/images/post-${item}.jpg`)} alt="Image" className="img-fluid" />
                  </a>
                  <div className="post-content-entry">
                    <h3><a href="#">First Time Home Owner Ideas</a></h3>
                    <div className="meta">
                      <span>by <a href="#">Kristin Watson</a></span>
                      <span>on <a href="#">Dec 19, 2021</a></span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;