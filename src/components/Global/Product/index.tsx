import { BoxButtons, BoxImage, Container, Name, Price, Promo } from "./styles";
import img from "../../../assets/Images/whey.svg";
import { AiOutlineStar } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
import { IProduct } from "../../../interfaces";

export const Product = ({ id, name, price }: IProduct) => {
  return (
    <>
      <BoxButtons>
        <div className="div-flex">
          <AiOutlineStar />
          <BsCart2 />
        </div>
      </BoxButtons>
      <Container>
        <BoxImage>
          <img src={img} alt="whey" />
        </BoxImage>
        <Name>{name}</Name>
        <Price>R$ {price}</Price>
        <Promo>ou 12x de R$ 29,16</Promo>
      </Container>
    </>
  );
};
