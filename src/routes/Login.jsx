import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const navigate = useNavigate();

  function goSignUp() {
    navigate('/SignUp')
  }

  function loginCheck() {
    navigate(-1);
  }
  function notAllow() {
    alert("구현되지 않았습니다.")
  }

  const [startDelay, setStartDelay] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartDelay(true)
    }, 1000);

    // 컴포넌트 언마운트 시 타이머 정리
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      <div className="login">
        <div className="input_field_window">
          <div className="side left">
            <div className="comment top">가구를 디자인하다</div>
            <img className="animate__animated animate__jackInTheBox" src={require("assets/images/img_logo.svg").default} alt="FurNi"/>
          </div>
          <div className="side right">
            <h3 className={`animate__animated_scroll ${startDelay ? 'fadeInRight' : ''}`}>WELCOME.</h3>
            <input type="text" placeholder="아이디"/>
            <input type="password" placeholder="비밀번호"/>
            <div className="sign_up_wrap">
              <div className="flat">
                <div><span>FurNi</span>가 처음이신가요?</div>
                <button className="sign_up" onClick={() => goSignUp()}>회원가입</button>
              </div>
              <div className="flat">
                <div><span>비밀번호</span>를 잃어버리셨나요?</div>
                <button className="sign_up" onClick={() => notAllow()}>비밀번호 찾기</button>
              </div>
            </div>
            <button className="login_btn" onClick={() => loginCheck()}>LOGIN</button>
          </div>
        </div>
      </div>
    </div>
  );
};

