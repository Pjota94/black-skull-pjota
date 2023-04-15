import { IInfosTitle } from "../../../../interfaces";
import { BoxInfos, Container } from "./styles";

export const Infos = ({ title, array }: IInfosTitle) => {
  return (
    <Container>
      <h4>{title}</h4>
      <BoxInfos>
        {array.map((item) => (
          <span key={item.id}>{item.description}</span>
        ))}
      </BoxInfos>
    </Container>
  );
};
