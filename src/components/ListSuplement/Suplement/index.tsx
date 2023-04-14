import { Circle, Container } from "./styles";
import img from "../../../assets/Images/protein.png";
import { ISuplement } from "../../../interfaces";

export const Suplement = ({ id, name }: ISuplement) => {
  return (
    <Container>
      <Circle>
        <img src={img} alt="suplement" />
      </Circle>
      <h3>{name}</h3>
    </Container>
  );
};
