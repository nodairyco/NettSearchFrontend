import css from "./UI.module.css";
import { Link } from "react-router-dom";
import ProfIcon from "../Images/Profile_Icon.png";

export const UI = () => {
  return (
    <div className={css.UI}>
      <Link to="/" className={css.Home}>
        Home
      </Link>
      <Link to="/SignIn" className={css.invbutton}>
        <img src={ProfIcon} alt="Profile Icon" className={css.ProfIcon} />
      </Link>
      <label >Products </label>
    </div>
  );
};
