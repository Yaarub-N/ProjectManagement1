import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../ThemeProvider";

const Header = () => {
  const { darkMode, setDarkMode } = useTheme();
  const [menuActive, setMenuActive] = useState(false);
  const [settingsMenuActive, setSettingsMenuActive] = useState(false); // State för inställningsmenyn
  const location = useLocation();

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const closeMenu = () => {
    setMenuActive(false);
    setSettingsMenuActive(false); // Stäng inställningsmenyn när huvudmenyn stängs
  };

  const toggleSettingsMenu = () => {
    setSettingsMenuActive(!settingsMenuActive); // Växla inställningsmenyn
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
              <Link to="/create" onClick={closeMenu}>
                Skapa Projekt
              </Link>
            </li>
            <li>
              <Link to="/projectList" onClick={closeMenu}>
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
              <a onClick={toggleSettingsMenu}>Inställningar</a>
              <ul className="submenu">
                <li>
                  <Link to="/CreateCustomer" onClick={closeMenu}>
                    Skapa Kund
                  </Link>
                </li>
                <li>
                  <Link to="/CreateEmployee" onClick={closeMenu}>
                    Skapa Anställd
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
