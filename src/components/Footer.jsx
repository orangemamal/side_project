import React from 'react';
import {Link} from "react-router-dom";

export default function Footer() {

  const itemsCustomSocial = [
    {no: 1, logo: 'fa-facebook-f', link: '#'},
    {no: 2, logo: 'fa-twitter', link: '#'},
    {no: 3, logo: 'fa-instagram', link: '#'},
    {no: 3, logo: 'fa-linkedin', link: '#'},
  ];

  const itemsLinkWrap = [
    {title: '무통장 입금계좌',
      detail: [
        {list_1: '국민 123456-12-123456'},
        {list_2: '농협 123456-12-123456'},
        {list_3: '예금주 : (주)FurNi'},
      ]
    },
  ];

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
            <div className="mb-4 support">
              <p className="center">고객센터</p>
              <p className="customer_center">1544-8282</p>
              <p>고객님의 따뜻한 한마디, 감사합니다</p>
              <p>일반상담 : PM 01:00 ~ PM 04:00</p>
              <p>카카오톡상담 : AM 10:00 ~ PM 04:00</p>
              <p>점심시간 : PM 12:00 ~ PM 01:00</p>
            </div>

            <ul className="list-unstyled custom-social">
              {itemsCustomSocial.map((item, index) => (
                <li key={index}><a href={`${item.link}`}><span className={`fa fa-brands ${item.logo}`}></span></a></li>
              ))}
            </ul>
          </div>

          <div className="col-lg-8 right_side">
            <div className="row links-wrap">
              {itemsLinkWrap.map((item, index) => (
                <div className="col-6 col-sm-6 col-md-3" key={index}>
                  <h4>{item.title}</h4>
                  <ul className="list-unstyled">
                    {item.detail.forEach((detailItems) => {
                      console.log(detailItems)
                    })}
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact us</a></li>
                  </ul>
                </div>
              ))}

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
