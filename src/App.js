import React, { useState, useEffect } from "react";
import "./App.css";
// import MainContainer from "./MainContainer";
import MainContainer from "./Maincontainer";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
// import "./colour";

function App() {
  const [colorTheme, setColorTheme] = useState("light-mode");

  useEffect(() => {
    const currentThemeColor = localStorage.getItem("theme-color");
    if (currentThemeColor) {
      setColorTheme(currentThemeColor);
    }
  }, []);

  return (
    <div className={`app ${colorTheme}`}>
      <MainContainer />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
