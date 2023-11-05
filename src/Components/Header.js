import React from "react";function Header() {
  const social = [
    {
      name: "facebook",
      url: "https://www.facebook.com/alex.mendoza.e26",
      className: "fa fa-facebook",
    },
    {
      name: "github",
      url: "https://github.com/amendoza26",
      className: "fa fa-github",
    },
  ];
  return (
    <header id="home">
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#resume">
              Resume
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#portfolio">
              Works
            </a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">I'm Alex Mendoza.</h1>
          <h3>
            I'm a Lima based <span>Full Stack Developer </span>
            by Day, Freelancer by Night.
          </h3>
          <hr />
          <ul className="social">
            {social.map((network) => {
              return (
                <li key={network.name}>
                  <a href={network.url}>
                    <i className={network.className}></i>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
}

export default Header;
