import classes from "./AboutMe.module.css";
import { forwardRef, ForwardRefRenderFunction } from "react";
import AnimationContainer from "./Utils/AnimationContainer";
import Card from "./Utils/Card";
import Props from "./Utils/PropType";

import Me from "./Images/Me.jpg";

const AboutMe: ForwardRefRenderFunction<HTMLElement, Props> = (props, ref) => {
  const { inView } = props;

  return (
    <section className={classes["basic-info"]} ref={ref}>
      <AnimationContainer inView={inView}>
        <img src={Me} alt="of the creator" />
        <p>Muhammad Ahmed Asif</p>
        <Card className={classes["card"]}>
          Hello and welcome! I'm a digital designer and web developer based in
          Pakistan, specialising UI/UX design and web development. I took the
          Cambridge A-level exams from The Science School. The subjects of
          interest were CS, Physics, Chemistry and Maths. I must say that I have
          a knack for CS. Now, I am a university student of National University
          of Computer and Emerging Sciences (NUCES) doing bachelors in? You
          guessed it COMPUTER SCIENCE!!.
        </Card>
      </AnimationContainer>
    </section>
  );
};
export default forwardRef(AboutMe);
