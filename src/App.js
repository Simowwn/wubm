// App.js
import React, { useState, useEffect } from "react";
import "./App.css";
import Backdrop from "./Backdrop";
import Button from "./Button";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [background, setBackground] = useState("mocha.gif"); // Set initial state to a default gif

  useEffect(() => {
    // Additional logic you may want to perform when the component mounts
    // You can use this useEffect to perform any initialization logic
    // For example, loading data, making API calls, etc.
  }, []); // Empty dependency array to ensure it runs only once when the component mounts

  const handleYesClick = () => {
    setBackground("gif1.gif"); // Replace with the direct link to your "Yes" image
  };

  const handleNoClick = () => {
    const noGifs = ["mochasad2.gif", "mochasad1.gif", "mochasad3.gif"];
    const randomNoGif = noGifs[Math.floor(Math.random() * noGifs.length)];
    setBackground(randomNoGif); // Set a random gif when "No" is clicked
  };

  return (
    <div className="App">
      <Backdrop src={background} alt="" />
      <h1>Will you be my valentine?</h1>
      <Button onYesClick={handleYesClick} onNoClick={handleNoClick} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
