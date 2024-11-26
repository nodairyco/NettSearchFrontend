import { Form } from "react-router-dom";
import css from "./Account.module.css";
import { Link } from "react-router-dom";

export const Sign = () => {
  return (
    <form className={css.SignFlex}>
      <h1>Welcome Back!</h1>
      <label>Email:</label> <br />
      <input type="email" required className={css.required} /> <br />
      <label>Password:</label> <br />
      <input type="password" required className={css.required} /> <br />
      <label>
        <input type="checkbox" /> Remember me
      </label>
      <br />
      <button type="submit">Log In</button>
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" className={css.aLink}>Forgot your password?</a>
      <Link className={css.aLink}>Not a member yet?</Link>
    </form>
  );
};
