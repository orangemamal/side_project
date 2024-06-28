import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import Slider from "react-slick";

export default function Hero({ onCartPage, onCheckoutPage }) {
  let content;

  const [cartPage, setCartPage] = useState(onCartPage)
  const [checkoutPage, setCheckoutPage] = useState(onCheckoutPage)
  const [added, setAdded] = useState(false);

  useEffect(() => {
    onCartPage === true || onCheckoutPage === true ? setAdded(true) : setAdded(false)

    // 조건을 걸어서 두번 호출됨을 방지
    if (onCartPage !== cartPage) {
      setCartPage(onCartPage);
    }
    if (onCheckoutPage !== checkoutPage) {
      setCheckoutPage(onCheckoutPage);
    }
  }, [onCartPage, onCheckoutPage]) // 의존성 배열에 값을 추가 해야 값이 변경될 때 마다 체크함

  let slickValue = [
    {
      mainTitleTop: 'Modern Interior',
      mainTitleBottom: 'DESIGN STUDIO',
      subTitleTop: '놓기만 해도 인테리어가 되는 가구,',
      subTitleBottom: 'FurNi를 만나보세요',
    },
    {
      mainTitleTop: 'Stylish Home',
      mainTitleBottom: 'DESIGN SOLUTIONS',
      subTitleTop: '당신의 집을 스타일리시하게 바꿔줄,',
      subTitleBottom: 'FurNi 가구를 만나보세요.',
    },
    {
      mainTitleTop: 'Sophisticated',
      mainTitleBottom: 'INTERIOR CONCEPTS',
      subTitleTop: 'FurNi와 함께하는 고품격 인테리어,',
      subTitleBottom: '지금 시작해보세요.',
    },
    {
      mainTitleTop: 'Innovative',
      mainTitleBottom: 'HOME DECOR',
      subTitleTop: '창의적인 디자인의 FurNi 가구로 당신의 집을,',
      subTitleBottom: '새롭게 꾸며보세요.',
    },
  ]

  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 3000,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  if (cartPage) {
    content = (
      <div className="hero">
        <div className="inner_container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>
                  <i className="fa-brands fa-opencart"></i>
                  <span>장바구니</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (checkoutPage) {
    content = (
      <div className="hero">
        <div className="inner_container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>
                  <i className="fa-solid fa-credit-card"></i>
                  <span>결제하기</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    content = (
      <div>
        <Slider {...settings}>
          {slickValue.map((item, index) => (
            <div className="col-lg-5" key={index}>
              <div className="intro-excerpt">
                <h1>
                  <div className="top">{ item.mainTitleTop }</div>
                  <span className="bottom d-block">{ item.mainTitleBottom }</span>
                </h1>
                <p className="sub_info mb-4">
                  <span>{ item.subTitleTop }</span>
                  <span>{ item.subTitleBottom }</span>
                </p>
                <p className="multi_btn_wrap">
                  <Link to="/shop">
                    <button className="btn btn-secondary me-3">구매하기</button>
                  </Link>
                  <Link to="#">
                    <button className="btn btn-white-outline">상세보기</button>
                  </Link>
                </p>
              </div>
            </div>
          ))}
        </Slider>
        <div className="col-lg-7">
          <div className="hero-img-wrap">
            <img src={require("assets/images/couch.png")} className="img-fluid" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`hero ${added ? 'noneMain' : ''}`}>
      <div className="container">
        <div className="row justify-content-between position">
          {content}
        </div>
      </div>
    </div>
  );
};
