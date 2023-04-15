import { About } from "./components/About";
import { Blog } from "./components/Blog";
import { Cover } from "./components/Cover";
import { Header } from "./components/Header";
import { Highlights } from "./components/Highlights";
import { ListSuplement } from "./components/ListSuplement";
import { Objectives } from "./components/Objectives";
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
      <Objectives />
      <Highlights />
      <About />
    </>
  );
}

export default App;
