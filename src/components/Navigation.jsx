import React, {useEffect, useRef, useState} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setPath } from '../store/userCommon';

export default function Navigation() {
  const menuItems = ['Home', 'Shop', 'Services', 'Blog', 'About', 'Contact'];
  const dispatch = useDispatch();
  const nowPathIndex = useSelector(state => state.userCommon.nowPathIndex);
  const nowBasketCount = useSelector(state => state.userCommon.basketList);

  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMenuState, setIsMenuState] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    if(nowPathIndex === null) {
      setIsMenuState(0)
      dispatch(setPath({ nowPath: '/Home' }))
      handleItemClick(0, '/Home')
    } else {
      setActiveIndex(nowPathIndex)
    }
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsMenuState(false);
    }
  };

  function handleItemClick(index, path) {
    console.log(`${index} : ${path}`)
    dispatch(setPath({ nowPath: path, nowPathIndex: index }))
    navigate(path)

    setActiveIndex(index)
    setIsMenuState(false)
  }

  function resetNavActive() {
    setActiveIndex(null)
    setIsMenuState(false)
  }

  const toggleMenu = () => {
    setIsMenuState(!isMenuState)
  }

  const menuBlurEvent = () => {
    setIsMenuState(false)
  }

  return (
    <nav ref={navRef} className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" aria-label="Furni navigation bar">

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
                  <div className="cart_count">{nowBasketCount}</div>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
