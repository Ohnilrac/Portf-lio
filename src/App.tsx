import { Header } from "./components/header";
import { Main } from "./components/about";
import { Projects } from "./components/projects";
import { GlobalStyles } from "./styles/global";
import { Stacks } from "./components/stacks";
import { Footer } from "./components/footer";
import { BackTotop } from "./components/backToTop/button.jsx";

export function App() {

  return (
    <div>
      <Header />
      <Main />
      <Projects />
      <Stacks />
      <Footer />
      <BackTotop />
      <GlobalStyles />
    </div>
  )
}
