import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import DaumPostcode from 'react-daum-postcode';
import {useDispatch, useSelector} from 'react-redux';
import {setPostData} from "../store/userCommon";
import SimpleBar from 'simplebar-react';


export default function SignUp() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [passwordInputValue, setPasswordInputValue] = useState('');
  const [passwordCheckInputValue, setPasswordCheckInputValue] = useState('');

  const passwordHandleChange = (event) => {
    setPasswordInputValue(event.target.value);
  };
  const passwordCheckHandleChange = (event) => {
    setPasswordCheckInputValue(event.target.value);
  };

  const signUpResult = () => {
    if(passwordInputValue === passwordCheckInputValue) {
      navigate('/Home')
    } else {
      alert('비밀번호가 일치하지 않습니다! 다시 한번 확인해주세요.')
    }
  };

  const [postState, setPostState] = useState(false);
  const [showModalValue, setShowModalValue] = useState(false);
  const [inputAddressValue, setInputAddressValue] = useState('');
  const [inputZipCodeValue, setInputZipCodeValue] = useState('');

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

  console.log(postCode)
  console.log(address)

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

  const goBack = () => {
    navigate(-1)
  }

  const [simpleBarPadding, setSimpleBarPadding] = useState();
  const [postModalWidth, setPostModalWidth] = useState('');
  const [postModalHeight, setPostModalHeight] = useState('');
  const [postModalBorder, setPostModalBorder] = useState('');
  const [postModalPadding, setPostModalPadding] = useState('');

  useEffect(() => {
    const browserWidth = window.innerWidth
    if(browserWidth < 768) {
      setSimpleBarPadding(1.6)
      setPostModalWidth('100vw')
      setPostModalHeight('100%')
      setPostModalBorder('none')
      setPostModalPadding('0')
    } else {
      setSimpleBarPadding(4)
      setPostModalWidth('40rem')
      setPostModalHeight('50rem')
      setPostModalBorder('4px double rgba(77, 134, 156, 0.4)')
      setPostModalPadding('0.8rem')
    }
  })

  const postCodeStyle = {
    width: `${postModalWidth}`,
    height: `${postModalHeight}`,
    border: `${postModalBorder}`,
    padding: `${postModalPadding}`,
    borderRadius: '0.8rem',
    display: postState ? 'block' : 'none',
  };

  return (
    <div className="app">
      <div className="sign_up_content_wrap">
        <section className="input_field_window">

          <SimpleBar style={{ padding: `0 ${simpleBarPadding}rem`, maxHeight: "calc(100%)"}} autoHide={false}>
            <div className="scroll_position">
              <h2>회원 가입</h2>
              <p>회원이 되어 다양한 혜택을 경험해보세요!</p>

              <div className="form-group">
                <div className="col-md-6">
                  <label htmlFor="c_fname" className="text-black">아이디</label>
                  <div className="stretch">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="아이디 입력(영문, 숫자)"
                    />
                    <button className="side_btn btn btn-black">중복확인</button>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <div className="col-md-6">
                  <label htmlFor="password" className="text-black">비밀번호</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="비밀번호 입력(영문, 숫자 포함 8~20자)"
                    id="password"
                    value={passwordInputValue}
                    onChange={passwordHandleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="col-md-6">
                  <label htmlFor="passwordCheck" className="text-black">비밀번호 확인</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="다시 한번 입력해 주세요."
                    id="passwordCheck"
                    value={passwordCheckInputValue}
                    onChange={passwordCheckHandleChange}
                  />
                </div>
              </div>

              <div className="divider" />

              <div className="form-group">
                <div className="col-md-6">
                  <label htmlFor="userName" className="text-black">이름</label>
                  <input
                    type="text"
                    className="form-control"
                    id="userName"
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="col-md-6">
                  <label htmlFor="birthDate" className="text-black">생년월일</label>
                  <input
                    type="text"
                    className="form-control"
                    id="birthDate"
                  />
                </div>
              </div>

              <div className="form-group address">
                <div className="col-md-6">
                  <label htmlFor="postNum" className="text-black">주소</label>
                  <div className="post_num">
                    <input
                      type="text"
                      className="form-control"
                      id="postNum"
                      onChange={handlePostCode}
                      onClick={() => showPostModal()}
                      value={postCode}
                      readOnly
                    />
                    {/* daum postcode service api 연동하기 */}
                    <button onClick={() => showPostModal()} className="side_btn btn btn-black">우편번호</button>
                  </div>
                </div>
              </div>

              <div className="form-group detail_address">
                <input
                  type="text"
                  className="form-control"
                  onChange={handleAddress}
                  onClick={() => showPostModal()}
                  value={address}
                  readOnly
                />
              </div>

              <div className="form-group detail_address">
                <input type="text" className="form-control" placeholder="상세 주소를 입력해주세요." />
              </div>

              <div className="divider" />

              <div className="form-group">
                <div className="col-md-6">
                  <label htmlFor="phoneNum" className="text-black">휴대폰 번호</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="'-'를 제외하고 입력해주세요."
                    id="phoneNum"
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="col-md-6">
                  <label htmlFor="certificateNum" className="text-black">인증번호</label>
                  <div className="stretch">
                    <input
                      type="text"
                      className="form-control"
                      id="certificateNum"
                    />
                    <button className="side_btn btn btn-black">인증하기</button>
                  </div>
                </div>
              </div>

              <div className="signUp_btn_wrap">
                <button className="goBack_btn" onClick={() => goBack()}>뒤로가기</button>
                <button className="signUp_btn" onClick={() => signUpResult()}>가입하기</button>
              </div>

            </div>
          </SimpleBar>

        </section>
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

