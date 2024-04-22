// import { Outlet, Link, useLoaderData, } from "react-router-dom";
import Slick from "../components/Slick";

export default function Root() {
  const itemsProduct = [1, 2, 3];

  return (
    <div className="app">
      <nav className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" aria-label="Furni navigation bar">

        <div className="container">
          <a className="navbar-brand" href="index.html">Furni<span>.</span></a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni"
                  aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsFurni">
            <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
              <li className="nav-item active">
                <a className="nav-link" href="index.html">Home</a>
              </li>
              <li><a className="nav-link" href="shop.html">Shop</a></li>
              <li><a className="nav-link" href="about.html">About us</a></li>
              <li><a className="nav-link" href="services.html">Services</a></li>
              <li><a className="nav-link" href="blog.html">Blog</a></li>
              <li><a className="nav-link" href="contact.html">Contact us</a></li>
            </ul>

            <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
              <li>
                <a className="nav-link" href="#">
                  <img src={require("assets/images/user.svg").default} />
                </a>
              </li>
              <li>
                <a className="nav-link" href="cart.html">
                  <img src={require("assets/images/cart.svg").default} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>Modern Interior <span clsas="d-block">Design Studio</span></h1>
                <p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
                  vulputate
                  velit imperdiet dolor tempor tristique.</p>
                <p><a href="" className="btn btn-secondary me-2">Shop Now</a><a href="#"
                                                                                className="btn btn-white-outline">Explore</a>
                </p>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="hero-img-wrap">
                <img src={require("assets/images/couch.png")} className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>

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
                      <img src={require("assets/images/cross.svg").default} className="img-fluid" />
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
                <div className="col-6 col-md-6">
                  <div className="feature">
                    <div className="icon">
                      <img src={require("assets/images/truck.svg").default} alt="Image" className="imf-fluid" />
                    </div>
                    <h3>Fast &amp; Free Shipping</h3>
                    <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                  </div>
                </div>

                <div className="col-6 col-md-6">
                  <div className="feature">
                    <div className="icon">
                      <img src={require("assets/images/bag.svg").default} alt="Image" className="imf-fluid" />
                    </div>
                    <h3>Easy to Shop</h3>
                    <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                  </div>
                </div>

                <div className="col-6 col-md-6">
                  <div className="feature">
                    <div className="icon">
                      <img src={require("assets/images/support.svg").default} alt="Image" className="imf-fluid" />                    </div>
                    <h3>24/7 Support</h3>
                    <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                  </div>
                </div>

                <div className="col-6 col-md-6">
                  <div className="feature">
                    <div className="icon">
                      <img src={require("assets/images/return.svg").default} alt="Image" className="imf-fluid" />
                    </div>
                    <h3>Hassle Free Returns</h3>
                    <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                  </div>
                </div>

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

      <footer className="footer-section">
        <div className="container relative">

          <div className="sofa-img">
            <img src={require("assets/images/sofa.png")} alt="Image" className="img-fluid" />
          </div>

          <div className="row">
            <div className="col-lg-8">
              <div className="subscription-form">
                <h3 className="d-flex align-items-center">
                  <span className="me-1">
                    <img src={require("assets/images/envelope-outline.svg").default} className="img-fluid" />
                  </span>
                  <span>Subscribe to Newsletter</span>
                </h3>

                <form action="#" className="row g-3">
                  <div className="col-auto">
                    <input type="text" className="form-control" placeholder="Enter your name" />
                  </div>
                  <div className="col-auto">
                    <input type="email" className="form-control" placeholder="Enter your email" />
                  </div>
                  <div className="col-auto">
                    <button className="btn btn-primary">
                      <span className="fa fa-paper-plane"></span>
                    </button>
                  </div>
                </form>

              </div>
            </div>
          </div>

          <div className="row g-5 mb-5">
            <div className="col-lg-4">
              <div className="mb-4 footer-logo-wrap"><a href="#" className="footer-logo">Furni<span>.</span></a></div>
              <p className="mb-4">Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus
                malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
                Pellentesque
                habitant</p>

              <ul className="list-unstyled custom-social">
                <li><a href="#"><span className="fa fa-brands fa-facebook-f"></span></a></li>
                <li><a href="#"><span className="fa fa-brands fa-twitter"></span></a></li>
                <li><a href="#"><span className="fa fa-brands fa-instagram"></span></a></li>
                <li><a href="#"><span className="fa fa-brands fa-linkedin"></span></a></li>
              </ul>
            </div>

            <div className="col-lg-8">
              <div className="row links-wrap">
                <div className="col-6 col-sm-6 col-md-3">
                  <ul className="list-unstyled">
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact us</a></li>
                  </ul>
                </div>

                <div className="col-6 col-sm-6 col-md-3">
                  <ul className="list-unstyled">
                    <li><a href="#">Support</a></li>
                    <li><a href="#">Knowledge base</a></li>
                    <li><a href="#">Live chat</a></li>
                  </ul>
                </div>

                <div className="col-6 col-sm-6 col-md-3">
                  <ul className="list-unstyled">
                    <li><a href="#">Jobs</a></li>
                    <li><a href="#">Our team</a></li>
                    <li><a href="#">Leadership</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                  </ul>
                </div>

                <div className="col-6 col-sm-6 col-md-3">
                  <ul className="list-unstyled">
                    <li><a href="#">Nordic Chair</a></li>
                    <li><a href="#">Kruzo Aero</a></li>
                    <li><a href="#">Ergonomic Chair</a></li>
                  </ul>
                </div>
              </div>
            </div>

          </div>

          <div className="border-top copyright">
            <div className="row pt-4">
              <div className="col-lg-6">
                <p className="mb-2 text-center text-lg-start">Copyright &copy;
                  <script>document.write(new Date().getFullYear());</script>
                  . All Rights Reserved. &mdash; Designed with love by <a
                    href="https://untree.co">Untree.co</a> Distributed
                  By <a href="https://themewagon.com">ThemeWagon</a>
                </p>
              </div>

              <div className="col-lg-6 text-center text-lg-end">
                <ul className="list-unstyled d-inline-flex ms-auto">
                  <li className="me-4"><a href="#">Terms &amp; Conditions</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                </ul>
              </div>

            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}

