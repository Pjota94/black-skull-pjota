import { Container } from "./styles";
import { BsTruck } from "react-icons/bs";

export const SubHeader = () => {
  return (
    <Container>
      <h5>Fale Conosco</h5>
      <div className="truck-text">
        <BsTruck />
        <p>Frete grátis a partir de R$ 199,90 para todo Brasil</p>
      </div>
      <h5>Blog.Blackskull</h5>
    </Container>
  );
};
