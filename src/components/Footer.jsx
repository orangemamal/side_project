import React from 'react';
import {Link} from "react-router-dom";

export default function Footer() {
  return (
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
                    <div className="icon envelope" />
                  </span>
                <span>이메일로 FurNi의 최신 뉴스 구독하기</span>
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

        <div className="row g-5 mb-5 menu_wrap">
          <div className="col-lg-4 left_side">
            <div className="mb-4 footer-logo-wrap">
              <Link className="footer-logo" to="/home">
                <img src={require("assets/images/img_logo_color.svg").default} alt="FurNi"/>
              </Link>
            </div>
            <p className="mb-4 support">
              <div className="center">고객센터</div>
              <div className="customer_center">1544-8282</div>
              <div>고객님의 따뜻한 한마디, 감사합니다</div>
              <div>일반상담 : PM 01:00 ~ PM 04:00</div>
              <div>카카오톡상담 : AM 10:00 ~ PM 04:00</div>
              <div>점심시간 : PM 12:00 ~ PM 01:00</div>
            </p>

            <ul className="list-unstyled custom-social">
              <li><a href="#"><span className="fa fa-brands fa-facebook-f"></span></a></li>
              <li><a href="#"><span className="fa fa-brands fa-twitter"></span></a></li>
              <li><a href="#"><span className="fa fa-brands fa-instagram"></span></a></li>
              <li><a href="#"><span className="fa fa-brands fa-linkedin"></span></a></li>
            </ul>
          </div>

          <div className="col-lg-8 right_side">
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
  );
};
