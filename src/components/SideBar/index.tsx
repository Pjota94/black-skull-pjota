import { useEffect, useRef } from "react";
import { BoxClose, BoxProductEmpty, Container, ContainerModal } from "./styles";
import { CgClose } from "react-icons/cg";
import { BsCart2 } from "react-icons/bs";
import { Title } from "../Global/Title";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { motion } from "framer-motion";

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
        <BoxProductEmpty>
          <IoIosCloseCircleOutline />
          <h3>SEU CARRINHO ESTÁ VAZIO</h3>
        </BoxProductEmpty>
      </Container>
    </ContainerModal>
  );
};
