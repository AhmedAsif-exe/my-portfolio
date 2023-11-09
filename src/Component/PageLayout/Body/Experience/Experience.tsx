import { forwardRef, ForwardRefRenderFunction } from "react";
import classes from "./Experience.module.css";
import Props from "../../../Utils/Types/PropType";
import Card from "../../../Utils/WrapperComponents/Card";
import AnimationContainer from "../../../Utils/WrapperComponents/AnimationContainer";
import { BadgeCard } from "./BadgeCard/BadgeCard";
import mangaQuest from "../../../Utils/Images/manga-quest.png";
import YelpCamp from "../../../Utils/Images/YelpCamp.png";

const works = [
  {
    name: "Manga Quest",
    src: mangaQuest,
    description:
      "I've created an e-commerce website that replicates a manga store, where I can showcase my passion for Japanese literature. The website was developed using React, Node/Express, and Firebase as the tech stack.",
    link: "https://manga-quest.web.app/",
    badges: [
      { label: "React" },
      { label: "Node" },
      { label: "Express" },
      { label: "Firebase" },
    ],
  },
  {
    name: "Yelp Camp",
    src: YelpCamp,
    description:
      "I have developed a review application that enables users to both read and write reviews for well-known campsites worldwide. The application was created using Bootstrap for the front-end and Node.js/Express for the back-end and MongoDB as the primary database. While it hasn't been deployed yet, you can assess the code quality by visiting the GitHub repository.",
    link: "https://github.com/AhmedAsif-exe/YelpCamp",
    badges: [
      { label: "Css" },
      { label: "Node" },
      { label: "Express" },
      { label: "MongoDB" },
    ],
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
        <div className={classes.cardholder}>
          {works.map((items) => (
            <BadgeCard {...items} />
          ))}
        </div>
      </AnimationContainer>
    </section>
  );
};
export default forwardRef(Exprerience);
