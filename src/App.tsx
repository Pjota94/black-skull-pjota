import { Blog } from "./components/Blog";
import { Cover } from "./components/Cover";
import { Header } from "./components/Header";
import { ListSuplement } from "./components/ListSuplement";
import { Promotion } from "./components/Promotion";
import { Releases } from "./components/Releases";
import { Team } from "./components/Team";
import Global from "./styles/global";

function App() {
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
    </>
  );
}

export default App;
