import { BoxBrands, Container } from "./styles";
import wicomm from "../../../assets/Logos/wicomm.svg";
import vtex from "../../../assets/Logos/VTEX.svg";

export const FooterDown = () => {
  return (
    <Container>
      <p>Black Skull 2022. Todos os direitos reservados.</p>
      <BoxBrands>
        <img src={wicomm} alt="wicomm" />
        <img src={vtex} alt="vtex" />
      </BoxBrands>
    </Container>
  );
};
