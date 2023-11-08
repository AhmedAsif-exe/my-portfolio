import { FC, ReactNode, useEffect, useState } from "react";
import animation from "./Animation.module.css";
interface Props {
  inView: boolean;
  children: ReactNode;
}
const AnimationContainer: FC<Props> = (props) => {
  const { inView } = props;
  const [tempInView, setTempInView] = useState(inView);
  let motion = inView ? "fade-away" : "fade-in";
  useEffect(() => {
    if (!inView)
      setTimeout(() => {
        setTempInView(false);
      }, 1000);
    else setTempInView(true);
  }, [inView, tempInView]);
  return (
    <div className={animation[motion]}>{tempInView && props.children}</div>
  );
};
export default AnimationContainer;
