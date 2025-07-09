import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturedOn from "./components/FeaturedOn";
import Features from "./components/Features";
import Performance from "./components/Performance";
import Extensibility from "./components/Extensibility";
import Community from "./components/Community";
import Footer from "./components/Footer";
import "./App.css"; // 전역 스타일

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="app">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <FeaturedOn />
        <Features />
        <Performance />
        <Extensibility />
        <Community />
      </main>
      <Footer />
    </div>
  );
}

export default App;
