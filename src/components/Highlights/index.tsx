import { CardHighligths } from "./CardHighligths";
import { Container } from "./styles";
import square from "../../assets/Vectors/square.svg";
import circle from "../../assets/Vectors/Circle.svg";

export const Highlights = () => {
  return (
    <Container>
      <CardHighligths
        title="Garanta o"
        image={square}
        buttonName={"consulte"}
        spanName="frete Grátis"
      />
      <CardHighligths
        title="Seu dinheiro"
        image={circle}
        buttonName={"entenda"}
        spanName="de volta"
      />
    </Container>
  );
};
