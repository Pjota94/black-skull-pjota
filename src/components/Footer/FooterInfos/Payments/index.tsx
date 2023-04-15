import { CreditCard, Container, BoxCredits } from "./styles";
import pagfacil from "../../../../assets/CreditCards/PagFacil.svg";
import visa from "../../../../assets/CreditCards/visa.svg";
import Mastercard from "../../../../assets/CreditCards/Mastercard.svg";
import hiper from "../../../../assets/CreditCards/hiper.svg";
import pix from "../../../../assets/CreditCards/pix.svg";
import amex from "../../../../assets/CreditCards/AMEX.svg";
import diner from "../../../../assets/CreditCards/DinersClub.svg";
import elo from "../../../../assets/CreditCards/Elo.svg";
import boleto from "../../../../assets/CreditCards/boleto.svg";

// TODO: Fazer component para BoxCredits

export const Payments = () => {
  return (
    <Container>
      <h4>Formas de Pagamento</h4>
      <BoxCredits>
        <CreditCard>
          <img src={pagfacil} alt="Pague Fácil" />
        </CreditCard>
        <CreditCard>
          <img src={visa} alt="visa" />
        </CreditCard>
        <CreditCard>
          <img src={Mastercard} alt="Mastercard" />
        </CreditCard>
        <CreditCard>
          <img src={hiper} alt="hiper" />
        </CreditCard>
        <CreditCard>
          <img src={pix} alt="pix" />
        </CreditCard>
        <CreditCard style={{ background: "#1F72CD" }}>
          <img src={amex} alt="amex" />
        </CreditCard>
        <CreditCard>
          <img src={diner} alt="diner" />
        </CreditCard>
        <CreditCard>
          <img src={elo} alt="elo" />
        </CreditCard>
        <CreditCard>
          <img src={boleto} alt="boleto" />
        </CreditCard>
      </BoxCredits>
    </Container>
  );
};
