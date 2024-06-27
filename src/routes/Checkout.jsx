import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import DaumPostcode from 'react-daum-postcode';
import {useDispatch, useSelector} from 'react-redux';
import {setPostData} from "../store/userCommon";

export default function Cart({ onPageRender }) {

  const navigate = useNavigate()
  const dispatch = useDispatch();

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

  const [postState, setPostState] = useState(false);
  const [showModalValue, setShowModalValue] = useState(false);
  const [inputAddressValue, setInputAddressValue] = useState('');
  const [inputZipCodeValue, setInputZipCodeValue] = useState('');

  const postCodeStyle = {
    width: '40rem',
    height: '50rem',
    border: '4px double rgba(77, 134, 156, 0.4)',
    padding: '0.8rem',
    borderRadius: '0.8rem',
    display: postState ? 'block' : 'none',
  };

  const onCompletePost = data => {
    console.log(data)
    dispatch(setPostData({ postCode: data.zonecode, address: data.address }))

    setInputZipCodeValue(data.zonecode)
    setInputAddressValue(data.address)

    setShowModalValue(false)
    setPostState(false)
  };

  const postCode = useSelector(state => state.userCommon.postCode);
  const address = useSelector(state => state.userCommon.address);

  const handlePostCode = () => {
    setInputZipCodeValue(postCode);
  }
  const handleAddress = () => {
    setInputAddressValue(address);
  }

  const showPostModal = () => {
    setShowModalValue(true)
    setPostState(true)
  }
  const closeModal = () => {
    setShowModalValue(false)
    setPostState(false)
  }

  const [nameInputValue, setNameInputValue] = useState('');
  const [phoneInputValue, setPhoneCheckInputValue] = useState('');

  const nameHandleChange = (event) => {
    setNameInputValue(event.target.value);
  };
  const phoneHandleChange = (event) => {
    if (/^\d*$/.test(event.target.value) && event.target.value.length <= 11) {
      setPhoneCheckInputValue(event.target.value);
    }
  };

  const [orderPassword, setOrderPassword] = useState('');

  const numberMaxLength = (event) => {
    if (/^\d*$/.test(event.target.value) && event.target.value.length <= 4) {
      setOrderPassword(event.target.value)
    }
  }

  const [nameInputValueSecond, setNameInputValueSecond] = useState('');
  const [phoneInputValueSecond, setPhoneCheckInputValueSecond] = useState('');

  const nameHandleChangeSecond = (event) => {
    setNameInputValueSecond(event.target.value);
  };

  const phoneHandleChangeSecond = (event) => {
    if (/^\d*$/.test(event.target.value) && event.target.value.length <= 11) {
      setPhoneCheckInputValueSecond(event.target.value);
    }
  };

  const orderInfoPatch = () => {
    console.log(nameInputValue)
    console.log(phoneInputValue)

    if(nameInputValue !== '' || phoneInputValue !== '') {
      setNameInputValueSecond(nameInputValue)
      setPhoneCheckInputValueSecond(phoneInputValue)
    } else {
      alert("이름 또는 휴대전화 정보를 작성하지 않으셨어요!")
    }

    console.log(nameInputValueSecond) // 이름도 같음
    console.log(phoneInputValueSecond) // 클릭시에 여기에 넘겨야함 set에
  }


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
                  <label htmlFor="input_01" className="text-black">이름<span className="text-danger">(필수)</span></label>
                  <input
                    type="text"
                    className="form-control"
                    id="input_01"
                    name="c_fname"
                    value={nameInputValue}
                    onChange={nameHandleChange}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="input_02" className="text-black">주문조회 비밀번호<span className="text-danger">(필수)</span></label>
                  <input
                    type="number"
                    className="form-control"
                    id="input_02"
                    name="c_lname"
                    placeholder="숫자 4자리"
                    maxLength="4"
                    onChange={numberMaxLength}
                    value={orderPassword}
                  />
                </div>
              </div>

              <div className="form-group row">
                <div className="col-md-6">
                  <label htmlFor="input_03" className="text-black">휴대전화<span className="text-danger">(필수)</span></label>
                  <input
                    type="number"
                    className="form-control"
                    id="input_03"
                    name="c_fname"
                    value={phoneInputValue}
                    onChange={phoneHandleChange}
                    placeholder="'-'없이 입력해주세요."
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="input_04" className="text-black">이메일</label>
                  <input type="text" className="form-control" id="input_04" name="c_lname"/>
                </div>
              </div>

              <div data-type-divider="line" />

              <div className="form-group row">
                <div className="col-md-12">
                  <label className="text-black">배송지 선택</label>
                  <div className="radio_box">

                    <span className="radio_bundle">
                      <input type="radio" id="sameOrder" name="delivery" onClick={() => orderInfoPatch()} />
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
                  <label htmlFor="input_05" className="text-black">이름<span className="text-danger">(필수)</span></label>
                  <input
                    type="text"
                    className="form-control"
                    id="input_05"
                    name="c_fname"
                    value={nameInputValueSecond}
                    onChange={nameHandleChangeSecond}
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="input_06" className="text-black">휴대전화<span className="text-danger">(필수)</span></label>
                  <input
                    type="text"
                    className="form-control"
                    id="input_06"
                    name="c_lname"
                    value={phoneInputValueSecond}
                    onChange={phoneHandleChangeSecond}
                    placeholder="'-'없이 입력해주세요."
                  />
                </div>
              </div>

              <div className="form-group row">
                <div className="col-md-12">
                  <label htmlFor="input_07" className="text-black">주소<span className="text-danger">(필수 항목)</span></label>
                  <div className="post_num">
                    <input
                      type="text"
                      className="form-control"
                      id="input_07"
                      name="c_address"
                      onChange={handlePostCode}
                      value={postCode}
                      onClick={() => showPostModal()}
                      readOnly
                    />
                    <button className="btn btn-primary" onClick={() => showPostModal()}>우편번호</button>
                  </div>
                </div>
              </div>

              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  onChange={handleAddress}
                  onClick={() => showPostModal()}
                  value={address}
                  readOnly
                />
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

                  <label htmlFor="coufonInput" className="coupon_label text-black mb-3">가지고 계신 쿠폰 번호를 입력해주세요.</label>
                  <div className="input-group w-75 couponcode-wrap">
                    <input type="text" className="form-control me-2" id="coufonInput" placeholder="Coupon Code"
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
                      무통장입금
                    </h3>

                    <div className={`collapse ${firstIsActive ? 'show' : ''}`} id="collapsebank">
                      <div>
                        <p className="mb-0">
                          FurNi에 지정된 계좌로 직접 입금하는 방식입니다. (인터넷뱅킹, 텔레뱅킹, ATM, 은행방문)
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="payment_box border p-3 mb-3" onClick={showSecondDetailComment}>
                    <h3 className="h6 mb-0">
                      실시간 계좌이체
                    </h3>

                    <div className={`collapse ${secondIsActive ? 'show' : ''}`} id="collapsebank">
                      <div>
                        <p className="mb-0">
                          은행을 거치지않고 회원님 계좌에서 바로 이체되는 편리한 서비스입니다. (이체수수료무료 / 공인인증서필수)
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="payment_box border p-3 mb-3" onClick={showThirdDetailComment}>
                    <h3 className="h6 mb-0">
                      휴대폰 결제
                    </h3>

                    <div className={`collapse ${thirdIsActive ? 'show' : ''}`} id="collapsebank">
                      <div>
                        <p className="mb-0">
                          인증번호를 통해 간단히 휴대폰으로 결제처리가 되면 익월통신요금에 합산청구됩니다.
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

      <div className={`modal_wrap ${showModalValue ? 'show' : ''}`}>
        <div className="backdrop" />

        <div className={`modal_content animate__animated ${showModalValue ? 'animate__fadeIn' : ''}`}>
          <button className="close_btn" onClick={() => closeModal()}>
            <i className="fa-solid fa-circle-xmark"></i>
          </button>

          <DaumPostcode
            style={postCodeStyle}
            onComplete={onCompletePost}
          ></DaumPostcode>
        </div>
      </div>

    </div>
);
};
