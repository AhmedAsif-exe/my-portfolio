import classes from "./Title.module.css";
import { FC } from "react";
const Title: FC = () => {
  return (
    <section className={classes.title}>
      <h1>Welcome To A Digital Odyssey</h1>
      <p>By The One Who Crafts Digital Solutions for a Connected World</p>
    </section>
  );
};
export default Title;
