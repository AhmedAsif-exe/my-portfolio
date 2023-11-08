import "./App.css";
import React from "react";
import Navbar from "./Component/Navbar";
import Title from "./Component/Title";
import AboutMe from "./Component/AboutMe";
import Skills from "./Component/Skills";
import Experience from "./Component/Experience";
import Contact from "./Component/Contact";
import useIntersection from "./Component/Hooks/use-intersection";
import BackToTop from "./Component/BackToTop";
import Foot from "./Component/Foot";
import useScroll from "./Component/Hooks/use_scroll";
const App: React.FC = () => {
  const { scrolled } = useScroll(window.innerHeight * 0.5);
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };
  const { targetRef: aboutMeRef, isIntersecting: aboutMeIsIntersecting } =
    useIntersection(options);
  const { targetRef: skillsRef, isIntersecting: skillsIsIntersecting } =
    useIntersection(options);
  const { targetRef: experienceRef, isIntersecting: experienceIsIntersecting } =
    useIntersection(options);
  const { targetRef: contactRef, isIntersecting: contactIsIntersecting } =
    useIntersection(options);

  const isIntersecting = [
    aboutMeIsIntersecting,
    skillsIsIntersecting,
    experienceIsIntersecting,
    contactIsIntersecting,
  ];

  return (
    <div className="App">
      <Navbar isIntersecting={isIntersecting} />
      <Title />
      <AboutMe ref={aboutMeRef} inView={aboutMeIsIntersecting} />
      <Skills ref={skillsRef} inView={skillsIsIntersecting} />
      <Experience ref={experienceRef} inView={experienceIsIntersecting} />
      <Contact ref={contactRef} inView={contactIsIntersecting} />
      {scrolled && <BackToTop />}
      <Foot />
    </div>
  );
};

export default App;
