import classes from "./Card.module.css";
import { FC, ReactNode } from "react";
interface Props {
    children:ReactNode ,
    className:string 
}
const Card:FC<Props> = (props) => {
  const { className } = props;
  return (
    <div className={`${className} ${classes.card}`}>
      {props.children}
    </div>
  );
};

export default Card;
