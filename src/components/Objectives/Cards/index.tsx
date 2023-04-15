import { Container } from "./styles";
import { Banner, SpanStyle } from "./styles";
import banner from "../../../assets/Vectors/RectangleYellow.svg";
import { ICardObjective } from "../../../interfaces";

export const Card = ({ image, objective }: ICardObjective) => {
  return (
    <Container>
      <figure>
        <img src={`${image}`} alt={objective} />
      </figure>
      <Banner src={banner} alt="banner" />
      <SpanStyle>{objective}</SpanStyle>
    </Container>
  );
};
