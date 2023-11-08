import { forwardRef, ForwardRefRenderFunction } from "react";
import classes from "./Contact.module.css";
import Props from "./Utils/PropType";

const Contact: ForwardRefRenderFunction<HTMLElement, Props> = (props, ref) => {
  return <section className={classes.contact} ref={ref}></section>;
};
export default forwardRef(Contact);
