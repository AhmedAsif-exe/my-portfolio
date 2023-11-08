import classes from "./Navbar.module.css";
import { FC } from "react";
interface Props {
  isIntersecting: boolean[];
}
const Navbar: FC<Props> = (props) => {
  const scroll = (slidenumber: number) => {
    window.scrollTo({
      top: slidenumber * window.innerHeight,
      left: 0,
      behavior: "smooth",
    });
  };
  const highlighter = (slide: number) => {
    return props.isIntersecting[slide] ? "nav-highlight" : "";
  };
  const darkAdjust =
    props.isIntersecting[0] || props.isIntersecting[1]
      ? "nav-alt"
      : "nav-alt-black";
  return (
    <header className={classes.nav}>
      <input className={classes["nav-check"]} type="checkbox" id="nav-check" />
      <div className={classes["nav-btn"]}>
        <label htmlFor={"nav-check"} className={`${classes[darkAdjust]}`}>
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div className={`${classes["nav-links"]} ${classes[darkAdjust]}`}>
        <a onClick={scroll.bind(null, 1)} className={highlighter(0)}>
          About
        </a>
        <a onClick={scroll.bind(null, 2)} className={highlighter(1)}>
          Skills
        </a>
        <a onClick={scroll.bind(null, 3)} className={highlighter(2)}>
          Experience
        </a>
        <a onClick={scroll.bind(null, 4)} className={highlighter(3)}>
          Contact
        </a>
      </div>
    </header>
  );
};
export default Navbar;
