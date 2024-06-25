import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {

  const navigate = useNavigate();

  return (
    <div className="app">
      <div className="sign_up_content_wrap">
        <section className="input_field_window">
          <div className="scroll_position">

            <h2>회원 가입</h2>
            <p>회원이 되어 다양한 혜택을 경험해보세요!</p>

            <div className="form-group">
              <div className="col-md-6">
                <label htmlFor="c_fname" className="text-black">아이디</label>
                <div className="flex">
                  <input type="text" className="form-control" id="c_fname" name="c_fname" placeholder="아이디 입력(영문, 숫자)" />
                  <button className="side_btn btn btn-black">중복확인</button>
                </div>
              </div>
            </div>

            <div className="form-group">
              <div className="col-md-6">
                <label htmlFor="c_fname" className="text-black">비밀번호</label>
                <input type="text" className="form-control" id="c_fname" name="c_fname" placeholder="비밀번호 입력(영문, 숫자 포함 8~20자)"/>
              </div>
            </div>

            <div className="form-group">
              <div className="col-md-6">
                <label htmlFor="c_fname" className="text-black">비밀번호 확인</label>
                <input type="text" className="form-control" id="c_fname" name="c_fname" placeholder="다시 한번 입력해 주세요." />
              </div>
            </div>

            <div className="divider" />

            <div className="form-group">
              <div className="col-md-6">
                <label htmlFor="c_fname" className="text-black">이름</label>
                <input type="text" className="form-control" id="c_fname" name="c_fname"/>
              </div>
            </div>

            <div className="form-group">
              <div className="col-md-6">
                <label htmlFor="c_fname" className="text-black">생년월일</label>
                <input type="text" className="form-control" id="c_fname" name="c_fname"/>
              </div>
            </div>

            <div className="form-group address">
              <div className="col-md-6">
                <label htmlFor="c_address" className="text-black">주소</label>
                <div className="post_num">
                  <input type="text" className="form-control" id="c_address" name="c_address" />
                  {/* daum postcode service api 연동하기 */}
                  <button className="side_btn btn btn-black">우편번호</button>
                </div>
              </div>
            </div>

            <div className="form-group detail_address">
              <input type="text" className="form-control" />
            </div>

            <div className="form-group detail_address">
              <input type="text" className="form-control" placeholder="상세 주소" />
            </div>

            <div className="divider" />

            <div className="form-group">
              <div className="col-md-6">
                <label htmlFor="c_fname" className="text-black">휴대폰 번호</label>
                <input type="text" className="form-control" id="c_fname" name="c_fname" placeholder="'-'를 제외하고 입력해주세요." />
              </div>
            </div>

            <div className="form-group">
              <div className="col-md-6">
                <label htmlFor="c_fname" className="text-black">인증번호</label>
                <div className="flex">
                  <input type="text" className="form-control" id="c_fname" name="c_fname"/>
                  <button className="side_btn btn btn-black">인증하기</button>
                </div>
              </div>
            </div>

            <div className="signUp_btn_wrap">
              <button className="signUp_btn">가입하기</button>
            </div>
          </div>

        </section>
      </div>
    </div>
  );
};

