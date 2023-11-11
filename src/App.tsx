import "./App.css";
import React, { useState } from "react";
import Navbar from "./Component/PageLayout/Navbar/Navbar";
import Title from "./Component/PageLayout/Body/Title/Title";
import AboutMe from "./Component/PageLayout/Body/AboutMe/AboutMe";
import Skills from "./Component/PageLayout/Body/Skills/Skills";
import Experience from "./Component/PageLayout/Body/Experience/Experience";
import Contact from "./Component/PageLayout/Body/Contact/Contact";
import useIntersection from "./Component/Utils/Hooks/use-intersection";
import BackToTop from "./Component/PageLayout/BackToTop/BackToTop";
import Foot from "./Component/PageLayout/Foot/Foot";
import useScroll from "./Component/Utils/Hooks/use_scroll";

const App: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { scrolled } = useScroll(window.innerHeight * 0.5);
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.6,
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
  const modalHandler = (opened: boolean) => {
    setModalOpen(opened);
  };

  return (
    <div className="App">
      <Navbar isIntersecting={isIntersecting} modalOpen={modalOpen} />
      <Title />
      <AboutMe ref={aboutMeRef} inView={aboutMeIsIntersecting} />
      <Skills ref={skillsRef} inView={skillsIsIntersecting} />
      <Experience
        ref={experienceRef}
        inView={experienceIsIntersecting}
        modalHandler={modalHandler}
      />
      <Contact ref={contactRef} inView={contactIsIntersecting} />
      {scrolled && <BackToTop />}
      <Foot />
    </div>
  );
};

export default App;
