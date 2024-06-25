import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const AdminNavbar = () => {
  return (
    <>
      <header
        className="float-start w-100"
        style={{ position: "sticky", zIndex: "1000" }}
      >
        <div className="top-new-heda d-none d-lg-inline-block w-100">
          <div className="container">
            <div className="row row-cols-2 align-items-center">
              <div className="col">
                <ul className="left-oiu">
                  <li>
                    <Link to="#">
                      <img alt="tn" src="images/run.jpeg" />
                    </Link>
                    <a href="#" className="ms-4">
                      <img alt="tn" src="images/acc-2.jpeg" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col d-grid justify-content-end">
                <ul className="top-socli d-flex align-items-center">
                  <li>Follow Us</li>
                  <li className="ms-3">
                    <a
                      href="https://www.facebook.com/bharatcorporateleague/"
                      className="btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      <i className="fab fa-facebook-f"></i>{" "}
                    </a>
                    <a
                      href="https://www.instagram.com/bharat_corporate_league/"
                      className="btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      <FontAwesomeIcon icon={faInstagram} />{" "}
                    </a>
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
                </ul>
              </div>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img id="logo" src="images/logo.png" alt="logo" />
            </Link>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/adminjobways"
                    style={{ color: "white" }}
                  >
                    Admin
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/schedule"
                    style={{ color: "white" }}
                  >
                    Matches
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/adminvideos"
                    style={{ color: "white" }}
                  >
                    Videos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/admingallery"
                    style={{ color: "white" }}
                  >
                    Gallery
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/teamform"
                    style={{ color: "white" }}
                  >
                    Teams
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/adminplayers"
                    style={{ color: "white" }}
                  >
                    Players
                  </Link>
                </li>
              </ul>
            </div>
            <div className="right-top">
              <ul className="d-flex align-items-center">
                <li>
                  <button
                    data-bs-toggle="modal"
                    data-bs-target="#loginModal"
                    className="btn login-btn-links"
                  >
                    <span className="m-0 oipn">
                      <img src="images/747376.png" alt="pnm" />
                    </span>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="btn bar-btn-links"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRightmobile"
                  >
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-grid-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z" />
                      </svg>
                    </span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default AdminNavbar;
