import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Navigation() {
  const menuItems = ['Home', 'Shop', 'Services', 'Blog', 'About us', 'Contact us'];

  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMenuState, setIsMenuState] = useState(false);

  function handleItemClick(index, path) {
    console.log(`${index} : ${path}`);
    navigate(path);
    // for(let i = 0; i < menuItems.length; i++) {
    //   if(index === i) {
    //     console.log("true")
    //   } else {
    //     console.log("false")
    //   }
    // }
    setActiveIndex(index);
  }

  const toggleMenu = () => {
    setIsMenuState(!isMenuState)
  }

  return (
    <nav className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" aria-label="Furni navigation bar">

      <div className="container">
        <Link className="navbar-brand" to="/home">
          <img src={require("assets/images/img_logo.svg").default} alt="FurNi"/>
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
          <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`nav-item ${index === activeIndex ? 'active' : ''}`}
                onClick={() => handleItemClick(index, `/${item.toLowerCase().replace(/\s/g, '-')}`)}
              >
                {item}
              </li>
            ))}
          </ul>

          <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
            <li>
              <Link className="nav-link" to="/Login">
                <div className="icon user" />
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="cart">
                <div className="icon cart" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
