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
              Software Engineer - I'm leading a team that was responsible for
              the component development which is a piece of All Tax Platform
              software. I lead the effort to build a feature that allows users
              to easily keep track of the day-to-day tax area by automating
              processes and ensuring accuracy. My responsibilities included the
              initial research, planning, managing the project, and creating
              components using SAP HANA, other SAP tools.
            </p>

            <p className="about-me-info">
              Freelance Developer - Helping people turn their ideas into sites
              that work. Professional,Cost-Effective always and having fun in
              the process.
            </p>

            <hr></hr>

            <h4 className="about-me-title">TOP EXPERTISE</h4>

            <p className="about-me-info">
              Fullstack developer with primary focus on React + Firebase:{" "}
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1zFH_o3ibmJk2GcbF98LkpY5WhDGBgFN9/view"
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
                <li>SAP HANA Studio</li>
              </ul>

              <ul>
                <li>AI</li>
                <li>Firebase</li>
                <li>Git</li>
                <li>HTML/CSS</li>
                <li>React Context API</li>
                <li>ES6</li>
                <li>SAP UI5</li>
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
