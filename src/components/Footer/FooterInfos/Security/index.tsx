import { BoxSecutiry, Container } from "./styles";
import certifield from "../../../../assets/Security/SecVtex.svg";
import ebit from "../../../../assets/Security/ebit.svg";

export const Security = () => {
  return (
    <Container>
      <h4>Segurança</h4>
      <BoxSecutiry>
        <img src={certifield} alt="certifield" />
        <img src={ebit} alt="ebit" />
      </BoxSecutiry>
    </Container>
  );
};
