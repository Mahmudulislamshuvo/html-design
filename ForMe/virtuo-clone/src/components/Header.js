import React from 'react';

const Header = () => {
  return (
    <header className="main-header">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-2 col-md-3 col-sm-3 col-5">
            <div className="logo">
              <a href="index.html">
                <img src="/assets/logo-22111111.png" alt="logo" />
              </a>
            </div>
          </div>
          <div className="col-lg-10 col-md-9 col-sm-9 col-7">
            <div className="main-menu-container">
              <div className="main-menu">
                <ul className="main-menu-list">
                  <li><a href="#home">Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#services">Services</a></li>
                  <li><a href="#portfolio">Portfolio</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;