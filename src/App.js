import "./App.css";
import { lazy, useCallback, useEffect, useState } from "react";
import AboutUs from "./components/aboutUs";
import Services from "./components/services";
const Home = lazy(() => import("./components/home"));
function App() {
  const [isDark, setDark] = useState(true);
  const [scroll, setScroll] = useState(200);
  const toggleDarkMode = useCallback(() => {
    setDark((prev) => !prev);
  }, []);

  return (
    <div
      id="scroll-container"
      className={`App ${isDark ? "bg-dark" : "bg-light"}`}
    >
      <Home toggleDarkMode={toggleDarkMode} isDark={isDark} />
      <AboutUs />
      <Services />
    </div>
  );
}

export default App;
