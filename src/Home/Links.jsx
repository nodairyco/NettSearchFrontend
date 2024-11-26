import css from "./Home.module.css";
import { Link } from "react-router-dom";
import { Subscribe } from "./Subscriptions.jsx";

export const Links = () => {
    return (
        <div className={css.LinksFlexContainer}>
             <Link to="/NettSearch" className={css.AI} >Try NettSearch</Link>
             <a href="#Subscribtions" className={css.download}>Subscriptons &gt;</a>
             <button className={css.download}>Download Nettsearch &gt;</button>
             
        </div>
    )
}