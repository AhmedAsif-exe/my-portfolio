import { ForwardRefRenderFunction, forwardRef } from "react";
import classes from "./Skills.module.css";
import Props from "../../../Utils/Types/PropType";
import { techIcons, otherStuff } from "../../../Utils/DataFile";
import AnimationContainer from "../../../Utils/WrapperComponents/AnimationContainer";

const Skills: ForwardRefRenderFunction<HTMLElement, Props> = (props, ref) => {
  const { inView } = props;
  return (
    <section className={classes["skills"]} ref={ref}>
      <AnimationContainer inView={inView}>
        <h2>My Trade</h2>
        <div>
          {techIcons.map((item, index) => (
            <img src={item.icon} key={index} alt={item.name} />
          ))}
        </div>
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
