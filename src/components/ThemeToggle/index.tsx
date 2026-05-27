import { useEffect, useState } from "react";
import { WiMoonAltWaningCrescent4 } from "react-icons/wi";

type Theme = "dark" | "light";

const getInitialTheme = (): Theme => {
  const savedTheme = localStorage.getItem("theme");
  return savedTheme === "light" ? "light" : "dark";
};

const Themetoggle = () => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="nav-action"
      onClick={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
      type="button"
    >
      <WiMoonAltWaningCrescent4 />
    </button>
  );
};

export default Themetoggle;
