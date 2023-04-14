import { IButton } from "../../../interfaces";
import { ButtonStyle } from "./styles";

export const Button = ({ name }: IButton) => {
  return <ButtonStyle>{name}</ButtonStyle>;
};
