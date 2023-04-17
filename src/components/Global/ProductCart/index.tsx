import { Container, DivBottom, DivQuantity, DivTop } from "./styles";
import { FaRegTrashAlt } from "react-icons/fa";
import { IProduct } from "../../../interfaces";
import { useDispatch } from "react-redux";
import { decrease, increase, removeCard } from "../../../features/productSlice";

export const ProductCart = ({ id, image, name, price, amount }: IProduct) => {
  const dispatch = useDispatch();
  return (
    <Container>
      <DivTop>
        <img src={image} alt="whey" />
        <p>{name}</p>
        <FaRegTrashAlt onClick={() => dispatch(removeCard(id))} />
      </DivTop>
      <DivBottom>
        <span>R$ {price}</span>
        <DivQuantity>
          <span
            onClick={() => {
              if (amount === 1) {
                dispatch(removeCard(id));
              }
              dispatch(decrease(id));
            }}
            style={{ color: "var(--gray2)", cursor: "pointer" }}
          >
            -
          </span>
          <span>{amount}</span>
          <span
            onClick={() => dispatch(increase(id))}
            style={{ color: "var(--gray2)", cursor: "pointer" }}
          >
            +
          </span>
        </DivQuantity>
      </DivBottom>
    </Container>
  );
};
