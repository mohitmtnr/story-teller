import logo from "./logo.svg";
import "./App.css";
import { Suspense, lazy, useCallback, useState } from "react";
import AboutUs from "./components/aboutUs";
import Services from "./components/services";
const Home = lazy(() => import("./components/home"));
function App() {
  const [isDark, setDark] = useState(true);
  const toggleDarkMode = useCallback(() => {
    setDark((prev) => !prev);
  }, []);

  return (
    <Suspense
      fallback={
        <header className="loading">
          <img src={logo} className="loading-logo" alt="logo" />
          <p>Loading...</p>
        </header>
      }
    >
      <div className={`App ${isDark ? "bg-dark" : "bg-light"}`}>
        <Home toggleDarkMode={toggleDarkMode} isDark={isDark} />
        <AboutUs />
        <Services />
      </div>
    </Suspense>
  );
}

export default App;
