import { useEffect, type ReactNode } from "react";
import { HashRouter, useLocation } from "react-router-dom";
import AppRoutes from "./routes";
import Headermain from "../header";
import AnimatedCursor from "../hooks/AnimatedCursor";

function ScrollToTop({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return children;
}

export default function App() {
  return (
    <HashRouter>
      <div className="cursor__dot">
        <AnimatedCursor
          innerSize={15}
          outerSize={15}
          outerAlpha={0.4}
          innerScale={0.7}
          outerScale={5}
        />
      </div>

      <ScrollToTop>
        <Headermain />
        <AppRoutes />
      </ScrollToTop>
    </HashRouter>
  );
}
