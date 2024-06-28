import React, {useEffect, useState} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setPath } from '../store/userCommon';

export default function Navigation() {
  const menuItems = ['Home', 'Shop', 'Services', 'Blog', 'About', 'Contact'];
  const dispatch = useDispatch();
  const nowPathIndex = useSelector(state => state.userCommon.nowPathIndex);
  console.log(nowPathIndex)

  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMenuState, setIsMenuState] = useState(false);

  useEffect(() => {
    if(nowPathIndex === null) {
      setIsMenuState(0)
      dispatch(setPath({ nowPath: '/Home' }))
      handleItemClick(0, '/Home')
    } else {
      setActiveIndex(nowPathIndex)
    }
  }, []);

  function handleItemClick(index, path) {
    console.log(`${index} : ${path}`)
    dispatch(setPath({ nowPath: path, nowPathIndex: index }))
    navigate(path)

    setActiveIndex(index)
    setIsMenuState(false)
  }

  function resetNavActive() {
    setActiveIndex(null);
  }

  const toggleMenu = () => {
    setIsMenuState(!isMenuState)
  }

  return (
    <nav className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" aria-label="Furni navigation bar">

      <div className="container">
        <Link className="navbar-brand" to="/home">
          <img className="animate__animated hover-animate-heartBeat" src={require("assets/images/img_logo.svg").default} alt="FurNi"/>
        </Link>

        <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsFurni"
            aria-controls="navbarsFurni"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/*collapse navbar-collapse show*/}
        <div className={`collapse navbar-collapse ${isMenuState ? 'show' : ''}`} id="navbarsFurni">
          <ul className="custom-navbar-nav navbar-nav ms-auto mb-md-0">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`nav-item animate__animated hover-animate-heartBeat ${index === activeIndex ? 'active' : ''}`}
                onClick={() => handleItemClick(index, `/${item}`)}
              >
                {item}
              </li>
            ))}
          </ul>

          <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
            <li>
              {/* 비회원일 경우 /Login , 회원일 경우 /UserInfo */}
              <Link className="nav-link" to="/Login" onClick={() => resetNavActive()}>
                <div className="icon user animate__animated hover-animate-heartBeat" />
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/Cart" onClick={() => resetNavActive()}>
                <div className="icon cart animate__animated hover-animate-heartBeat">
                  <div className="cart_count">{'0'}</div>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
