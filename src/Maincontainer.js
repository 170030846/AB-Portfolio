import React, { useState, useEffect } from "react";
import "./MainContainer.css";
// import "./script";

function MainContainer() {
  const [colorTheme, setColorTheme] = useState("light-mode");

  useEffect(() => {
    const currentThemeColor = localStorage.getItem("theme-color");
    if (currentThemeColor) {
      setColorTheme(currentThemeColor);
    }
  }, []);

  const handleClick = (theme) => {
    setColorTheme(theme);
    localStorage.setItem("theme-color", theme);
    window.location.reload();
  };

  return (
    <section className="s1">
      <div className="main-container">
        <div className="greeting-wrapper">
          <h1>Hey, I'm Abhinav</h1>
        </div>
        <div className="intro-wrapper">
          <div className="nav-wrapper">
            <div className="dots-wrapper">
              <div id="dot-1" className="browser-dot"></div>
              <div id="dot-2" className="browser-dot"></div>
              <div id="dot-3" className="browser-dot"></div>
            </div>
            <ul id="navigation">
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="left-column">
            <img
              id="profile_pic"
              src="https://i.ibb.co/kxZVLY5/abhinav.jpg"
              alt=""
            />
            <h5 className="left-column-text">Personalized Theme</h5>
            <div id="theme-options-wrapper">
              <div
                id="light-mode"
                onClick={() => handleClick("light-mode")}
                className={`${colorTheme === "light-mode" ? "active" : ""}`}
              ></div>
              <div
                id="blue-mode"
                onClick={() => handleClick("blue-mode")}
                className={`${colorTheme === "blue-mode" ? "active" : ""}`}
              ></div>
              <div
                id="green-mode"
                onClick={() => handleClick("green-mode")}
                className={`${colorTheme === "green-mode" ? "active" : ""}`}
              ></div>
              <div
                id="purple-mode"
                onClick={() => handleClick("purple-mode")}
                className={`${colorTheme === "purple-mode" ? "active" : ""}`}
              ></div>
            </div>
            <p id="settings-note">
              Theme settings will be saved for<br></br>your next visit
            </p>
          </div>
          <div className="right-column">
            <div id="preview-shadow">
              <div id="preview">
                <div id="corner-tl" className="corner"></div>
                <div id="corner-tr" className="corner"></div>
                <h3 className="preview__title">What I Do</h3>
                <p className="preview__info">
                  I'm a Software Engineer and a Freelance Web Developer
                </p>
                <div id="corner-bl" className="corner"></div>
                <div id="corner-br" className="corner"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainContainer;
