import React from "react";
import "./footer.css";
import {AiFillLinkedin, AiFillGithub, AiFillFolderOpen, } from "react-icons/ai";

const Footer = () => {
    return (
      <footer>
        <div className="footer-content">
          <p>
            &copy; 2024 Your Music Learning Platform. All rights reserved. <br /> Made
            with ❤️ <a href="">Music Learning</a>
          </p>
          <div className="social-links">
            <a href=" https://www.linkedin.com/" target="_blank">
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/" target="_blank">
              <AiFillGithub />
            </a>
            <a href="/" target="_blank">
              <AiFillFolderOpen />
            </a>
          </div>
        </div>
      </footer>
    );
};
  
  export default Footer;