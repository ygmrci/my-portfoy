import React, { useEffect } from "react";
import { FaRegMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";
import { useTheme } from "../ThemeContext"; // ThemeContext kullanımı
import { Link } from "react-router-dom";

function Navbar() {
  const { isDarkMode, toggleTheme } = useTheme(); // Tema durumu ve geçiş fonksiyonu
  const [activePage, setActivePage] = React.useState("Home");

  // Sayfa geçişleri için activePage belirleme
  const setActive = (page) => {
    setActivePage(page);
  };

  // Dark mode body class'ını güncelleme
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div>
      <nav className={`navbar ${isDarkMode ? "dark" : ""}`}>
        <Link to="/" className="logo" onClick={() => setActive("Home")}>
          Yağmur Gamze Çimen
        </Link>
        <div className="links">
          <Link
            to="/"
            className={activePage === "Home" ? "active" : ""}
            onClick={() => setActive("Home")}
          >
            Home
          </Link>
          <Link
            to="/projects"
            className={activePage === "Projects" ? "active" : ""}
            onClick={() => setActive("Projects")}
          >
            Projects
          </Link>
          <button onClick={toggleTheme} className="icon">
            {isDarkMode ? <MdOutlineWbSunny /> : <FaRegMoon />}
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
