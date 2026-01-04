import { Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Home } from "../pages/home";
import { Projects } from "../pages/projects";
import { Contact } from "../pages/contact";
import { About } from "../pages/about";
import { Project } from "../components/Project";
import { SocialIcons } from "../components/SocialIcons";
import { PROJECTS } from "../constants";
import { changeStringSeparator } from "../utils";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.pathname}
        timeout={{
          enter: 400,
          exit: 400,
        }}
        classNames="page"
        unmountOnExit
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
          {Object.entries(PROJECTS).map(entry => {

            const [key, _] = entry;

            return <Route key={key} element={<Project object={entry}/>} path={`/projects/${changeStringSeparator(key, " ", "_")}`} />
          })}
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default function AppRoutes() {
  return (
    <div className="s_c">
      <AnimatedRoutes />
      <SocialIcons />
    </div>
  );
}
