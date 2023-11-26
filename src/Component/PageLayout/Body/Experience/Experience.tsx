import { forwardRef, ForwardRefRenderFunction } from "react";
import classes from "./Experience.module.css";
import Props from "../../../Utils/Types/PropType";
import AnimationContainer from "../../../Utils/WrapperComponents/AnimationContainer";
import { BadgeCard } from "./BadgeCard/BadgeCard";
import { works } from "../../../Utils/DataFile";
import { Carousel } from "@mantine/carousel";

const Exprerience: ForwardRefRenderFunction<HTMLElement, Props> = (
  props,
  ref
) => {
  const { inView } = props;
  const setCarousel = window.innerWidth < 600;
  const cards = works.map((items) => {
    if (setCarousel)
      return (
        <Carousel.Slide key={items.name}>
          <BadgeCard {...items} key={items.name} />
        </Carousel.Slide>
      );
    else return <BadgeCard {...items} key={items.name} />;
  });

  return (
    <section className={classes.experience} ref={ref}>
      <AnimationContainer inView={inView}>
        {!setCarousel && <div className={classes.cardholder}>{cards}</div>}
        {setCarousel && (
          <Carousel
            height="100%"
            slideSize="100%"
            align="start"
            style={{ width: "100%" }}
          >
            {cards}
          </Carousel>
        )}
      </AnimationContainer>
    </section>
  );
};
export default forwardRef(Exprerience);
