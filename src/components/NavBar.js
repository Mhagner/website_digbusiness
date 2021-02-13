import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="logo">
        <a className="navbar-brand" href="#">
          <img src="images/logo-dig.png" alt="" />
        </a>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <div className="interactive-menu-button">
          <a href="#">
            <span>Menu</span>
          </a>
        </div>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            {/* Nav Link */}
            <a className="nav-link" data-scroll href="#home">
              HOME
            </a>
          </li>
          <li className="nav-item">
            {/* Nav Link */}
            <a className="nav-link" data-scroll href="#about">
              Quem Somos
            </a>
          </li>
          <li className="nav-item">
            {/* Nav Link */}
            <a className="nav-link" data-scroll href="#services">
              Soluções
            </a>
          </li>
          <li className="nav-item">
            {/* Nav Link */}
            <a className="nav-link" data-scroll href="#portfolio">
              Portifólio
            </a>
          </li>
          <li className="nav-item">
            {/* Nav Link */}
            <a className="nav-link" data-scroll href="#">
              Webmail
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
