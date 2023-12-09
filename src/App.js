import "./App.css";
import { useState } from "react";
import AboutUs from "./components/aboutUs";
import Services from "./components/services";
import { useTheme } from "./context/theme";
import Home from "./components/home";
import Canva from "./canva/canva";
function App() {
  // const [scroll, setScroll] = useState(200);
  const { isDark } = useTheme();

  return (
    <div
      id="scroll-container"
      className={`App ${isDark ? "bg-dark" : "bg-light"}`}
    >
      <Canva />
      <Home />
      <AboutUs />
      <Services />
    </div>
  );
}

export default App;
