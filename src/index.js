import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Volume1 from "./Volume1";
import Volume2 from "./Volume2";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Volume1" element={<Volume1 />} />
      <Route path="/Volume2" element={<Volume2 />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
