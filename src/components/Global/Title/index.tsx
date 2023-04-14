import { ITitle } from "../../../interfaces";
import { TitleStyle } from "./styles";

export const Title = ({ name }: ITitle) => {
  return <TitleStyle>{name}</TitleStyle>;
};
