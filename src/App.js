import logo from "./logo.svg";
import "./App.css";
import { Suspense, lazy, useCallback, useState } from "react";
const Home = lazy(() => import("./components/home"));
function App() {
  const [isDark, setDark] = useState(false);
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
      <div className="App">
        <Home toggleDarkMode={toggleDarkMode} isDark={isDark} />
      </div>
    </Suspense>
  );
}

export default App;
