import React, { useState } from "react";
import { Routes, Route, } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Loader } from "./Loader/Loader.jsx";
import { UI } from "./Topbar/Topbar.jsx";
import { Home } from "./Home/Home.jsx";
import { Nett } from "./NettSearch/NettSearch.tsx"
import { Sign } from "./Account/Sign.jsx";
import "./App.css";
import ApiPage from "./Home/ApiPage.tsx";
import Analysis from "./NettSearch/Analysis.tsx";

type ApiResponse = {
  ai_score: number,
  summary: {
    mixed: Number,
    ai: Number,
    human: Number
  }
}

const App = () => {
  const [response, setResponse] = useState<ApiResponse | null>(null)
  const [textToTest, setTextToTest] = useState<string>('')
  return (
    <>
      <UI />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/NettSearch" element={<Nett textToTest={textToTest} setTextToTest={setTextToTest} response={response} setResponse={setResponse}/>} />
          <Route path="/SignIn" element={<Sign />} />
          <Route path="/Response" element={<Analysis response={response} textToTest={textToTest}/>} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
