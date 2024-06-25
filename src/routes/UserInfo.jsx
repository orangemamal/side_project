import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function UserInfo() {

  const navigate = useNavigate();

  return (
    <div className="app">
      <div className="user_info_wrap">

        <h2>회원 정보</h2>

        <div className="name_box">
          <i className="fa-solid fa-circle-user"></i>
          <h4>{ '홍길동' }</h4>
        </div>

        <div className="info_box_wrap">

          <div className="info_box_bundle">
            <div className="left">아이디</div>
            <div className="right">{ 'asdf1234' }</div>
          </div>

          <div className="info_box_bundle">
            <div className="left">생년월일</div>
            <div className="right">{ 'asdf1234' }</div>
          </div>

          <div className="info_box_bundle">
            <div className="left">휴대폰 번호</div>
            <div className="right">{ 'asdf1234' }</div>
          </div>

          <div className="info_box_bundle">
            <div className="left">주소</div>
            <div className="right">{ 'asdf1234' }</div>
          </div>

        </div>

      </div>
    </div>
  );
};

