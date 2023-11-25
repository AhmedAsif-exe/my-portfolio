import mangaQuest from "./Images/manga-quest.png";
import mangaQuest2 from "./Images/manga-quest2.png";
import mangaQuest3 from "./Images/manga-quest3.png";
import mangaQuest4 from "./Images/manga-quest4.png";

import YelpCamp from "./Images/YelpCamp.png";
import YelpCamp2 from "./Images/YelpCamp2.png";
import YelpCamp3 from "./Images/YelpCamp3.png";

import Css from "./Images/Icons/Css.svg";
import Html from "./Images/Icons/Html.svg";
import JavaScript from "./Images/Icons/JavaScript.svg";
import React from "./Images/Icons/React.svg";
import Node from "./Images/Icons/Node.svg";
import TypeScript from "./Images/Icons/TypeScript.svg";
import Cpp from "./Images/Icons/Cpp.svg";
import Python from "./Images/Icons/Python.svg";

const works = [
  {
    name: "Manga Quest",
    src: [mangaQuest, mangaQuest2, mangaQuest3, mangaQuest4],
    description:
      "I've created an e-commerce website that replicates a manga store, where I can showcase my passion for Japanese literature. The website was developed using React, Node/Express, and Firebase as the tech stack.",
    github: "https://github.com/AhmedAsif-exe/manga-store",

    link: "https://manga-quest.web.app/",
    badges: [
      { label: "React" },
      { label: "Node" },
      { label: "Express" },
      { label: "Firebase" },
      { label: "CSS" },
      { label: "JS" },
    ],
  },
  {
    name: "Yelp Camp",
    src: [YelpCamp, YelpCamp2, YelpCamp3],
    description:
      "I have developed a review application that enables users to both read and write reviews for well-known campsites worldwide. Node.js/Express for the back-end and MongoDB as the database. EJS templates were used to serve the websites on the Front-End. While it hasn't been deployed yet, you can assess the code quality by visiting the GitHub repository.",
    github: "https://github.com/AhmedAsif-exe/YelpCamp",
    link: null,
    badges: [
      { label: "Css" },
      { label: "Node" },
      { label: "Express" },
      { label: "MongoDB" },
      { label: "EJS" },
      { label: "BootStrap" },
      { label: "JS" },
    ],
  },
];

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
  "JavaScript ES2015, ES2016, ES2017",
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
export { otherStuff, works, techIcons };
