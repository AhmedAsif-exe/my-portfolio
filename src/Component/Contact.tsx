import { forwardRef, ForwardRefRenderFunction } from "react";
import classes from "./Contact.module.css";
import Props from "./Utils/PropType";
import AnimationContainer from "./Utils/AnimationContainer";
import GitHub from "./Images/Icons/GitHub.svg";
import Upwork from "./Images/Icons/UpWork.svg";
const Contact: ForwardRefRenderFunction<HTMLElement, Props> = (props, ref) => {
  const { inView } = props;
  return (
    <section className={classes.contact} ref={ref}>
      <AnimationContainer inView={inView}>
        <p>With My Skills, I will be thrilled to help you out.</p>
        <p>You Can Reach Out To Me On</p>
        <div className={classes.logo}>
          <a href="https://github.com/AhmedAsif-exe">
            <img src={GitHub} alt="Github Logo" />
          </a>
          <a href="https://www.upwork.com/">
            <img src={Upwork} alt="upwork logo" />
          </a>
        </div>
      </AnimationContainer>
    </section>
  );
};
export default forwardRef(Contact);
