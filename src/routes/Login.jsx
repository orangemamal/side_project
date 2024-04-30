import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const navigate = useNavigate();

  function loginCheck() {
    navigate('/main');
  }

  return (
    <div className="app">
      <div className="login">
        <div className="input_field_window">
          <div className="side left">
            <div className="comment top">DESIGN FURNITURE</div>
            <img src={require("assets/images/img_logo.svg").default} alt="FurNi"/>
            <div className="comment">Login to Your Account</div>
          </div>
          <div className="side right">
            <h3>WELCOME.</h3>
            <input type="text" placeholder="아이디"/>
            <input type="password" placeholder="비밀번호"/>
            <div className="sign_up_wrap">
              <div><span>FurNi</span>가 처음이신가요?</div>
              <button className="sign_up">회원가입</button>
            </div>
            <button className="login_btn" onClick={() => loginCheck()}>LOGIN</button>
          </div>
        </div>
      </div>
    </div>
  );
};

