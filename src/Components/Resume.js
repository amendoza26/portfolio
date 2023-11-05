import React from "react";function Resume() {
  const work = [
    {
      company: "SHAREBUSINESS",
      title: "FULL STACK DEVELOPER",
      years: "March 2023 - Present",
      description: "MERN and MEAN development.",
    },
    {
      company: "ORBIS DATA PERU",
      title: "FULL STACK DEVELOPER",
      years: "August 2022 - February 2023",
      description: "MERN and AWS development.",
    },
    {
      company: "LIINX",
      title: "FULL STACK DEVELOPER",
      years: "April 2022 - November 2022",
      description: "MERN development.",
    },
  ];
  const skillmessage =
    "Here you can create a short write-up of your skills to show off to employers";
  const skill = [
    {
      name: "ReactJs",
      level: "100%",
    },
    {
      name: "NodeJs",
      level: "90%",
    },
    {
      name: "Angular",
      level: "60%",
    },
    {
      name: "MongoDB",
      level: "80%",
    },
    {
      name: "Wordpress",
      level: "75%",
    },
    {
      name: "CSS",
      level: "95%",
    },
    {
      name: "Git",
      level: "60%",
    },
    {
      name: "HTML5",
      level: "80%",
    },
    {
      name: "C#",
      level: "60%",
    },
  ];
  return (
    <section id="resume">
      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          {work.map((data) => {
            return (
              <div key={data.company}>
                <h3>{data.company}</h3>
                <p className="info">
                  {data.title}
                  <span>&bull;</span> <em className="date">{data.years}</em>
                </p>
                <p>{data.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <p>{skillmessage}</p>

          <div className="bars">
            <ul className="skills">
              {skill.map((skills) => {
                return (
                  <li key={skills.name}>
                    <span
                      style={{ width: skills.level }}
                      className="bar-expand"
                    ></span>
                    <em>{skills.name}</em>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
