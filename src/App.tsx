import "src/global.css";
import { useScrollToTop } from "src/hooks/use-scroll-to-top";
import ThemeProvider from "./theme";
import Router from "./routes/sections";

function App() {
  useScrollToTop();
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}

export default App;
