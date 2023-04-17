import { BoxButtons, BoxImage, Container, Name, Price, Promo } from "./styles";
import { AiOutlineStar } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
import { IProduct } from "../../../interfaces";
import { useDispatch } from "react-redux";
import { addCart } from "../../../features/productSlice";

export const Product = ({ name, price, image, item }: IProduct) => {
  const dispatch = useDispatch();

  return (
    <>
      <BoxButtons>
        <div className="div-flex">
          <AiOutlineStar />
          <BsCart2 onClick={() => dispatch(addCart(item))} />
        </div>
      </BoxButtons>
      <Container>
        <BoxImage>
          <img src={image} alt="whey" />
        </BoxImage>
        <Name>{name}</Name>
        <Price>R$ {price}</Price>
        <Promo>ou 12x de R$ 29,16</Promo>
      </Container>
    </>
  );
};
