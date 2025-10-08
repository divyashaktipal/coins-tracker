import "./App.css";
import React from "react";
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AboutUs from "./components/AboutUs";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      {/* <h1>Crypto Dekho</h1> */}
      <div className="App">
        <NavBar />

        <div className="page-body">
          <Routes>
            <Route
              path="/"
              element={<HomePage />}
              errorElement={<h1> Page Not Found!!!</h1>}
            />

            <Route
              path="/about"
              element={<AboutUs />}
              errorElement={<h1>Page Not Found!!!</h1>}
            />

            <Route
              path="/contact"
              element={<Contact />}
              errorElement={<h1>Page Not Found!!!</h1>}
            />

            <Route path="*" element={<h1>Page Not Found!!!</h1>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
