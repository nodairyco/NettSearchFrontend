import css from "./Home.module.css";
import { Link } from "react-router-dom";
import { Welcome } from "./Welcome";
import { Links } from "./Links";
import { Text } from "./Text";
import { Subscribe } from "./Subscriptions";
import { Examples } from "./Examples";

/*
      
*/
export const Home = () => {
  return (
    <div>
      <Welcome />
      <Links />
      <Text />
      <Examples />
      <Subscribe />
    </div>
  );
};
