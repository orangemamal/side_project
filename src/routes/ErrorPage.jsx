import {useNavigate, useRouteError} from "react-router-dom";

export default function ErrorPage() {
  // const error = useRouteError();
  // console.error(error);

  const navigate = useNavigate();

  const goHome = () => {
    navigate('/Home')
  }

  return (
    <div className="error_page_wrap">
      <i className="fa-solid fa-circle-exclamation"></i>
      <h1>원하시는 페이지를 찾을 수 없습니다.</h1>
      <button className="home" onClick={() => goHome()}>홈으로 돌아가기</button>
    </div>
  );
}