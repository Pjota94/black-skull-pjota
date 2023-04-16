import { IDropBox } from "../../../interfaces";
import { Container } from "./styles";

export const DropBox = ({ array }: IDropBox) => {
  return (
    <Container>
      <ul>
        {array.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </Container>
  );
};
