import css from "./Subscribe.module.css";

export const Subscribe = () => {
    return (
        <div className={css.SubFlex} id="Subscribtions">
            <div className={css.FreeFlex}>
                <h1>Free:</h1>
                <h2>$0</h2>
                <p className={css.features}>Features:</p>
                <p><span style={{ color: "rgb(135, 134, 134)" }}>&#10003;</span>&nbsp; 100 text checks per day.</p>
                <p><span style={{ color: "rgb(135, 134, 134)" }}>&#10003;</span>&nbsp; 50 image checks per day.</p>
                <p><span style={{ color: "rgb(135, 134, 134)" }}>&#10003;</span>&nbsp; 50 api requests per month.</p>
                <button className={css.Register}>Register</button>
            </div>
            <div className={css.ProFlex}>
                <h1 id={css.ProPrice}>Pro:</h1>
                <h2>$4.99</h2>
                <p className={css.features}>Features:</p>
                <p><span style={{ color: "rgb(34, 222, 106)" }}>&#10003;</span>&nbsp; Unlimited text checks.</p>
                <p><span style={{ color: "rgb(34, 222, 106)" }}>&#10003;</span>&nbsp; Unlimited image checks.</p>
                <p><span style={{ color: "rgb(34, 222, 106)" }}>&#10003;</span>&nbsp; 100 api requests per month.</p>
                <button className={css.Register}>Purchase</button>
            </div>
            <div className={css.UltiFlex}>
                <h1 id={css.UltiPrice}>Ultimate:</h1>
                <h2>$9.99</h2>
                <p className={css.features}>Features:</p>
                <p><span style={{ color: "rgb(206, 26, 158)" }}>&#10003;</span>&nbsp; Unlimited text checks.</p>
                <p><span style={{ color: "rgb(206, 26, 158)" }}>&#10003;</span>&nbsp; Unlimited image checks</p>
                <p><span style={{ color: "rgb(206, 26, 158)" }}>&#10003;</span>&nbsp; Unlimited api requests.</p>
                <button className={css.Register}>Purchase</button>
            </div>
        </div>
    )
}