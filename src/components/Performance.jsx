import React from "react";
import "./Perfomance.css";

const performanceData = [
  { editor: "CodeEdit", value: 20, color: "#3b82f6" },
  { editor: "VS Code", value: 85, color: "#8b5cf6" },
  { editor: "Xcode", value: 60, color: "#ec4899" },
];

function Performance() {
  return (
    <section className="performance-section">
      <div className="performance-content">
        <h2>Vivamus Eget</h2>
        <p>
          Praesent elementum facilisis leo vel fringilla est. Congue
          mauris rhoncus aenean vel elit scelerisque. Tellus orci ac
          auctor augue mauris augue neque gravida.
        </p>
      </div>
      <div className="chart-container">
        <h4>Cras Semper Auctor</h4>
        <div className="chart">
          {performanceData.map((item) => (
            <div key={item.editor} className="chart-bar-group">
              <span className="chart-label">{item.editor}</span>
              <div className="bar-wrapper">
                <div
                  className="bar"
                  style={{
                    width: `${item.value}%`,
                    backgroundColor: item.color,
                  }}
                >
                  <span>{item.value}MB</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Performance;
