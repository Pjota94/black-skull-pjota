import { useRef } from "react";
import { Title } from "../Global/Title";
import { BoxCards, Container, Ul } from "./styles";
import { GrLinkPrevious } from "react-icons/gr";
import { GrLinkNext } from "react-icons/gr";
import { products } from "../../utils/db";
import { Product } from "../Global/Product";
import Slider from "react-slick";

export const Releases = () => {
  const slider = useRef<any>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <Container>
      <Title name={"lançamentos"} />
      <BoxCards>
        <Ul>
          <button className="prev" onClick={() => slider.current.slickPrev()}>
            <GrLinkPrevious />
          </button>
          <button className="next" onClick={() => slider.current.slickNext()}>
            <GrLinkNext />
          </button>
          <Slider ref={slider} {...settings}>
            {products.map((item) => (
              <Product
                key={item.id}
                name={item.name}
                id={item.id}
                price={item.price}
                image={item.image}
                item={item}
                amount={item.amount}
              />
            ))}
          </Slider>
        </Ul>
      </BoxCards>
    </Container>
  );
};
