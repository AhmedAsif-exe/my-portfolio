import { forwardRef, ForwardRefRenderFunction } from "react";
import classes from "./Experience.module.css";
import Props from "../../../Utils/Types/PropType";
import AnimationContainer from "../../../Utils/WrapperComponents/AnimationContainer";
import { BadgeCard } from "./BadgeCard/BadgeCard";
import { works } from "../../../Utils/DataFile";
interface ModalHandlerFunction {
  modalHandler: (opened: boolean) => void;
}
const Exprerience: ForwardRefRenderFunction<
  HTMLElement,
  Props & ModalHandlerFunction
> = (props, ref) => {
  const { inView } = props;

  return (
    <section className={classes.experience} ref={ref}>
      <AnimationContainer inView={inView}>
        <div className={classes.cardholder}>
          {works.map((items) => (
            <BadgeCard {...items} modalHandler={props.modalHandler} />
          ))}
        </div>
      </AnimationContainer>
    </section>
  );
};
export default forwardRef(Exprerience);
