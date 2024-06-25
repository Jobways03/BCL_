import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="foot">
      <footer className="float-start w-100">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 gy-4 gy-lg-0">
            <div className="col">
              <div className="comonft-sec d-inline-block w-100">
                <h5 className="text-white"> Cities </h5>
                <ul>
                  <li>
                    <p> Hyderabad </p>
                  </li>
                  <li>
                    <p> Bangalore </p>
                  </li>
                  <li>
                    <p> Chennai </p>
                  </li>
                  <li>
                    <p> Mumbai </p>
                  </li>
                  <li>
                    <p> Delhi </p>
                  </li>
                  <li>
                    <p> Kolkata </p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col">
              <div className="comonft-sec d-inline-block w-100">
                <h5 className="text-white"> Access </h5>
                <ul>
                  <li>
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
                  <li>
                    <Link className="navlink" to="/videos">
                      videos
                    </Link>
                  </li>
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
                </ul>
              </div>
            </div>

            <div className="col">
              <div className="comonft-sec d-inline-block w-100">
                <h5 className="text-white"> Guidelines </h5>
                <ul>
                  <li>
                    <a
                      href="https://www.g-spr.com/post/unpacking-the-rules-and-regulations-of-professional-clothing-and-equipment-in-cricket-guide-for-fan"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      Protection Guidelines
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.icc-cricket.com/about/cricket/rules-and-regulations/playing-conditions"
                      target="blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      Match Playing Conditions{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.cricketvictoria.com.au/wp-content/uploads/2021/09/Suspect-Bowling-Action-Guidelines-Community-Cricket-Final.pdf"
                      target="blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      Suspect Action Policy{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.icc-cricket.com/about/integrity/anti-discrimination/about-us"
                      target="blank"
                    >
                      {" "}
                      Governing Policy{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col d-grid justify-content-lg-end">
              <div className="comonft-sec d-inline-block w-100">
                <h5 className="text-white"> Contact </h5>
                <ul>
                  <li>
                    {/* <a href="#">
                      <FontAwesomeIcon icon="fa-solid fa-house" />{" "}
                    </a> */}
                  </li>
                  <li>
                    {" "}
                    <i className="fab fa-whatsapp"></i> <p>9059445503 </p>{" "}
                  </li>
                  <li>
                    <p className="emaill">
                      {" "}
                      <span>
                        <i className="fas fa-envelope"></i>
                      </span>{" "}
                      contactus@bharatcorporateleague.com
                    </p>
                  </li>
                  <li>
                    {" "}
                    <i className="fas fa-map-marker-alt"></i>{" "}
                    <p className="emaill"> Habsiguda , Hyderabad </p>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-div1 mt-4">
          <div className="container">
            <div className="row row-cols-1 row-cols-md-2 text-center text-md-start gy-4 gy-lg-0 justify-content-center justify-content-md-between">
              <div className="col">
                <p className="text-white">
                  {" "}
                  Copyright © 2023.All Rights Reserved{" "}
                </p>
              </div>
              <div className="col d-grid justify-content-lg-end">
                <ul>
                  <li>
                    <a
                      href="https://www.icc-cricket.com/about/the-icc/legal-notices/privacy-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      Privacy Policy{" "}
                    </a>
                    <a
                      href="https://iccwbo.org/news-publications/arbitration-adr-rules-and-tools/model-icc-terms-reference/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      Term Of Service{" "}
                    </a>
                    <a
                      href="https://www.iccrf.org/disclaimers.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Disclaimer{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
