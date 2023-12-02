import { forwardRef, ForwardRefRenderFunction } from "react";
import classes from "./Contact.module.css";
import Props from "../../../Utils/Types/PropType";
import AnimationContainer from "../../../Utils/WrapperComponents/AnimationContainer";
import GitHub from "../../../Utils/Images/Icons/GitHub.svg";
import Upwork from "../../../Utils/Images/Icons/UpWork.svg";
import UserInfoIcons from "./UserInfoIcons/UserInfoIcons";

const Contact: ForwardRefRenderFunction<HTMLElement, Props> = (props, ref) => {
  const { inView } = props;
  return (
    <section className={classes.contact} ref={ref}>
      <AnimationContainer inView={inView}>
        <p>With My Skills, I will be thrilled to help you out.</p>
        <p>You Can Reach Out To Me</p>

        <UserInfoIcons />
        <div className={classes.logo}>
          <a href="https://github.com/AhmedAsif-exe">
            <img loading="lazy" src={GitHub} alt="Github Logo" />
          </a>
          <a href="https://www.upwork.com/freelancers/~015e2428196ca409b4">
            <img loading="lazy" src={Upwork} alt="upwork logo" />
          </a>
        </div>
      </AnimationContainer>
    </section>
  );
};
export default forwardRef(Contact);
