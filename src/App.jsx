import React from "react";
import { Routes, Route, } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Loader } from "./Loader/Loader.jsx";
import { UI } from "./Topbar/Topbar.jsx";
import { Home } from "./Home/Home.jsx";
import { Nett } from "./NettSearch/NettSearch.jsx"
import { Sign } from "./Account/Sign.jsx";
import "./App.css";

const App = () => {
  return (
    <>
        <UI />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/NettSearch" element={<Nett />} />
          <Route path="/SignIn" element={<Sign />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
