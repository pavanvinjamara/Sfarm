import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout/index";
import Home from "./pages/Home/index";

import "./App.css";

function App() {
  return (
    <div className="App m-0 p-0 w-screen h-screen bg-gradient-to-b from-green-50 from-0% to-[transparent] to-35%">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
