import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Volume1 from "./Volume1";
import Volume2 from "./Volume2";

function App() {
  return (
    <div className="App">
      <h1>Days In Dysthymia</h1>
      <h4>
        "Reduce intellectual and emotional noise until you arrive at the silence
        of yourself, and listen to it."
        <br />
        -Richard Brautigan
      </h4>
      <nav>
        <Link to="/Volume1">Volume 1</Link>
        <Link to="/Volume2">Volume 2</Link>
      </nav>
    </div>
  );
}

export default App;
