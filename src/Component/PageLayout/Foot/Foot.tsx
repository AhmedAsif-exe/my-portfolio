import classes from "./Foot.module.css";
const Foot = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes["copyright-area"]}>
        <div className={classes["copyright-text"]}>
          <p>Digital Odyssey &copy; 2023</p>
        </div>
      </div>
    </footer>
  );
};
export default Foot;
