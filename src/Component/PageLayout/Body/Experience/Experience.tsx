import { forwardRef, ForwardRefRenderFunction } from "react";
import classes from "./Experience.module.css";
import Props from "../../../Utils/Types/PropType";
import AnimationContainer from "../../../Utils/WrapperComponents/AnimationContainer";
import { BadgeCard } from "./BadgeCard/BadgeCard";
import { works } from "../../../Utils/DataFile";
import { Carousel } from "@mantine/carousel";
interface ModalHandlerFunction {
  modalHandler: (opened: boolean) => void;
}
const Exprerience: ForwardRefRenderFunction<
  HTMLElement,
  Props & ModalHandlerFunction
> = (props, ref) => {
  const { inView } = props;
  const setCarousel = window.innerWidth < 600;
  const cards = works.map((items) => {
    if (setCarousel)
      return (
        <Carousel.Slide>
          <BadgeCard
            {...items}
            modalHandler={props.modalHandler}
            key={items.name}
          />
        </Carousel.Slide>
      );
    else
      return (
        <BadgeCard
          {...items}
          modalHandler={props.modalHandler}
          key={items.name}
        />
      );
  });

  return (
    <section className={classes.experience} ref={ref}>
      <AnimationContainer inView={inView}>
        <div className={classes.cardholder}>
          {setCarousel && <Carousel>{cards}</Carousel>}
          {!setCarousel && cards}
        </div>
      </AnimationContainer>
    </section>
  );
};
export default forwardRef(Exprerience);
