import { forwardRef, ForwardRefRenderFunction } from "react";
import classes from "./Experience.module.css";
import Props from "../../../Utils/Types/PropType";
import Card from "../../../Utils/WrapperComponents/Card";
import AnimationContainer from "../../../Utils/WrapperComponents/AnimationContainer";
const works = [
  {
    name: "Manga Quest",
    description:
      "I've created an e-commerce website that replicates a manga store, where I can showcase my passion for Japanese literature. The website was developed using React, Node/Express, and Firebase as the tech stack.",
    link: "https://manga-quest.web.app/",
  },
  {
    name: "Yelp Camp",
    description:
      "I have developed a review application that enables users to both read and write reviews for well-known campsites worldwide. The application was created using Bootstrap for the front-end and Node.js/Express for the back-end. While it hasn't been deployed yet, you can assess the code quality by visiting the GitHub repository.",
    link: "https://github.com/AhmedAsif-exe/YelpCamp",
  },
];
const Exprerience: ForwardRefRenderFunction<HTMLElement, Props> = (
  props,
  ref
) => {
  const { inView } = props;
  return (
    <section className={classes.experience} ref={ref}>
      <AnimationContainer inView={inView}>
        {works.map((items) => (
          <Card className={classes.card}>
            <h2>{items.name}</h2>
            <p>{items.description}</p>
            <a href={items.link}>Check It Out!!</a>
          </Card>
        ))}
      </AnimationContainer>
    </section>
  );
};
export default forwardRef(Exprerience);
