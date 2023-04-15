import { Title } from "../Global/Title";
import { Card } from "./Cards";
import { BoxCards, Container } from "./styles";
import mass from "../../assets/Images/massGain.png";
import energy from "../../assets/Images/energy.png";
import recovery from "../../assets/Images/recovery.png";
import slimming from "../../assets/Images/slimming.png";

export const Objectives = () => {
  return (
    <Container>
      <Title name="Objetivos" />
      <BoxCards>
        <Card image={mass} objective="Ganho de Massa" />
        <Card image={energy} objective="Energia" />
        <Card image={recovery} objective="Recuperação Muscular" />
        <Card image={slimming} objective="Emagrecimento" />
      </BoxCards>
    </Container>
  );
};
