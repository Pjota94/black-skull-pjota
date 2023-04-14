import { Cover } from "./components/Cover";
import { Header } from "./components/Header";
import { ListSuplement } from "./components/ListSuplement";
import { Releases } from "./components/Releases";
import Global from "./styles/global";

function App() {
  return (
    <>
      <Global />
      <Header />
      <Cover />
      <ListSuplement />
      <Releases />
    </>
  );
}

export default App;
