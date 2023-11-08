import { forwardRef, ForwardRefRenderFunction } from "react";
import classes from "./Experience.module.css";
import Props from "./Utils/PropType";

const Exprerience: ForwardRefRenderFunction<HTMLElement, Props> = (
  props,
  ref
) => {
  return <section className={classes.experience} ref={ref}></section>;
};
export default forwardRef(Exprerience);
