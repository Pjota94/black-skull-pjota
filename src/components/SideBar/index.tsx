import { useContext, useEffect, useRef } from "react";
import {
  BoxClose,
  BoxProduct,
  BoxProductEmpty,
  Container,
  ContainerCart,
  ContainerModal,
} from "./styles";
import { CgClose } from "react-icons/cg";
import { BsCart2 } from "react-icons/bs";
import { Title } from "../Global/Title";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { motion } from "framer-motion";
import { ProductCart } from "../Global/ProductCart";
import { AuthMainContext } from "../../context/MainContext";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

export const Sidebar = ({ active, sidebar }: any) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClick = (event: Event) => {
      const target = event.target as HTMLButtonElement;
      if (!modalRef.current?.contains(target)) {
        active(false);
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [active]);

  const { currentSale, total } = useSelector(
    (state: RootState) => state.product
  );

  return (
    <ContainerModal>
      <Container
        ref={modalRef}
        as={motion.div}
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 100, opacity: 0 }}
        transition={{ stiffness: 100 }}
      >
        <BoxClose>
          <div className="CartTitle">
            <BsCart2 />
            <Title name="carrinho" />
          </div>
          <button onClick={() => active(false)}>
            <CgClose />
          </button>
        </BoxClose>
        {currentSale.length === 0 ? (
          <BoxProductEmpty>
            <IoIosCloseCircleOutline />
            <h3>SEU CARRINHO ESTÁ VAZIO</h3>
            <button onClick={() => active(false)}>CONTINUAR COMPRANDO</button>
          </BoxProductEmpty>
        ) : (
          <ContainerCart>
            <BoxProduct>
              {currentSale.map((product) => (
                <ProductCart
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  id={product.id}
                  image={product.image}
                  amount={product.amount}
                />
              ))}
            </BoxProduct>
            <div className="total">
              <h5>TOTAL</h5>
              <span>R$ {total.toFixed(2)}</span>
            </div>
            <button className="btn-buy">FINALIZAR COMPRA</button>
            <button onClick={() => active(false)}>CONTINUAR COMPRANDO</button>
          </ContainerCart>
        )}
      </Container>
    </ContainerModal>
  );
};
