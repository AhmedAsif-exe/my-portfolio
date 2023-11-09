import classes from "./BackToTop.module.css";
import backToTop from "../../Utils/Images/Icons/back-top.svg";
const BackToTop = () => {
  const clickHandler = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <button className={classes.button} onClick={clickHandler}>
      <img src={backToTop} alt="Back To Top" />
    </button>
  );
};
export default BackToTop;
