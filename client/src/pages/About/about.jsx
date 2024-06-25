import React from "react";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";
import { Link } from "react-router-dom";
import Commoncode from "../Others/commoncode";
import "./about.css";
import CricketLoader from "../Others/spinner";

const About = () => {
  return (
    <>
      <CricketLoader />
      <Navbar />
      <section className="banner-part sub-main-banner float-start w-100">
        <div className="baner-imghi">
          <img src="images/sub-banner01.jpg" alt="sub-banner" />
        </div>
        <div className="sub-banner">
          <div className="container">
            <h1 className="text-center"> About Club</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item">
                  <Link to="/">HOME</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  About Club
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      <section className="float-start w-100 body-part pt-0">
        <div className="about-page-main comon-sub-page-main d-inline-block w-100">
          <div className="about-club-top">
            <div className="container">
              <div className="row row-cols-1 row-cols-lg-2 g-lg-5">
                <div className="col position-relative">
                  <figure className="big-img">
                    <img src="images/cric-2.avif" alt="pic" />
                  </figure>
                  <figure className="small-img">
                    <img src="images/logo.png" id="smallimg" alt="pic2" />
                  </figure>
                </div>
                <div className="col">
                  <h5 className="samll-sub mb-1 mt-0"> Our Story </h5>
                  <h2 className="comon-heading m-0">
                    {" "}
                    About Bharat Corporate League
                  </h2>
                  <p className="mt-3">
                    {" "}
                    Welcome to the Bharat Corporate League, where the spirit of
                    corporate excellence meets the passion for cricket! Our
                    journey began with a deep understanding of the challenges
                    faced by professionals in today's fast-paced corporate
                    world. We realized that amidst meetings, deadlines, and
                    targets, the human touch was often overlooked. People
                    yearned for a sense of belonging, a break from the monotony,
                    and an opportunity to rediscover their passion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="our-history-div d-inline-block w-100 mt-5">
          <div className="container">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home"
                  type="button"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  {" "}
                  <i className="fas fa-calendar-alt"></i> Our History{" "}
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  {" "}
                  <i className="fas fa-flag-checkered"></i> Our Mission{" "}
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#contact"
                  type="button"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                >
                  {" "}
                  <i className="far fa-eye"></i> Our Vision{" "}
                </button>
              </li>
            </ul>
          </div>
          <div className="tab-content mna-bg" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home"
              role="tabpanel"
            >
              <div className="container">
                
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="yd-hom1"
                    role="tabpanel"
                  >
                    <div
                      className="comon-fild-ads1 d-md-flex align-items-lg-center"
                      id="jw-history"
                    >
                      <figure>
                        <img
                          src="images/cric-1.avif"
                          alt="bg"
                          className="jw-img"
                        />
                      </figure>

                      <div className="left-history mt-3 mt-md-0">
                        <p className="jw-para">
                          {" "}
                          Established as a testament to the fusion of cricketing
                          passion and corporate dynamism, the Bharat Corporate
                          League has a rich legacy steeped in fostering
                          sportsmanship and camaraderie. Since its inception,
                          this tournament has been a catalyst for uniting
                          professionals across industries, providing a platform
                          where corporate teams showcase their cricketing
                          prowess while embracing the values of teamwork and
                          fair play.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="profile" role="tabpanel">
              <div className="container">
                <div
                  className="comon-fild-ads1 d-md-flex align-items-center"
                  id="jw-histor"
                >
                  <figure>
                    <img src="images/cric-3.avif" alt="bg" className="jw-img" />
                  </figure>

                  <div className="left-history mt-3 mt-md-0">
                    <p className="jw-para">
                      {" "}
                      Our mission is simple yet powerful: to create an
                      environment that encourages professionals to step out of
                      the boardroom and onto the cricket pitch. We understand
                      the importance of taking a break from the daily grind to
                      recharge your body and mind. Cricket not only promotes
                      physical fitness but also enhances mental agility and
                      teamwork.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="contact" role="tabpanel">
              <div className="container">
                <div
                  className="comon-fild-ads1 d-md-flex align-items-center"
                  id="jw-histo"
                >
                  <figure>
                    <img src="images/cric-4.avif" alt="bg" className="jw-img" />
                  </figure>

                  <div className="left-history mt-3 mt-md-0">
                    <p className="jw-para">
                      {" "}
                      At Bharat Corporate League, we believe in fostering a
                      dynamic and healthy corporate culture. Our vision is to
                      provide a platform where businesses from across the nation
                      can unite, strengthen their bonds, and grow together. We
                      are dedicated to promoting teamwork, physical well-being,
                      and work-life balance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-us">
          <h2 className="h22">
            Discover the Essence of Bharat Corporate League
          </h2>
          <div className="reasons">
            <div className="reason">
              <h3>Corporate Unity</h3>
              <p>
                We aim to strengthen the camaraderie among professionals from
                diverse industries. Through cricket, we foster collaboration,
                networking, and a sense of community that transcends the
                workplace.
              </p>
            </div>
            <div className="reason">
              <h3>Health and Fitness</h3>
              <p>
                We recognize the significance of a healthy body and mind.
                Playing cricket not only offers a fun way to stay active but
                also reduces stress and boosts overall well-being.
              </p>
            </div>
            <div className="reason">
              <h3>Team Building</h3>
              <p>
                Cricket is an excellent platform for building and refining
                teamwork, leadership, and decision-making skills. It's more than
                just a sport; it's a classroom for personal and professional
                growth.
              </p>
            </div>
            <div className="reason">
              <h3>Embracing Dreams</h3>
              <p>
                Within each player lies a dream, a passion, and a drive to
                succeed. We're here to nurture those dreams, to provide a
                platform where you can unleash your potential, both as a
                professional and as an individual.
              </p>
            </div>
            <div className="reason">
              <h3>Celebrating Diversity</h3>
              <p>
                At Bharat Corporate League, we celebrate diversity as a
                cornerstone of our league. We welcome professionals from various
                cultural backgrounds, ages, and expertise. It's this diverse mix
                that adds color and vibrancy to our league, fostering an
                environment where everyone feels valued and respected.
              </p>
            </div>
            <div className="reason">
              <h3>Professional Networking</h3>
              <p>
                Beyond the thrilling matches, the league serves as a hub for
                professional networking. It's not just about the game; it's
                about forging valuable connections that can extend beyond the
                cricket field. Collaborations, partnerships, and friendships
                blossom in this unique setting.
              </p>
            </div>
          </div>
        </div>

        <div className="join-us">
          <section className="join-section">
            <h2 className="h2"> Join the League</h2>
            <p className="p">
              Whether you are a seasoned cricketer or a complete novice, the
              Bharat Corporate League welcomes you. Our tournaments cater to
              players of all skill levels. So, gather your colleagues, put on
              your jerseys, and prepare to make new friends, strengthen existing
              bonds, and take your teamwork to a whole new level.
            </p>
          </section>
          <section className="contact-section">
            <h2 className="h2">Get in Touch</h2>
            <p className="p">
              For any inquiries, collaboration opportunities, or to register
              your team, reach out to us here. We're not just here to do
              business; we're here to create memories, foster friendships, and
              celebrate victories, both big and small.
            </p>
          </section>
        </div>
        {/* <div className="our-mangent-sft d-inline-block w-100 ">
          <div className="container">
            <h2 className="main-hed01"> Our Management Staff</h2>

            <div className="mangemnet-sf owl-carousel owl-theme mt-4">
              <div className="items-man">
                <figure>
                  <img src="images/manages-st.jpg" alt="pmg" />
                </figure>
                <div className="name">
                  <h5>
                    {" "}
                    Jores Leperto
                    <span className="d-block"> President </span>
                  </h5>
                </div>
              </div>

              <div className="items-man">
                <figure>
                  <img src="images/manages-st2.jpg" alt="pmg" />
                </figure>
                <div className="name">
                  <h5>
                    {" "}
                    Jores Leperto
                    <span className="d-block">
                      {" "}
                      Vice President (House & Admin)
                    </span>
                  </h5>
                </div>
              </div>

              <div className="items-man">
                <figure>
                  <img src="images/manages-st3.jpg" alt="pmg" />
                </figure>
                <div className="name">
                  <h5>
                    {" "}
                    Jores Leperto
                    <span className="d-block">
                      {" "}
                      Hony. Treasurer & Sponsorship
                    </span>
                  </h5>
                </div>
              </div>

              <div className="items-man">
                <figure>
                  <img src="images/manages-st4.jpg" alt="pmg" />
                </figure>
                <div className="name">
                  <h5>
                    {" "}
                    Jores Leperto
                    <span className="d-block"> Member - Entertainment</span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="achivement-div py-5">
          <div className="container">
            <h2 className="main-hed01"> achievement</h2>

            <div className="achivent-slide owl-carousel owl-theme mt-4 ">
              <div className="items-achiv">
                <figure>
                  <img src="images/award-img1.png" alt="ad1" />
                </figure>
                <div className="achiv-titel">
                  <h5> 2010 world FC cup champion </h5>
                </div>
              </div>

              <div className="items-achiv">
                <figure>
                  <img src="images/award-img3.png" alt="ad1" />
                </figure>
                <div className="achiv-titel">
                  <h5> 2012 United CD cup champion </h5>
                </div>
              </div>

              <div className="items-achiv">
                <figure>
                  <img src="images/award-img4.png" alt="ad1" />
                </figure>
                <div className="achiv-titel">
                  <h5> 2014 world cup champion </h5>
                </div>
              </div>

              <div className="items-achiv">
                <figure>
                  <img src="images/award-img1.png" alt="ad1" />
                </figure>
                <div className="achiv-titel">
                  <h5> 2015 FC cup champion </h5>
                </div>
              </div>

              <div className="items-achiv">
                <figure>
                  <img src="images/award-img4.png" alt="ad1" />
                </figure>
                <div className="achiv-titel">
                  <h5> 2014 world cup champion </h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sponcer-logo d-inline-block w-100">
          <div className="container">
            <div className="d-flex align-items-center justify-content-between">
              <h2 className="main-hed01"> Our Sponsors</h2>
            </div>

            <div className="sponj-slide owl-carousel owl-theme mt-0">
              <div className="corm-iteml">
                <figure className="m-auto">
                  <img src="images/brand_food2.jpg" alt="jok" />
                </figure>
              </div>
              <div className="corm-iteml">
                <figure className="m-auto">
                  <img src="images/logo-3-1.png" alt="jok" />
                </figure>
              </div>
            </div>
          </div>
        </div> */}
      </section>

      <Footer />
      <Commoncode />
    </>
  );
};

export default About;
