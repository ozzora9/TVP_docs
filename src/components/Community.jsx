import React from "react";
import "./Community.css"; // Community 전용 스타일

function Community() {
  return (
    <section className="community-section">
      <div className="community-content">
        <h2>Fusce Ut Placera</h2>
        <p>
          Maecenas sed enim ut sem viverra aliquet. Etiam erat velit,
          scelerisque in dictum non, consectetur.
        </p>
        <div className="community-buttons">
          <button className="btn-primary">Nunc Viverra</button>
          <button className="btn-secondary">Neque Convallis</button>
        </div>
      </div>
    </section>
  );
}

export default Community;
