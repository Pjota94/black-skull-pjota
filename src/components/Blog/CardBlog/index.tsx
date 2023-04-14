import { ICardBlog } from "../../../interfaces";
import { Button } from "../../Global/Button";
import { BoxInfos, Container } from "./styles";

export const CardBlog = ({ date, id, title, url }: ICardBlog) => {
  return (
    <Container>
      <img src={url} alt={title} />
      <BoxInfos>
        <span>{date}</span>
        <p>{title}</p>
        <Button name={"ler mais"} />
      </BoxInfos>
    </Container>
  );
};
