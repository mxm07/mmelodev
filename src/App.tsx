import React from "react";
import Home from "./app/Home";
import Background from "./app/Background";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.scss";
import NotFound from "./app/NotFound";

function App() {
  return (
    <div className="app-wrapper">
      <Background />

      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
