import React from "react";export default function About() {
  const data =
    "I'm an experienced full-stack developer with a passion for crafting dynamic and engaging web and mobile applications. With expertise in a wide range of technologies, including React, Angular, Node.js, C#, and React Native, I thrive in turning ideas into innovative, user-friendly solutions. My experience in both front-end and back-end development, coupled with my ability to create cross-platform mobile apps, allows me to deliver end-to-end, scalable products. I'm committed to staying at the forefront of the ever-evolving tech landscape, ensuring that I can provide the best solutions for my clients.";
  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          {/* <img className="profile-pic"  src={profilepic} alt="Tim Baker Profile Pic" /> */}
        </div>
        <div className="columns main-col">
          <h2>About Me</h2>

          <p>{data}</p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>Alex Mendoza</span>
                <br />
                <span>Lima, Peru</span>
                <br />
                <span>+51 985437707</span>
                <br />
                <span>amendoza807@gmail.com</span>
              </p>
            </div>
            <div className="columns download">
              <p>
                <a className="button">
                  <i className="fa fa-download"></i>Download Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
