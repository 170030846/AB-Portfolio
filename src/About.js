import React from "react";
import "./About.css";

function About() {
  return (
    <section className="s2">
      <div className="main-container">
        <div className="about-wrapper">
          <div className="about-me">
            <h4 className="about-me-title">More about me</h4>
            <p className="about-me-info">
              Student Peer Mentor - Part of the team that was responsible for
              curating and finalizing content for the laboratory teaching
              modules for Object oriented programming course. Also, part of a
              team of teaching assistants for the aforesaid course.
            </p>

            <p className="about-me-info">
              I led web development team which includes teaching and developing
              inhouse websites. I build new projects just to tickle my brain and
              love teaching others how they're made. Now I'm working towards
              becoming a web developer.
            </p>

            <hr></hr>

            <h4 className="about-me-title">TOP EXPERTISE</h4>

            <p className="about-me-info">
              Fullstack developer with primary focus on React + Firebase:{" "}
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1pYIEjA031ex1yxYLWAgdOZcz_LGCbHox/view"
              >
                Download Resume
              </a>
            </p>
            <div id="skills">
              <ul>
                <li>Python</li>
                <li>Node Js</li>
                <li>JavaScript</li>
                <li>React Js</li>
                <li>React DOM</li>
                <li>Redux</li>
              </ul>

              <ul>
                <li>AI</li>
                <li>Firebase</li>
                <li>Git</li>
                <li>HTML/CSS</li>
                <li>React Context API</li>
                <li>ES6</li>
              </ul>
            </div>
          </div>
          <div className="social-links">
            <img id="social_img" src="https://i.ibb.co/Pr8410L/insta.png" />
            <h3 className="about-me-title-2">Find me on Instagram!</h3>

            <a target="_blank" href="https://www.instagram.com/mabhinav7/">
              @mabhinav7
            </a>
            {/* <br></br>
            <a target="_blank" href="https://twitter.com/dennisivy11">
              Twitter: @DennisIvy11
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
