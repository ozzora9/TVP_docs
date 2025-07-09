import React from "react";
import "./FeaturedOn.css"; // FeaturedOn 전용 스타일

function FeaturedOn() {
  // 실제로는 로고 이미지 경로를 넣어야 합니다. 여기서는 플레이스홀더를 사용합니다.
  const logos = [""];

  return (
    <section className="featured-on-section">
      <p className="featured-on-title">LOREM IPSUM DOLOR</p>
      <div className="logos-container">
        {logos.map((logoSrc, index) => (
          <img
            key={index}
            src={logoSrc}
            alt={`Placeholder Logo ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default FeaturedOn;
