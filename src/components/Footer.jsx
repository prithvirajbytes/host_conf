import React from "react";

const Footer = () => {
  return (
    <footer className="footer-section">
      {" "}
      <div className="footer-container">
        {" "}
        <p className="footer-text">
          © Website designed and maintained by{" "}
          <strong>
            <a
              href="https://www.linkedin.com/in/prithviraj-biswas/"
              target="_blank"
            >
              Prithviraj Biswas{" "}
            </a>
          </strong>
          ,{" "}
          <strong>
            <a
              href="https://www.linkedin.com/in/debjit-kushari-7ba543246/"
              target="_blank"
            >
               Debjit Kushari{" "}
            </a>
          </strong>
          and
          <strong>
            <a href="https://www.linkedin.com/in/sohamdas00" target="_blank">
              {" "}
              Soham Das
            </a>
          </strong>{" "}
          .{" "}
        </p>{" "}
      </div>{" "}
    </footer>
  );
};

export default Footer;
