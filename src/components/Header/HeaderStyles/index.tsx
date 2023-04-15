import { Container, DivButtons } from "./styles";
import logo from "../../../assets/Logos/logo.svg";
import { Input } from "../../Global/Input";
import { TbUserCircle } from "react-icons/tb";
import { AiOutlineStar } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
import { useState } from "react";
import { Sidebar } from "../../SideBar";
import { AnimatePresence } from "framer-motion";

export const HeaderStyles = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <Container>
      <img src={logo} alt="brand" />
      <nav>
        <a href="">CATEGORIAS</a>
        <a href="">VESTUÁRIOS</a>
        <a href="">OBJETIVOS</a>
        <a href="">PROMOÇÕES</a>
        <a href="">ATLETAS</a>
        <a href="">ASSINATURAS</a>
      </nav>
      <Input />
      <DivButtons>
        <button>
          <TbUserCircle />
        </button>
        <button>
          <AiOutlineStar />
        </button>
        <button onClick={showSidebar}>
          <BsCart2 />
        </button>
      </DivButtons>
      <AnimatePresence>
        {sidebar && <Sidebar active={setSidebar} />}
      </AnimatePresence>
    </Container>
  );
};
