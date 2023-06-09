import { CircleQuantity, Container, DivButtons, DivDropBox } from "./styles";
import logo from "../../../assets/Logos/logo.svg";
import { Input } from "../../Global/Input";
import { TbUserCircle } from "react-icons/tb";
import { AiOutlineStar } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
import { useContext } from "react";
import { Sidebar } from "../../SideBar";
import { AnimatePresence } from "framer-motion";
import { AuthMainContext } from "../../../context/MainContext";
import { ModalLogin } from "../../ModalLogin";
import { DropBox } from "../../Global/DropBox";
import { dropboxCategory, dropboxClothing } from "../../../utils/mocks";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

export const HeaderStyles = () => {
  const { isModal, setIsModal, sidebar, setSidebar } =
    useContext(AuthMainContext);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  const { amount } = useSelector((state: RootState) => state.product);

  return (
    <Container>
      <img src={logo} alt="brand" />
      <nav>
        <DivDropBox>
          <a href="">CATEGORIAS</a>
          <DropBox array={dropboxCategory} />
        </DivDropBox>
        <DivDropBox>
          <a href="">VESTUÁRIOS</a>
          <DropBox array={dropboxClothing} />
        </DivDropBox>
        <a href="">OBJETIVOS</a>
        <a href="">PROMOÇÕES</a>
        <a href="">ATLETAS</a>
        <a href="">ASSINATURAS</a>
      </nav>
      <Input />
      <DivButtons>
        <button>
          <TbUserCircle onClick={() => setIsModal(true)} />
        </button>
        <button>
          <AiOutlineStar />
        </button>
        <button onClick={showSidebar}>
          <BsCart2 />
        </button>
        <CircleQuantity>
          <span>{amount}</span>
        </CircleQuantity>
      </DivButtons>
      <AnimatePresence>
        {sidebar && <Sidebar active={setSidebar} />}
        {isModal && <ModalLogin />}
      </AnimatePresence>
    </Container>
  );
};
