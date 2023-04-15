import { Button } from "../Button";
import { FormStyle } from "./styles";

export const Form = () => {
  return (
    <FormStyle>
      <h2>
        FIQUE POR <span>DETRO</span>
      </h2>
      <p>
        Inscreva-se e seja o primeiro a saber sobre as novidades, promoções e
        muito mais!
      </p>
      <input type="text" placeholder="Digite seu nome" />
      <input type="text" placeholder="Digite seu e-mail" />
      <Button name="Enviar" />
    </FormStyle>
  );
};
