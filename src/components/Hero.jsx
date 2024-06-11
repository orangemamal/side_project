import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";

export default function Hero({ onCartPage, onCheckoutPage }) {
  let content;

  const [cartPage, setCartPage] = useState(onCartPage)
  const [checkoutPage, setCheckoutPage] = useState(onCheckoutPage)

  useEffect(() => {
    // 조건을 걸어서 두번 호출됨을 방지
    if (onCartPage !== cartPage) {
      setCartPage(onCartPage);
    }
    if (onCheckoutPage !== checkoutPage) {
      setCheckoutPage(onCheckoutPage);
    }
  }, [onCartPage, onCheckoutPage]) // 의존성 배열에 값을 추가 해야 값이 변경될 때 마다 체크함

  console.log(onCartPage)
  console.log(onCheckoutPage)

  if (cartPage) {
    content = (
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>
                  <i className="fa-solid fa-cart-flatbed"></i>
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
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>
                  <i className="fa-solid fa-credit-card"></i>
                  <span>결재하기</span>
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
        <div className="col-lg-5">
          <div className="intro-excerpt">
            <h1>
              Modern Interior<br />
              <span className="d-block">DESIGN STUDIO</span>
            </h1>
            <p className="sub_info mb-4">
              놓기만 해도 인테리어가 되는 가구<br />
              FurNi를 만나보세요
            </p>
            <p className="multi_btn_wrap">
              <Link to="#">
                <button className="btn btn-secondary me-3">구매하기</button>
              </Link>
              <Link to="#">
                <button className="btn btn-white-outline">상세보기</button>
              </Link>
            </p>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="hero-img-wrap">
            <img src={require("assets/images/couch.png")} className="img-fluid" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="hero">
      <div className="container">
        <div className="row justify-content-between position">
          {content}
        </div>
      </div>
    </div>
  );
};
