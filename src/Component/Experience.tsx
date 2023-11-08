import { forwardRef, ForwardRefRenderFunction } from "react";
import classes from "./Experience.module.css";
import Props from "./Utils/PropType";
import Card from "./Utils/Card";
import AnimationContainer from "./Utils/AnimationContainer";
const Exprerience: ForwardRefRenderFunction<HTMLElement, Props> = (
  props,
  ref
) => {
  const { inView } = props;
  return (
    <section className={classes.experience} ref={ref}>
      <AnimationContainer inView={inView}>
        <Card className={classes.card}>
          <h2>Manga Quest</h2>
          <p>
            I've created an e-commerce website that replicates a manga store,
            where I can showcase my passion for Japanese literature. The website
            was developed using React, Node/Express, and Firebase as the tech
            stack.
          </p>
          <a href="https://manga-quest.web.app/">See Live</a>
        </Card>
      </AnimationContainer>
    </section>
  );
};
export default forwardRef(Exprerience);
