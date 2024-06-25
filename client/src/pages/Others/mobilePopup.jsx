import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./popup.css";

const Mobilepopup = () => {
  return (
    <div className="head-contact d-block d-lg-none">
      <a href="index.html" className="logo-side">
        <img src="images/logo.png" alt="logo" />
      </a>

      <div className="mobile-menu-sec mt-3">
        <ul className="ul">
          <li className="active-m">
            <Link className="navlink" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="navlink" to="/about">
              About
            </Link>
          </li>

          <li>
            <Link className="navlink" to="/matches">
              Leagues
            </Link>
          </li>
          {/* <li>
            <Link className="navlink" to="/videos">
              Videos
            </Link>
          </li> */}
          <li>
            <Link className="navlink" to="/gallery">
              Gallery
            </Link>
          </li>
          <li>
            <Link className="navlink" to="/teams">
              Teams
            </Link>
          </li>
          <li>
            <Link className="navlink" to="/list">
              Enroll
            </Link>
          </li>
        </ul>
      </div>
      <div className="quick-link">
        <ul>
          <li>
            {" "}
            <i className="fab fa-whatsapp"></i> <span> 9059445503 </span>{" "}
          </li>
          <li>
            {" "}
            <i className="fas fa-envelope"></i>{" "}
            <span> contactus@bharatcorporateleague.com</span>{" "}
          </li>
        </ul>
      </div>
      <ul className="side-media">
        <li>
          {" "}
          <a
            href="https://www.facebook.com/bharatcorporateleague/"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <i className="fab fa-facebook-f"></i>{" "}
          </a>{" "}
        </li>
        <li>
          {" "}
          <a
            href="https://www.linkedin.com/company/bharat-corporate-league"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <FontAwesomeIcon icon={faLinkedin} />{" "}
          </a>
        </li>

        <li>
          {" "}
          <a
            href="https://www.instagram.com/bharat_corporate_league/"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <i className="fab fa-instagram"></i>{" "}
          </a>{" "}
        </li>
      </ul>
    </div>
  );
};

export default Mobilepopup;
