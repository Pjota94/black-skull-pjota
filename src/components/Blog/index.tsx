import Slider from "react-slick";
import { Button } from "../Global/Button";
import { CardBlog } from "./CardBlog";
import { BoxCards, BoxTop, Container, Ul } from "./styles";
import { GrLinkPrevious } from "react-icons/gr";
import { GrLinkNext } from "react-icons/gr";
import { useRef } from "react";
import { blog } from "../../utils/db";

export const Blog = () => {
  const slider = useRef<any>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <Container>
      <BoxTop>
        <h2>
          Confira o <span>nosso blog</span>
        </h2>
        <Button name={"Ler todos"} />
      </BoxTop>
      <BoxCards>
        <Ul>
          <button className="prev" onClick={() => slider.current.slickPrev()}>
            <GrLinkPrevious />
          </button>
          <button className="next" onClick={() => slider.current.slickNext()}>
            <GrLinkNext />
          </button>
          <Slider ref={slider} {...settings}>
            {blog.map((item) => (
              <CardBlog
                key={item.id}
                title={item.title}
                url={item.url}
                date={item.date}
                id={item.id}
              />
            ))}
          </Slider>
        </Ul>
      </BoxCards>
    </Container>
  );
};
