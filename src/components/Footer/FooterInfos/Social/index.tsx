import { BoxSocial, Container } from "./styles";
import logo from "../../../../assets/Logos/logo.svg";
import face from "../../../../assets/SocialNetworks/facebook.svg";
import insta from "../../../../assets/SocialNetworks/insta.svg";
import youtube from "../../../../assets/SocialNetworks/youtube.svg";
import twitter from "../../../../assets/SocialNetworks/twitter.svg";
import tiktok from "../../../../assets/SocialNetworks/tiktok.svg";

export const Social = () => {
  return (
    <Container>
      <img src={logo} alt="logo" />
      <span>Nos siga:</span>
      <BoxSocial>
        <img src={face} alt="facebook" />
        <img src={insta} alt="instagram" />
        <img src={youtube} alt="youtube" />
        <img src={twitter} alt="twitter" />
        <img src={tiktok} alt="tiktok" />
      </BoxSocial>
    </Container>
  );
};
