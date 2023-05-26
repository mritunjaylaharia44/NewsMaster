import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="created-by">Developed By ❤️ Mritunjay Laharia</div>
      <div className="contact">
        <a
          rel="noopener noreferrer"
          href="https://www.instagram.com/_mrtnjy/"
          target="_blank"
        >
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a
          rel="noopener noreferrer"
          href="https://github.com/mritunjaylaharia44"
          target="_blank"
        > 
          <i class="fa-brands fa-github"></i>
        </a>
        <a
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/mritunjay-laharia-509513198/"
          target="_blank"
        >
          <i class="fa-brands fa-linkedin"></i>
        </a>
      </div>
    </>
  );
};

export default Footer;
