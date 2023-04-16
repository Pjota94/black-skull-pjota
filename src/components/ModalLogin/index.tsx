import { useContext, useEffect, useRef } from "react";
import { BoxLogin, Container } from "./styles";
import { AuthMainContext } from "../../context/MainContext";
import { motion } from "framer-motion";
import { Title } from "../Global/Title";
import { Button } from "../Global/Button";
import { CgClose } from "react-icons/cg";

export const ModalLogin = () => {
  const { setIsModal } = useContext(AuthMainContext);

  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClick = (event: Event) => {
      const target = event.target as HTMLButtonElement;
      if (!modalRef.current?.contains(target)) {
        setIsModal(false);
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [setIsModal]);

  return (
    <Container>
      <BoxLogin
        ref={modalRef}
        as={motion.div}
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
      >
        <Title name="Login" />
        <CgClose onClick={() => setIsModal(false)} />
        <form action="">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" placeholder="Digite seu e-mail" />
          <label htmlFor="password">Senha</label>
          <input type="text" id="password" placeholder="Digite sua Senha" />
          <Button name="Entrar" />
        </form>
      </BoxLogin>
    </Container>
  );
};
