import React from "react";
import "./Hero.css"; // Hero 컴포넌트 전용 스타일

function Hero() {
  return (
    <section className="hero-section">
      <h1 className="main-title">Lorem Ipsum Dolor Sit</h1>
      <p className="subtitle">
        Consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.
      </p>
      <div className="button-group">
        <button className="btn-primary">Lorem Ipsum</button>
        <button className="btn-secondary">Dolor Sit</button>
      </div>
      <div className="editor-showcase">
        {/* 실제 사이트에서는 이곳에 에디터 스크린샷이나 애니메이션이 들어갑니다. */}
        <img
          src="/path/to/placeholder-image.png"
          alt="Code Editor Showcase"
        />
      </div>
    </section>
  );
}

export default Hero;
