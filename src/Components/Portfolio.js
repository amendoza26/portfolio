import React from "react";function Portfolio() {
  const projects = [
    {
      title: "Liinx",
      category:
        "Digital Identity built with MERN (MongoDB, ExpressJS, ReactJS, NodeJS)",
      image: "images/portfolio/react.png",
      url: "https://jocular-ganache-1fc660.netlify.app/",
    },
    {
      title: "Rimac Test",
      category:
        "TikTok Clone built with MERN (MongoDB, ExpressJS, ReactJS, NodeJS)",
      image: "images/portfolio/react.png",
      url: "https://papaya-puppy-9f85ca.netlify.app/",
    },
    {
      title: "Estacion108",
      category: "Wordpress ecommerce",
      image: "images/portfolio/estacion108.png",
      url: "https://estacion108.com/",
    },
    {
      title: "Vive Organics",
      category: "Wordpress ecommerce",
      image: "images/portfolio/viveorganics.png",
      url: "https://viveorganicsperu.com/",
    },
  ];
  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>

          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            {projects.map((pr) => {
              return (
                <div key={pr.title} className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href={pr.url} title={pr.title} target="_blank">
                      <img alt={pr.title} src={pr.image} />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{pr.title}</h5>
                          <p>{pr.category}</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
