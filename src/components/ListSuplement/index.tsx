import { Suplement } from "./Suplement";
import { Container, Ul } from "./styles";
import { supplement } from "../../utils/db";
import Slider from "react-slick";
import { useRef } from "react";
import { GrLinkPrevious } from "react-icons/gr";
import { GrLinkNext } from "react-icons/gr";

export const ListSuplement = () => {
  const slider = useRef<any>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 4,
  };

  return (
    <Container>
      <Ul>
        <button className="prev" onClick={() => slider.current.slickPrev()}>
          <GrLinkPrevious />
        </button>
        <button className="next" onClick={() => slider.current.slickNext()}>
          <GrLinkNext />
        </button>
        <Slider ref={slider} {...settings}>
          {supplement.map((item) => (
            <Suplement key={item.id} name={item.name} id={item.id} />
          ))}
        </Slider>
      </Ul>
    </Container>
  );
};
