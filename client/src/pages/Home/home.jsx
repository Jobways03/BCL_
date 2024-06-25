import React from "react";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";
import Commoncode from "../Others/commoncode";
import "./home.css";
import CricketLoader from "../Others/spinner";
import Cricketposter from "../Others/cricketposter";
import TeamCaptains from "./captains";

const Home = () => {
  return (
    <>
      <CricketLoader />
      <Navbar />
      <section className="float-start w-100 banner-part">
        <div className="slider-banner">
          <div
            id="carouselExampleFade"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item add-fiu active">
                <div className="inner-banne">
                  <img src="./images/logo.png" alt="" id="logo-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Cricketposter />
     
      <div className="welcome-section">
        <h1 className="heading">Welcome to Bharat Corporate League!</h1>
        <p className="sub-heading">
          Experience the Fusion of Business and Cricket
        </p>
      </div>
      <div className="home-page">
        <div className="unique-section">
          <h2 className="section-heading">BCL T20</h2>
          <p className="section-content">
            BCL T20, or the Local Cricket League Twenty20, is an exhilarating
            cricket tournament that mirrors the excitement and competitive
            spirit of the Cricket. This league is a vibrant platform for local
            talent, welcoming individuals who are eager to showcase their
            cricketing skills in a professional yet fun environment. Whether
            you're a seasoned player or an enthusiastic newcomer to the sport,
            BCL T20 offers the perfect stage to play, enjoy, and experience the
            thrill of T20 cricket right in your local place. Get ready to hit
            the ground running, make new friends, and revel in the sportive
            atmosphere of our very own cricket fest! Join us and be a part of
            this fantastic cricketing adventure.
          </p>
        </div>
        <div className="platform-section">
          <h2 className="section-heading">Why to Join BCL T20?</h2>
          <div className="section-content">
            <ul className="bcl-list">
              <li>Exposure and Experience</li>
              <li>Talent Showcase</li>
              <li>Professional Development</li>
              <li>Networking</li>
              <li>Teamwork and Leadership</li>
              <li>Fitness and Health</li>
              <li> Recognition and Achievement</li>
              <li>Community Involvement</li>
              <li>Fun and Enjoyment</li>
              <li>Competitive Spirit</li>
            </ul>
          </div>
        </div>
        <div className="play-section">
          <h2 className="section-heading">How to Join BCL T20?</h2>
          <div className="section-content">
            <ul className="bcl-steps">
              <li>Check Eligibility</li>
              <li>Select Team and Position</li>
              <li>Register Your Interest</li>
              <li>Submit Required Documents</li>
              <li>Sign Consent Form</li>
            </ul>
          </div>
        </div>
        <div className="join-section">
          <h2 className="section-heading">Join Us Today</h2>
          <p className="section-content">
            Dive into our cricket tournaments to connect with fellow enthusiasts
            and business professionals. We offer a unique blend of competitive
            cricket and networking opportunities, all aimed at enhancing
            teamwork, leadership, and strategic insights. Our events feature
            top-notch facilities and are designed for both serious competition
            and meaningful connections. Whether aiming to elevate your game or
            expand your professional network, our league provides the perfect
            backdrop. Join us for an experience that celebrates cricket, fosters
            growth, and builds lasting relationships.
          </p>
        </div>
      </div>
      {/* <div className="bcl-container">
        <section className="bcl-intro">
          <h1 className="bcl-title">BCL T20</h1>
          <p className="bcl-description">
            BCL T20, or the Local Cricket League Twenty20, is an exhilarating
            cricket tournament that mirrors the excitement and competitive
            spirit of the Cricket. This league is a vibrant platform for local
            talent, welcoming individuals who are eager to showcase their
            cricketing skills in a professional yet fun environment. Whether
            you're a seasoned player or an enthusiastic newcomer to the sport,
            BCL T20 offers the perfect stage to play, enjoy, and experience the
            thrill of T20 cricket right in your local place. Get ready to hit
            the ground running, make new friends, and revel in the sportive
            atmosphere of our very own cricket fest! Join us and be a part of
            this fantastic cricketing adventure.
          </p>
        </section>

        <section className="bcl-why-join">
          <h2 className="bcl-heading">Why to Join BCL T20?</h2>
          <ul className="bcl-list">
            <li>Exposure and Experience</li>
            <li>Talent Showcase</li>
            <li>Professional Development</li>
            <li>Networking</li>
            <li>Teamwork and Leadership</li>
            <li>Fitness and Health</li>
            <li> Recognition and Achievement</li>
            <li>Community Involvement</li>
            <li>Fun and Enjoyment</li>
            <li>Competitive Spirit</li>
          </ul>
        </section>

        <section className="bcl-how-to-join">
          <h2 className="bcl-heading">How to Join BCL T20?</h2>
          <ul className="bcl-steps">
            <li>Check Eligibility</li>
            <li>Select Team and Position</li>
            <li>Register Your Interest</li>
            <li>Submit Required Documents</li>
            <li>Sign Consent Form</li>
          </ul>
        </section>

        <section className="bcl-join-us">
          <h2 className="bcl-heading">JOIN US TODAY</h2>
          <p className="bcl-call-to-action">
            Register your team, explore our upcoming tournaments, and be part of
            a league that values passion, sportsmanship, and the spirit of
            unity. Experience the fusion of business excellence and the
            excitement of cricket with us!
          </p>
        </section>
      </div> */}

      <Commoncode />
      <Footer />
    </>
  );
};

export default Home;
