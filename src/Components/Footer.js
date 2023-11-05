import React from "react";
function Footer() {
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
    <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
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

          {/* <ul>
          <li>Modified with love by the Clever Programmer team ♥️</li>
         </ul> */}

          <ul className="copyright">
            <li>&copy; Copyright 2023 Alex Mendoza</li>
            <li>
              Design by{" "}
              <a title="Styleshout" href="">
                Alex Mendoza
              </a>
            </li>
          </ul>
        </div>
        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
