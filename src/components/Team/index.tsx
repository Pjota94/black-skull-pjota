import { BoxCards, ButtonMore, Container, Img, Skull, Ul } from "./styles";
import skull from "../../assets/Flag/skullTwo.svg";
import { useRef } from "react";
import Slider from "react-slick";
import { GrLinkPrevious } from "react-icons/gr";
import { GrLinkNext } from "react-icons/gr";
import bodybuilder from "../../assets/Images/Rectangle1.png";
import bodybuilder2 from "../../assets/Images/Rectangle2.png";
import bodybuilder3 from "../../assets/Images/Rectangle3.png";

export const Team = () => {
  const slider = useRef<any>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 4,
  };
  return (
    <>
      <Container>
        <h2>
          Conheça a Tropa <span>Black Skull</span>
        </h2>
        <BoxCards>
          <Ul>
            <button className="prev" onClick={() => slider.current.slickPrev()}>
              <GrLinkPrevious />
            </button>
            <button className="next" onClick={() => slider.current.slickNext()}>
              <GrLinkNext />
            </button>
            <Slider ref={slider} {...settings}>
              <Img src={bodybuilder} alt="bodybuilder" />
              <Img src={bodybuilder2} alt="bodybuilder" />
              <Img src={bodybuilder3} alt="bodybuilder" />
              <Img src={bodybuilder} alt="bodybuilder" />
              <Img src={bodybuilder2} alt="bodybuilder" />
              <Img src={bodybuilder3} alt="bodybuilder" />
            </Slider>
          </Ul>
        </BoxCards>
        <ButtonMore>VER TODOS</ButtonMore>
        <Skull src={skull} alt="skull" />
      </Container>
    </>
  );
};
