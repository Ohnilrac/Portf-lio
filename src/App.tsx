import { Header } from "./components/header";
import { Main } from "./components/about";
import { Projects } from "./components/projects";
import { GlobalStyles } from "./styles/global";
import { Stacks } from "./components/stacks";
import { Footer } from "./components/footer";

export function App() {

  return (
    <div>
      <Header />
      <Main />
      <Projects />
      <Stacks />
      <Footer />
      <GlobalStyles />
    </div>
  )
}
