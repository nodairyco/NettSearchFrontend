import axios from "axios";
import css from "./Nett.module.css";
import { useState } from "react";
import React from "react";
import { Navigate } from "react-router-dom";
type ApiResponse = {
  ai_score: number,
  summary: {
    mixed: Number,
    ai: Number,
    human: Number
  }
}

export const Nett = ({ setTextToTest, textToTest, response, setResponse }) => {

  const AI_API_KEY = "7489b48054msh4eec88d56d31c8cp15db70jsne0377961ac6f";
  const AI_API_URL = import.meta.env.VITE_AI_API_URL;
  const [navigateBool, setNavigateBool] = useState(false)

  const submitFunction = async () => {
    if (textToTest === '') {
      return
    }
    try {
      const response = await axios.post<ApiResponse>('https://ai-detection4.p.rapidapi.com/v1/ai-detection-rapid-api',
        {
          headers: {
            'x-rapidapi-key': AI_API_KEY,
            'x-rapidapi-host': AI_API_URL,
            'Content-Type': 'application/json'
          },
          data: {
            text: textToTest,
            lang: 'en'
          }
        }
      )
    } catch (error) {
      console.error(error)
    }
    const data = response.data

    setResponse(data)
    setNavigateBool(true)
  }

  return (
    <div>
      <h1 className={css.MaskOff}>
        Unmask AI, Uncover Truth. <br /> Welcome to{" "}
        <span style={{ color: "rgb(39, 118, 93)" }}>NettSearch!</span>{" "}
      </h1>
      <form className={css.FlexTape} onSubmit={(e) => { submitFunction(); e.preventDefault(); }}>
        <h1 className={css.instruction}>Paste text to check if it's AI or human-made</h1>
        <textarea onChange={(e) => { setTextToTest(e.target.value) }} placeholder="Paste your text here" className={css.InpText} />
        <button type="submit" className={css.Scan}>
          Scan for AI &nbsp;&nbsp; &gt;
        </button>
      </form>
      {navigateBool && response && (<Navigate to="/Response" />)}
    </div>
  );
};
