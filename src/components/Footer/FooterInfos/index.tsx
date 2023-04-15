import { Infos } from "./Infos";
import { Social } from "./Social";
import { BoxPaymentsSecurity, BoxSocialInfos, Container } from "./styles";
import { blackUsa, institutional, affiliated } from "../../../utils/mocks";
import { Payments } from "./Payments";
import { Security } from "./Security";

export const FooterInfos = () => {
  return (
    <Container>
      <BoxSocialInfos>
        <Social />
        <Infos title="Blackskull USA" array={blackUsa} />
        <Infos title="Institucional" array={institutional} />
        <Infos title="Afiliados" array={affiliated} />
      </BoxSocialInfos>
      <BoxPaymentsSecurity>
        <p></p>
        <Payments />
        <Security />
      </BoxPaymentsSecurity>
    </Container>
  );
};
