import { ForwardRefRenderFunction, forwardRef } from "react";
import classes from "./Skills.module.css";
import Props from "./Utils/PropType";
import Css from "./Images/Icons/Css.svg";
import Html from "./Images/Icons/Html.svg";
import JavaScript from "./Images/Icons/JavaScript.svg";
import React from "./Images/Icons/React.svg";
import Node from "./Images/Icons/Node.svg";
import TypeScript from "./Images/Icons/TypeScript.svg";
import Cpp from "./Images/Icons/Cpp.svg";
import Python from "./Images/Icons/Python.svg";
import AnimationContainer from "./Utils/AnimationContainer";
const techIcons = [
  { name: "CSS", icon: Css },
  { name: "HTML", icon: Html },
  { name: "JavaScript", icon: JavaScript },
  { name: "React", icon: React },
  { name: "Node.js", icon: Node },
  { name: "TypeScript", icon: TypeScript },
  { name: "C++", icon: Cpp },
  { name: "Python", icon: Python },
];
const otherStuff = [
  "Animations with CSS",
  "JavaScript ES2015",
  "JavaScript ES2016",
  "JavaScript ES2017",
  "Bootstrap",
  "Express.js",
  "MongoDB",
  "Restful APIs with Node and MongoDB",
  "Firebase",
  "Git",
  "Redux",
  "Sanity (Headless CMS)",
  "GraphQL",
  "Apollo Server",
  "Apollo Client",
];

const Skills: ForwardRefRenderFunction<HTMLElement, Props> = (props, ref) => {
  const { inView } = props;
  return (
    <section className={classes["skills"]} ref={ref}>
      <AnimationContainer inView={inView}>
        <h2>My Trade</h2>
        {techIcons.map((item, index) => (
          <img src={item.icon} key={index} alt={item.name} />
        ))}
        <h2>Others</h2>
        <div>
          {otherStuff.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </AnimationContainer>
    </section>
  );
};
export default forwardRef(Skills);
