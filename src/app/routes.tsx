import { Route, Routes, useLocation } from "react-router-dom";
import { About } from "../pages/about";
import { Contact } from "../pages/contact";
import { Home } from "../pages/home";
import { Projects } from "../pages/projects";
import { Project } from "../components/Project";
import { SocialIcons } from "../components/SocialIcons";
import { PROJECTS } from "../constants";
import { changeStringSeparator } from "../utils";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <main className="page-shell" key={location.pathname}>
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        {Object.entries(PROJECTS).map(([key, value]) => (
          <Route
            element={<Project projectKey={key} project={value} />}
            key={key}
            path={`/projects/${changeStringSeparator(key, " ", "_")}`}
          />
        ))}
        <Route path="*" element={<Home />} />
      </Routes>
    </main>
  );
}

export default function AppRoutes() {
  return (
    <div className="app-layout">
      <AnimatedRoutes />
      <SocialIcons />
    </div>
  );
}
