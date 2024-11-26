import css from "./Home.module.css";

export const Welcome = () => {
  return (
    <div className={css.WelcomeFlexContainer}>
      <p className={css.Date}>October 10, 2024</p>
      <h1 className={css.NettSearchs}><span style={{ fontSize: "12px", color: "white",fontWeight:"500" }}>Hello,</span>&nbsp;NettSearch!</h1>
    </div>
  );
};
