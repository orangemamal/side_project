import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';

export default function Cart({ onPageRender }) {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/ThankYou')
  }

  useEffect(() => {
    onPageRender();
  }, [onPageRender]);

  const orderItems = [
    {productName: '프리미엄 침대형의자', quantity: 1, price: 80000},
    {productName: '프리미엄 침대형의자', quantity: 1, price: 80000},
  ];

  const [firstIsActive, setFirstIsActive] = useState(false)
  const [secondIsActive, setSecondIsActive] = useState(false)
  const [thirdIsActive, setThirdIsActive] = useState(false)

  const showFirstDetailComment = () => {
    setFirstIsActive(!firstIsActive)
  };
  const showSecondDetailComment = () => {
    setSecondIsActive(!secondIsActive)
  };
  const showThirdDetailComment = () => {
    setThirdIsActive(!thirdIsActive)
  };

  return (
    <div className="untree_co-section checkout">
      <div className="container">

        <div className="row mb-5">
          <div className="col-md-12">
            <div className="return_login_box border p-4 rounded" role="alert">
              FurNi의 다양한 할인 혜택을 받고 싶으시다면<br/>
              회원 가입과 로그인을 위해 <Link to="/Login">여기</Link>를 클릭해주세요.
            </div>
          </div>
        </div>

        {/* left_side */}
        <div className="row checkout_content left">
          <div className="col-md-6 mb-5 mb-md-0">
            <h2 className="h3 mb-3 text-black">주문 정보</h2>
            <div className="p-3 p-lg-5 border bg-white">
              {/*<div className="form-group">*/}
              {/*  <label htmlFor="c_country" className="text-black">Country <span className="text-danger">*</span></label>*/}
              {/*  <select id="c_country" className="form-control">*/}
              {/*    <option value="1">Select a country</option>*/}
              {/*    <option value="2">bangladesh</option>*/}
              {/*    <option value="3">Algeria</option>*/}
              {/*    <option value="4">Afghanistan</option>*/}
              {/*    <option value="5">Ghana</option>*/}
              {/*    <option value="6">Albania</option>*/}
              {/*    <option value="7">Bahrain</option>*/}
              {/*    <option value="8">Colombia</option>*/}
              {/*    <option value="9">Dominican Republic</option>*/}
              {/*  </select>*/}
              {/*</div>*/}

              <div className="form-group row mt20">
                <div className="col-md-6">
                  <label htmlFor="c_fname" className="text-black">이름<span className="text-danger">(필수)</span></label>
                  <input type="text" className="form-control" id="c_fname" name="c_fname"/>
                </div>
                <div className="col-md-6">
                  <label htmlFor="c_lname" className="text-black">결제 비밀번호<span className="text-danger">(필수)</span></label>
                  <input type="text" className="form-control" id="c_lname" name="c_lname"/>
                </div>
              </div>

              <div className="form-group row">
                <div className="col-md-6">
                  <label htmlFor="c_fname" className="text-black">휴대전화<span className="text-danger">(필수)</span></label>
                  <input type="text" className="form-control" id="c_fname" name="c_fname"/>
                </div>
                <div className="col-md-6">
                  <label htmlFor="c_lname" className="text-black">이메일</label>
                  <input type="text" className="form-control" id="c_lname" name="c_lname"/>
                </div>
              </div>

              <div data-type-divider="line" />

              <div className="form-group row">
                <div className="col-md-12">
                  <label className="text-black">배송지 선택</label>
                  <div className="radio_box">

                    <span className="radio_bundle">
                      <input type="radio" id="sameOrder" name="delivery" />
                      <label htmlFor="sameOrder">
                        <div className="icon radio_inactive" />
                        <h4>주문자 정보와 동일</h4>
                      </label>
                    </span>

                    <span className="radio_bundle">
                      <input type="radio" id="selfWrite" name="delivery" />
                      <label htmlFor="selfWrite">
                        <div className="icon radio_inactive" />
                        <h4>직접입력</h4>
                      </label>
                    </span>

                  </div>
                </div>
              </div>

              <div className="form-group row mt20">
                <div className="col-md-6">
                  <label htmlFor="c_fname" className="text-black">이름<span className="text-danger">(필수)</span></label>
                  <input type="text" className="form-control" id="c_fname" name="c_fname"/>
                </div>
                <div className="col-md-6">
                  <label htmlFor="c_lname" className="text-black">휴대전화<span className="text-danger">(필수)</span></label>
                  <input type="text" className="form-control" id="c_lname" name="c_lname" placeholder="" />
                </div>
              </div>

              <div className="form-group row">
                <div className="col-md-12">
                  <label htmlFor="c_address" className="text-black">주소<span className="text-danger">(필수 항목)</span></label>
                  <div className="post_num">
                    <input type="text" className="form-control" id="c_address" name="c_address" />
                    {/* daum postcode service api 연동하기 */}
                    <button className="btn btn-primary">우편번호</button>
                  </div>
                </div>
              </div>

              <div className="form-group mt-3">
                <input type="text" className="form-control" />
              </div>

              <div className="form-group mt-3">
                <input type="text" className="form-control" placeholder="상세 주소" />
              </div>

              <div className="form-group">
                <label htmlFor="c_order_notes" className="text-black">배송메모</label>
                <textarea
                  name="c_order_notes"
                  id="c_order_notes"
                  cols="30"
                  rows="5"
                  className="form-control"
                  placeholder="배송시에 전달하고 싶은 말씀을 작성해주세요."
                >
                </textarea>
              </div>
            </div>
          </div>


          {/* right_side */}
          <div className="col-md-6 checkout_content right">

            <div className="row mb-5">
              <div className="col-md-12">
                <h2 className="h3 mb-3 text-black">할인 쿠폰</h2>
                <div className="p-3 p-lg-5 border bg-white">

                  <label htmlFor="c_code" className="coupon_label text-black mb-3">가지고 계신 쿠폰 번호를 입력해주세요.</label>
                  <div className="input-group w-75 couponcode-wrap">
                    <input type="text" className="form-control me-2" id="c_code" placeholder="Coupon Code"
                           aria-label="Coupon Code" aria-describedby="button-addon2" />
                    <div className="input-group-append">
                      <button className="btn btn-black btn-sm" type="button" id="button-addon2">쿠폰 적용하기</button>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <div className="row mb-5">
              <div className="col-md-12">
                <h2 className="h3 mb-3 text-black">주문 상품</h2>
                <div className="p-3 p-lg-5 border bg-white">
                  <table className="order table site-block-order-table mb-5">
                    <thead>
                      <tr>
                        <th className="center">상품명</th>
                        <th className="center">수량</th>
                        <th className="center">가격</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orderItems.map((item, index) => (
                        <tr key={index}>
                          <td>{ item.productName }</td>
                          <td className="center">{ item.quantity }</td>
                          <td className="center">{ item.price }</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <div className="payment_box border p-3 mb-3" onClick={showFirstDetailComment}>
                    <h3 className="h6 mb-0">
                      간편 결제
                    </h3>

                    <div className={`collapse ${firstIsActive ? 'show' : ''}`} id="collapsebank">
                      <div>
                        <p className="mb-0">
                          Make your payment directly into our bank account. Please use your Order ID
                          as the payment reference. Your order won’t be shipped until the funds have cleared in our
                          account.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="payment_box border p-3 mb-3" onClick={showSecondDetailComment}>
                    <h3 className="h6 mb-0">
                      일반 결제
                    </h3>

                    <div className={`collapse ${secondIsActive ? 'show' : ''}`} id="collapsebank">
                      <div>
                        <p className="mb-0">
                          Make your payment directly into our bank account. Please use your Order ID
                          as the payment reference. Your order won’t be shipped until the funds have cleared in our
                          account.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="form-group right">
                    <button className="btn btn-black btn-lg py-3 btn-block"
                            onClick={handleClick}>주문하기
                    </button>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
);
};
