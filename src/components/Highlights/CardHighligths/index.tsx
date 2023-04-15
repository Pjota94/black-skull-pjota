import { Button } from "../../Global/Button";
import { BoxText, BoxVector, Container } from "./styles";
import { ICardHighlight } from "../../../interfaces";

export const CardHighligths = ({
  buttonName,
  image,
  title,
  spanName,
}: ICardHighlight) => {
  return (
    <Container>
      <BoxText>
        <h2>
          {title} <span>{spanName}</span>
        </h2>
        <Button name={buttonName} />
      </BoxText>
      <BoxVector>
        <img src={image} alt={spanName} />
      </BoxVector>
    </Container>
  );
};
