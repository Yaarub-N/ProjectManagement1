import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../ThemeProvider";

const Header = () => {
  const { darkMode, setDarkMode } = useTheme();
  const [menuActive, setMenuActive] = useState(false);
  const [settingsMenuActive, setSettingsMenuActive] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const closeMenu = () => {
    setMenuActive(false);
    setSettingsMenuActive(false);
  };

  const toggleSettingsMenu = () => {
    setSettingsMenuActive(!settingsMenuActive);
  };

  useEffect(() => {
    closeMenu();
  }, [location]);

  return (
    <header className={`header ${darkMode ? "dark-mode" : "light-mode"}`}>
      <nav>
        <div className="nav-box">
          <div className="menu-toggle" onClick={toggleMenu}>
            ☰
          </div>

          <h3 className="logo">
            <Link to="/">Mattin-Lassei Group AB</Link>
          </h3>

          <ul className={`ulMenu ${menuActive ? "active" : ""}`}>
            <li>
              <Link to="/" onClick={closeMenu}>
                Start Sida
              </Link>
            </li>
            <li>
              <Link to="/create-project" onClick={closeMenu}>
                Skapa Projekt
              </Link>
            </li>
            <li>
              <Link to="/project-list" onClick={closeMenu}>
                Projektlista
              </Link>
            </li>
            <li>
              <Link to="/" onClick={closeMenu}>
                Om oss
              </Link>
            </li>
            <li
              className={`settings-menu ${settingsMenuActive ? "active" : ""}`}
            >
              <span onClick={toggleSettingsMenu}>Inställningar</span>
              <ul className="submenu">
                <li>
                  <Link to="/create-customer" onClick={closeMenu}>
                    Skapa En Ny Kund
                  </Link>
                </li>
                <li>
                  <Link to="/create-employee" onClick={closeMenu}>
                    Skapa En Ny Anställd
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "🌞" : "🌙"}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
