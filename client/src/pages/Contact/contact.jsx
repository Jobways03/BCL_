import React, { useState } from "react";
import "./contact.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CricketLoader from "../Others/spinner";
import toast from "react-hot-toast";
// import Header from "../Header/header";
// import Footer from "../Footer/footer";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    profile: "https://via.placeholder.com/150",
    team: JSON.parse(localStorage.getItem("team")) || "",
    id: JSON.parse(localStorage.getItem("id")) || "",
    role: localStorage.getItem("role") || "",
    position: JSON.parse(localStorage.getItem("position")) || "",
    img: JSON.parse(localStorage.getItem("img")) || "",
  });
  const [formDat, setFormDat] = useState({
    giveAadhar: false,
    signConsent: false,
    payEntranceFee: false,
    personalkit: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const naviagte = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleChang = (e) => {
    const { name, checked } = e.target;
    setFormDat((prevState) => ({ ...prevState, [name]: checked }));
  };

  const handleimage = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setFormData({ ...formData, profile: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (
      !formDat.giveAadhar ||
      !formDat.signConsent ||
      !formDat.payEntranceFee ||
      !formDat.personalkit
    ) {
      toast.error("Please do Accept All the Conditions Specified");
      return;
    }
    toast.loading("...loading");
    let url = process.env.REACT_APP_HOST;
    try {
      let response = await axios.post(url + `player/createPlayer`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      // console.log(response.data);
      naviagte("/list");
      toast.dismiss();
      toast.success("Successfully Enrolled to the League");
      localStorage.clear();
    } catch (error) {
      //console.log(error.message);
      toast.error("Something went wrong ! Please try after sometime");
      // alert("An error occurred");
    }
  };
  const getShakeClass = (fieldName) =>
    submitted && !formDat[fieldName] ? "shake" : "";
  return (
    <>
      <CricketLoader />
      <div className="contact-page-container">
        <div className="contact-form-container">
          <h2>Play With US</h2>
          <form onSubmit={handleSubmit}>
            <input
              className="cinput"
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              className="cinput"
              type="tel"
              name="number"
              placeholder="Phone Number"
              value={formData.number}
              onChange={handleChange}
              required
            />
            <input
              className="cinput"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label>
              <div className="p">Profile Picture</div>
              <input
                type="file"
                className="teamlogo"
                name="profile"
                onChange={(e) => handleimage(e)}
              />
            </label>
           
            <label
              className={`checkbox-container ${getShakeClass("signConsent")}`}
            >
              Accept to Sign{" "}
              <a
                href="/termsandconditions"
                style={{ color: "blue" }}
                target="_blank"
              >
                Consent Form
              </a>
              <input
                type="checkbox"
                name="signConsent"
                checked={formDat.signConsent}
                onChange={handleChang}
                required
              />
              <span className="checkmark"></span>
            </label>

            <label
              className={`checkbox-container ${getShakeClass("giveAadhar")}`}
            >
              Accept to Submit Aadhar Copy
              <input
                type="checkbox"
                name="giveAadhar"
                checked={formDat.giveAadhar}
                onChange={handleChang}
                required
              />
              <span className="checkmark"></span>
            </label>

            <label
              className={`checkbox-container ${getShakeClass(
                "payEntranceFee"
              )}`}
            >
              Agree to Pay the Entire Entry Fee in Advance
              <input
                type="checkbox"
                name="payEntranceFee"
                checked={formDat.payEntranceFee}
                onChange={handleChang}
                required
              />
              <span className="checkmark"></span>
            </label>
            <label
              className={`checkbox-container ${getShakeClass(
                "payEntranceFee"
              )}`}
            >
              Personal Kit Mandatory
              <input
                type="checkbox"
                name="personalkit"
                checked={formDat.personalkit}
                onChange={handleChang}
                required
              />
              <span className="checkmark"></span>
            </label>

            <button type="submit" className="cbutton">
              Submit
            </button>
            {/* <span style={{ color: "red" }}>
              * Please Do Accept All the conditions Specified
            </span> */}
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;

// checkbox - accepting terms and conditions , Aadhar card , willing to pay tournament fee before start of tournament , Accepting the consent form
