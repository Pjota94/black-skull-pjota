import { Container } from "./styles";
import { BsTruck } from "react-icons/bs";

export const SubHeader = () => {
  return (
    <Container>
      <a href="">Fale Conosco</a>
      <div className="truck-text">
        <BsTruck />
        <p>Frete grátis a partir de R$ 199,90 para todo Brasil</p>
      </div>
      <a href="">Blog.Blackskull</a>
    </Container>
  );
};
