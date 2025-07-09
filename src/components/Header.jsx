import React from "react";
import { FaCode, FaBars, FaSun, FaMoon } from "react-icons/fa"; // 로고, 햄버거 메뉴 아이콘
import "./Header.css"; // 헤더 전용 스타일
function Header({ theme, toggleTheme }) {
  return (
    <header className="header full-width">
      <div className="header-container">
        <div className="logo">
          <FaCode size={28} />
          <span>CodeEdit</span>
        </div>
        <nav className="nav-desktop">
          <a href="#features">Features</a>
          <a href="#extensions">Extensions</a>
          <a href="#community">Community</a>
          <a href="#">Documentation</a>
        </nav>
        <div className="header-actions">
          <button onClick={toggleTheme} className="theme-toggle-btn">
            {theme === "light" ? (
              <FaMoon size={20} />
            ) : (
              <FaSun size={20} />
            )}
          </button>
          <button className="btn-primary">Download</button>
          <button className="hamburger-menu">
            <FaBars size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
