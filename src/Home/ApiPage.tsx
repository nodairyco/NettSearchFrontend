import React from 'react'
import css from "./Home.module.css";
import scss from "./Examples.module.css";

export default function ApiPage() {
  return (
    <div className={css.WelcomeFlexContainer} id='Api'>
      <div className={scss.ExampFlex}>
        <p>
          <h1 className={css.NettSearchs}>NettSearch Api</h1>

          Another way we want to combat AI is through enabling individuals to integrate AI detection into their
          websites through our API, giving developers all around the world access to our API for accessible pricing.
          <br /><br />
          With our state of the art API, developers will be able to integrate AI image detection, and AI text detection into their
          websites with minimal hassle.
          <br /><br />
          Avaliable for ChatGPT, GPT4, and more, this is all you will need to AI-proof your website.
          <br /><br />
          <span style={{ color: "gray" }}>(in production)</span>
          <br />
        </p>
      </div>
    </div>
  )
}
