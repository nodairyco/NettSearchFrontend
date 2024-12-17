import React from 'react'
import css from "./Nett.module.css";
export default function Analysis({ response, textToTest }) {
    return (
        <div>
            <form className={css.doesntmatter} >
                <h1 className={css.instruction}>Your report is done!</h1>
                <span className={css.InpText} style={{ fontFamily: '"JetBrains Mono", sarif' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>

            </form>
            <div className={css.aiThingyShower}>
                <br />
                <h1 className={css.instruction}>The text is paritally <br /> AI!</h1>
                <br /><br /> <br />
                <h1 className={css.instruction}>AI Score: 1</h1>
                <h1 className={css.instruction}>Mixed: 1</h1>
                <h1 className={css.instruction}>Human: 1</h1>
            </div>
        </div>
    )
}
