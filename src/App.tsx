import { useDispatch, useSelector } from "react-redux";
import { About } from "./components/About";
import { Blog } from "./components/Blog";
import { Cover } from "./components/Cover";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Highlights } from "./components/Highlights";
import { ListSuplement } from "./components/ListSuplement";
import { Objectives } from "./components/Objectives";
import { Promotion } from "./components/Promotion";
import { Releases } from "./components/Releases";
import { Team } from "./components/Team";
import Global from "./styles/global";
import { RootState } from "./store";
import { useEffect } from "react";
import { totalValue } from "./features/productSlice";

function App() {
  const { currentSale } = useSelector((state: RootState) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(totalValue());
  }, [currentSale, dispatch]);

  return (
    <>
      <Global />
      <Header />
      <Cover />
      <ListSuplement />
      <Releases />
      <Team />
      <Promotion />
      <Blog />
      <Objectives />
      <Highlights />
      <About />
      <Footer />
    </>
  );
}

export default App;
