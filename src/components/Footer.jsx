import React from "react";
import { FaGithub, FaDiscord, FaTwitter } from "react-icons/fa";
import "./Footer.css"; // 푸터 전용 스타일

function Footer() {
  return (
    <footer className="footer full-width">
      <div className="footer-container">
        <div className="footer-links">
          {/* 각 링크 그룹을 div로 감쌉니다 */}
          <div>
            <h4>Product</h4>
            <a href="#">Features</a>
            <a href="#">Extensions</a>
            <a href="#">Download</a>
          </div>
          <div>
            <h4>Community</h4>
            <a href="#">GitHub</a>
            <a href="#">Discord</a>
            <a href="#">Twitter</a>
          </div>
          <div>
            <h4>Resources</h4>
            <a href="#">Documentation</a>
            <a href="#">Blog</a>
            <a href="#">Contact Us</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} CodeEdit. Lorem ipsum dolor
            sit amet.
          </p>
          <div className="social-icons">
            <a href="#" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="#" aria-label="Discord">
              <FaDiscord />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
