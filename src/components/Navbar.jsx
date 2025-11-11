import React, { useState } from "react";
import "../index.css";
import AICTE_logo from "../assets/AICTE_logo.jpeg";
import DTDCFAC_logo from "../assets/DTDCFAC 2025 logo.png";
import JIS_logo from "../assets/images.png";
import SurTech_logo from "../assets/SurTech_Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar sticky-top">
      <div className="nav-container">
        <div className="logo">
          <a href="https://www.aicte.gov.in/" target="_blank">
            <img src={AICTE_logo} alt="AICTE_Logo" className="logo-img" />
          </a>
          <img src={DTDCFAC_logo} alt="DTDCFAC_Logo" className="logo-img" />
          <a href="https://www.jisgroup.org/" target="_blank">
            <img src={JIS_logo} alt="JIS_Logo" className="logo-img" />
          </a>
          <a href="https://www.surtech.edu.in/" target="_blank">
            <img src={SurTech_logo} alt="SurTech_Logo" className="logo-img" />
          </a>
        </div>

        {/* Hamburger icon */}
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          <div className={isOpen ? "bar rotate1" : "bar"}></div>
          <div className={isOpen ? "bar fade" : "bar"}></div>
          <div className={isOpen ? "bar rotate2" : "bar"}></div>
        </div>

        {/* Nav Links */}
        <ul className={isOpen ? "nav-links open" : "nav-links"}>
          <li>
            <a href="#about" onClick={() => setIsOpen(false)}>
              About Us
            </a>
          </li>
          <li>
            <a href="#organizingbody" onClick={() => setIsOpen(false)}>
              Organizing Body
            </a>
          </li>
          <li>
            <a href="#papersubmission" onClick={() => setIsOpen(false)}>
              Paper Submission
            </a>
          </li>
          <li>
            <a href="#cmtacknowledgement" onClick={() => setIsOpen(false)}>
              CMT Acknowledgment
            </a>
          </li>
          <li>
            <a href="#registrationfeestable" onClick={() => setIsOpen(false)}>
              Paper Registration
            </a>
          </li>
          <li>
            <a href="#conferencetracks" onClick={() => setIsOpen(false)}>
              Conference Tracks
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
