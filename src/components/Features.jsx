import React from "react";
import {
  FaBolt,
  FaCodeBranch,
  FaPuzzlePiece,
  FaTerminal,
  FaSearch,
  FaPlay,
} from "react-icons/fa";
import "./Features.css"; // Features 전용 스타일

const featureData = [
  {
    icon: <FaBolt />,
    title: "Lorem Ipsum",
    text: "Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    icon: <FaCodeBranch />,
    title: "Adipiscing Elit",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
  },
  {
    icon: <FaPuzzlePiece />,
    title: "Tempor Incididunt",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
  },
  {
    icon: <FaTerminal />,
    title: "Ullamco Laboris",
    text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
  },
  {
    icon: <FaSearch />,
    title: "Reprehenderit",
    text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
  },
  {
    icon: <FaPlay />,
    title: "Voluptate Velit",
    text: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.",
  },
];

function Features() {
  return (
    <section className="features-section">
      <div className="section-header">
        <h2>Curabitur Pretium</h2>
        <p>
          Aenean vel elit scelerisque mauris. Imperdiet nulla
          malesuada pellentesque elit eget gravida cum sociis.
        </p>
      </div>
      <div className="features-grid">
        {featureData.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
