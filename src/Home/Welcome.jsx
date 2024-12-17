import css from "./Home.module.css";

export const Welcome = () => {
  return (
    <div className={css.WelcomeFlexContainer}>
      <h1 className={css.NettSearchs}><span style={{ fontSize: "12px", color: "white",fontWeight:"500" }}>Hello,</span>&nbsp;NettSearch!</h1>
    </div>
  );
};
