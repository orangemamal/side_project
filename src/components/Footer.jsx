import React, { useMemo } from 'react';
import {Link} from "react-router-dom";

export default function Footer() {

  const itemsCustomSocial = [
    {no: 1, logo: 'fa-facebook-f', link: '#'},
    {no: 2, logo: 'fa-twitter', link: '#'},
    {no: 3, logo: 'fa-instagram', link: '#'},
    {no: 3, logo: 'fa-linkedin', link: '#'},
  ];

  const itemsLinkWrapFirst = [
    {title: '무통장 입금계좌',
      detail: [
        {list_1: '국민 123456-12-123456'},
        {list_2: '농협 123456-12-123456'},
        {list_3: '예금주 : (주)FurNi'},
      ]
    },
  ];
  const itemsLinkWrapSecond = [
    {title: '교환·반품',
      detail: [
        {list_1: '제품 배송중이나 제품자체의 하자가 있는 경우 절차를 안내해드립니다.'},
        {list_2: '반품시 보내주실 주소'},
        {list_3: '서울특별시 종로구 청와대로 1'},
      ]
    },
  ];
  const itemsLinkWrapThird = [
    {title: 'FurNi 멤버쉽',
      detail: [
        {list_1: 'FurNi 회원이시라구요?'},
        {list_2: '할인쿠폰 및 적립금 등 다양하게 할인 받으세요'},
      ]
    },
  ];
  const itemsLinkWrapFourth = [
    {title: '이용가이드',
      detail: [
        {list_1: 'FurNi데코시리즈'},
        {list_2: '브랜드스토리'},
        {list_3: '이벤트'},
        {list_4: '협찬문의'},
        {list_5: '고객센터'},
        {list_6: '배송문의'},
        {list_7: '이용약관'},
        {list_8: '개인정보처리방침'},
        {list_9: '포토리뷰'},
      ]
    },
  ];

  const currentYear = useMemo(() => new Date().getFullYear(), [])

  return (
    <footer className="footer-section">
      <div className="container relative">

        <div className="sofa-img">
          <img src={require("assets/images/sofa.png")} alt="Image" className="img-fluid animate__animated hover-animate-shakeX" />
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
                  <input type="text" className="form-control" placeholder="성함" />
                </div>
                <div className="col-auto">
                  <input type="email" className="form-control" placeholder="이메일" />
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

        <div data-type="line"/>

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
              {itemsLinkWrapFirst.map((item, index) => (
                <div className="bundle col-6 col-sm-6 col-md-3" key={index}>
                  <h4>{item.title}</h4>
                  {item.detail.map((detailItem, detailIndex) => (
                    <ul className="list-unstyled not_link" key={detailIndex}>
                      <li>{detailItem.list_1}</li>
                      <li>{detailItem.list_2}</li>
                      <li>{detailItem.list_3}</li>
                  </ul>
                  ))}
                </div>
              ))}

              {itemsLinkWrapSecond.map((item, index) => (
                <div className="bundle col-6 col-sm-6 col-md-3" key={index}>
                  <h4>{item.title}</h4>
                  {item.detail.map((detailItem, detailIndex) => (
                    <ul className="list-unstyled not_link" key={detailIndex}>
                      <li>{detailItem.list_1}</li>
                      <li>{detailItem.list_2}</li>
                      <li>{detailItem.list_3}</li>
                    </ul>
                  ))}
                </div>
              ))}

              {itemsLinkWrapThird.map((item, index) => (
                <div className="bundle col-6 col-sm-6 col-md-3" key={index}>
                  <h4>{item.title}</h4>
                  {item.detail.map((detailItem, detailIndex) => (
                    <ul className="list-unstyled" key={detailIndex}>
                      <li><a href="#">{detailItem.list_1}</a></li>
                      <li><a href="#">{detailItem.list_2}</a></li>
                    </ul>
                  ))}
                </div>
              ))}

              {itemsLinkWrapFourth.map((item, index) => (
                <div className="bundle col-6 col-sm-6 col-md-3" key={index}>
                  <h4>{item.title}</h4>
                  {item.detail.map((detailItem, detailIndex) => (
                    <ul className="list-unstyled" key={detailIndex}>
                      <li><a href="#">{detailItem.list_1}</a></li>
                      <li><a href="#">{detailItem.list_2}</a></li>
                      <li><a href="#">{detailItem.list_3}</a></li>
                      <li><a href="#">{detailItem.list_4}</a></li>
                      <li><a href="#">{detailItem.list_5}</a></li>
                      <li><a href="#">{detailItem.list_6}</a></li>
                      <li><a href="#">{detailItem.list_7}</a></li>
                      <li><a href="#">{detailItem.list_8}</a></li>
                      <li><a href="#">{detailItem.list_9}</a></li>
                    </ul>
                  ))}
                </div>
              ))}

            </div>
          </div>

        </div>

        <div className="border-top copyright">
          <div className="row pt-4">
            <div className="col-lg-6">
              <p className="mb-2 text-center text-lg-start">
                Copyright &copy; {currentYear}. All Rights Reserved.<br/>
                Designed with love by <a href="https://untree.co">Untree.co </a>
                Distributed By <a href="https://themewagon.com">ThemeWagon</a>
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
