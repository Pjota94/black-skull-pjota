import { Container } from "./styles";
import { FiSearch } from "react-icons/fi";

export const Input = () => {
  return (
    <Container>
      <input type="text" placeholder="Buscar" />
      <FiSearch />
    </Container>
  );
};
