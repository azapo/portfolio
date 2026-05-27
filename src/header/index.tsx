import { useState } from "react";
import { Link } from "react-router-dom";
import { VscClose, VscGrabber } from "react-icons/vsc";
import { SOCIAL_PROFILES } from "../constants";
import Themetoggle from "../components/ThemeToggle";
import logo from "../assets/images/logo.png";

const Headermain = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen((current) => !current);
    document.body.classList.toggle("ovhidden", !isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.classList.remove("ovhidden");
  };

  return (
    <>
      <header className="site-header">
        <Link aria-label="Go home" className="nav-action logo-link" to="/">
          <img alt="Aram Zaprosyan logo" src={logo} />
        </Link>

        <div className="header-actions">
          <Themetoggle />
          <button
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
            className="nav-action menu-button"
            onClick={handleToggle}
            type="button"
          >
            {isMenuOpen ? <VscClose /> : <VscGrabber />}
          </button>
        </div>

        <nav
          aria-label="Primary navigation"
          className={`site-navigation ${isMenuOpen ? "is-open" : ""}`}
        >
          <div className="menu-panel">
            <ul className="main-menu">
              {[
                ["Home", "/"],
                ["About", "/about"],
                ["Projects", "/projects"],
                ["Contact", "/contact"],
              ].map(([label, path]) => (
                <li className="menu-item" key={path}>
                  <Link onClick={closeMenu} to={path}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="menu-footer">
              {Object.entries(SOCIAL_PROFILES).map(([platform, url]) => (
                <a href={url} key={platform} rel="noopener noreferrer" target="_blank">
                  {platform}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>
      <div className="edge-bar edge-bar-top" />
      <div className="edge-bar edge-bar-bottom" />
      <div className="edge-bar edge-bar-left" />
      <div className="edge-bar edge-bar-right" />
    </>
  );
};

export default Headermain;
