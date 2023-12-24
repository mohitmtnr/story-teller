import "./App.css";
import { useRef } from "react";
import AboutUs from "./components/aboutUs";
import Services from "./components/services";
import { useTheme } from "./context/theme";
import Home from "./components/home";
import Canva from "./canva/canva";
function App() {
  const containerRef = useRef();
  const { isDark } = useTheme();
  const handleWheel = (e) => {
    const delta = e.deltaY || e.deltaX;
    containerRef.current.scrollLeft += delta;
  };

  return (
    <div
      ref={containerRef}
      onWheel={handleWheel}
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
