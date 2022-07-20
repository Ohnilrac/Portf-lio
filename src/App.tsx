import { Info } from "./components/info";
import { Projects } from "./components/projects";
import { GlobalStyles } from "./styles/global";
import { Stacks } from "./components/stacks";
import { Footer } from "./components/footer";
import { BackTotop } from "./components/backToTop/button";

export function App() {

  return (
    <div>
      <Info />
      <Projects />
      <Stacks />
      <Footer />
      <BackTotop />
      <GlobalStyles />
    </div>
  )
}
