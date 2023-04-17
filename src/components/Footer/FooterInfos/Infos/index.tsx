import { IInfosTitle } from "../../../../interfaces";
import { BoxInfos, Container } from "./styles";

export const Infos = ({ title, array }: IInfosTitle) => {
  return (
    <Container>
      <h4>{title}</h4>
      <BoxInfos>
        {array.map((item) => (
          <a key={item.id} href="">
            {" "}
            {item.description}
          </a>
        ))}
      </BoxInfos>
    </Container>
  );
};
