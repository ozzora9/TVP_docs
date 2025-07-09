import React from "react";
import { FaPuzzlePiece } from "react-icons/fa";
import "./Extensibility.css"; // 확장성 전용 스타일

function Extensibility() {
  return (
    <section className="extensibility-section">
      <div className="visual-placeholder">
        {/* 실제 사이트에서는 이곳에 복잡한 그래픽이 들어갑니다. */}
        <FaPuzzlePiece size={100} className="placeholder-icon" />
      </div>
      <div className="extensibility-content">
        <h2>Vestibulum Ante</h2>
        <p>
          Faucibus pulvinar elementum integer enim. Id aliquet lectus
          proin nibh nisl. Amet justo donec enim diam vulputate ut
          pharetra sit.
        </p>
        <button className="btn-secondary">Aliquam Tincidunt</button>
      </div>
    </section>
  );
}

export default Extensibility;
