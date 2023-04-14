import { HeaderStyles } from "./HeaderStyles";
import { SubHeader } from "./SubHeader";
import { Container } from "./styles";

export const Header = () => {
  return (
    <Container>
      <SubHeader />
      <HeaderStyles />
    </Container>
  );
};
