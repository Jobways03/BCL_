import React, { useState } from "react";
import Mobilepopup from "../Others/mobilePopup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Commoncode = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
    number: "",
  });

  const url = process.env.REACT_APP_HOST;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${url}comment/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // alert("Message sent successfully");
        setFormData({
          ...formData,
          name: "",
          email: "",
          message: "",
          subject: "",
          number: "",
        });
      } else {
        // alert("Error sending message");
      }
    } catch (error) {
      // alert("An error occurred");
    }
  };
  return (
    <>
      <button
        type="button"
        className="btn btn-member"
        data-bs-toggle="modal"
        data-bs-target="#memberModal"
      >
        {" "}
        Join Us today here{" "}
      </button>

      <div className="modal fade login-div-modal" id="memberModal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="com-div-md">
                  <h5 className="text-center mb-3"> Join Us Today</h5>
                  <button
                    type="button"
                    className="close"
                    data-bs-dismiss="modal"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-x"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                  </button>
                  <div className="login-modal-pn">
                    <div className="cm-select-login mt-0">
                      <div className="country-dp">
                        <input
                          type="text"
                          name="from_name"
                          className="form-control"
                          placeholder="Full Name"
                          value={formData.name}
                          onChange={(e) => {
                            setFormData({ ...formData, name: e.target.value });
                          }}
                          required
                        />
                      </div>
                      <div className="phone-div">
                        <input
                          type="email"
                          name="form_mail"
                          className="form-control"
                          placeholder="Email"
                          value={formData.email}
                          onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value });
                          }}
                          required
                        />
                      </div>
                      <div className="phone-div">
                        <input
                          type="number"
                          name="form_number"
                          className="form-control"
                          placeholder="Phone number"
                          value={formData.number}
                          onChange={(e) => {
                            setFormData({
                              ...formData,
                              number: e.target.value,
                            });
                          }}
                          required
                        />
                      </div>
                      <div className="phone-div">
                        <input
                          type="text"
                          name="form_subject"
                          className="form-control"
                          placeholder="Subject"
                          value={formData.subject}
                          onChange={(e) => {
                            setFormData({
                              ...formData,
                              subject: e.target.value,
                            });
                          }}
                          required
                        />
                      </div>
                      <div className="phone-div">
                        <input
                          type="text"
                          name="form_message"
                          className="form-control"
                          placeholder="message"
                          value={formData.message}
                          onChange={(e) => {
                            setFormData({
                              ...formData,
                              message: e.target.value,
                            });
                          }}
                          required
                        />
                      </div>

                      {/* <div className="forget2 mt-3 ml-3 d-flex justify-content-between">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="exampleCheck1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="exampleCheck1"
                        >
                          {" "}
                          By clicking Register, you agree to our Terms of Use
                          and Cookie Policy
                        </label>
                      </div> */}
                    </div>

                    <button
                      type="submit"
                      name="submit"
                      className="btn continue-bn"
                      data-bs-dismiss="modal"
                    >
                      {" "}
                      Submit{" "}
                    </button>
                  </div>

                  {/* <p className="text-center  mt-3">
                    {" "}
                    Do not have an account?
                    <a
                      data-bs-toggle="modal"
                      className="regster-bn"
                      data-bs-target="#loginModal"
                      data-bs-dismiss="modal"
                    >
                      {" "}
                      Login{" "}
                    </a>{" "}
                  </p> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="offcanvas offcanvas-end" id="offcanvasRightmobile">
        <div className="offcanvas-header py-0">
          <button
            type="button"
            className="close-menu mt-4"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-x-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
            </svg>
          </button>
        </div>
        <div className="offcanvas-body">
          <div className="head-contact d-none d-lg-block">
            <a href="index.html" className="logo-side">
              <img src="images/logo.png" alt="logo" />
            </a>
            <p className="mt-4">
              {" "}
              Welcome to the Bharat Corporate League, where the spirit of
              corporate excellence meets the passion for cricket! Our journey
              began with a deep understanding of the challenges faced by
              professionals in today's fast-paced corporate world.
            </p>
            <div className="quick-link my-4">
              <ul>
                <li>
                  {" "}
                  <i className="fas fa-map-marker-alt"></i>{" "}
                  <span> Habsiguda , Hyderabad </span>{" "}
                </li>
                <li>
                  {" "}
                  <i className="fab fa-whatsapp"></i> <span> 9652597929 </span>{" "}
                </li>
                <li>
                  {" "}
                  <i className="fas fa-envelope"></i>{" "}
                  <span> contactus@bharatcorporateleague.com </span>{" "}
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

          <Mobilepopup />
        </div>
      </div>

      {/* <div className="modal fade login-div-modal" id="lostpsModal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <form action="index.html" method="get">
                <div className="com-div-md">
                  <h5 className="text-center mb-3"> Forget Your Password? </h5>
                  <button
                    type="button"
                    className="close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                  <div className="login-modal-pn">
                    <p> We'll email you a link to reset your password</p>
                    <div className="cm-select-login mt-3">
                      <div className="phone-div">
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="Enter Your Email"
                          required
                        />
                      </div>
                    </div>

                    <button type="submit" className="btn continue-bn">
                      {" "}
                      Send Me a password reset Link{" "}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div> */}

      <div className="modal fade login-div-modal" id="loginModal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div id="login-td-div" className="com-div-md">
                  <h5 className="text-center mb-3"> Join us Today </h5>
                  <button
                    type="button"
                    className="close"
                    data-bs-dismiss="modal"
                  >
                    <span>×</span>
                  </button>
                  <div className="login-modal-pn">
                    <div className="cm-select-login mt-3">
                      <div className="country-dp">
                        <input
                          type="text"
                          name="from_name"
                          className="form-control"
                          placeholder="Full Name"
                          value={formData.name}
                          onChange={(e) => {
                            setFormData({ ...formData, name: e.target.value });
                          }}
                          required
                        />
                      </div>
                      <div className="phone-div">
                        <input
                          type="email"
                          name="form_mail"
                          className="form-control"
                          placeholder="Email"
                          value={formData.email}
                          onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value });
                          }}
                          required
                        />
                      </div>
                      <div className="phone-div">
                        <input
                          type="number"
                          name="form_number"
                          className="form-control"
                          placeholder="Phone number"
                          value={formData.number}
                          onChange={(e) => {
                            setFormData({
                              ...formData,
                              number: e.target.value,
                            });
                          }}
                          required
                        />
                      </div>
                      <div className="phone-div">
                        <input
                          type="text"
                          name="form_subject"
                          className="form-control"
                          placeholder="Subject"
                          value={formData.subject}
                          onChange={(e) => {
                            setFormData({
                              ...formData,
                              subject: e.target.value,
                            });
                          }}
                          required
                        />
                      </div>
                      <div className="phone-div">
                        <input
                          type="text"
                          name="form_message"
                          className="form-control"
                          placeholder="message"
                          value={formData.message}
                          onChange={(e) => {
                            setFormData({
                              ...formData,
                              message: e.target.value,
                            });
                          }}
                          required
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      name="submit"
                      className="btn continue-bn"
                      data-bs-dismiss="modal"
                    >
                      {" "}
                      Submit{" "}
                    </button>
                  </div>

                  {/* <p className="text-center  mt-3">
                    <a
                      data-bs-toggle="modal"
                      className="regster-bn"
                      data-bs-target="#lostpsModal"
                      data-bs-dismiss="modal"
                    >
                      {" "}
                      Lost Password ?{" "}
                    </a>{" "}
                  </p>

                  <p className="text-center  mt-3">
                    {" "}
                    Do not have an account?
                    <a
                      data-bs-toggle="modal"
                      className="regster-bn"
                      data-bs-target="#memberModal"
                      data-bs-dismiss="modal"
                    >
                      {" "}
                      Register{" "}
                    </a>{" "}
                  </p> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Commoncode;
