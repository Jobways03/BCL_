import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/navbar";
import "./match.css";
import Footer from "../Footer/footer";
import { Link } from "react-router-dom";
import Commoncode from "../Others/commoncode";
import axios from "axios";
import toast from "react-hot-toast";
import CricketLoader from "../Others/spinner";
import tba from "./tba.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const Matches = () => {
  const [schedule, setSchedule] = useState([]);
  const [Matches, setMatches] = useState([
    {
      matchName: "Semifinal - 1",
      date: "",
      time: "",
      image: tba,
      teamName1: "TBA",
      teamName2: "TBA",
      venue: "",
    },
    {
      matchName: "Semifinal - 2",
      date: "",
      time: "",
      image: tba,
      teamName1: "TBA",
      teamName2: "TBA",
      venue: "",
    },
    {
      matchName: "Final",
      date: "",
      time: "",
      image: tba,
      teamName1: "TBA",
      teamName2: "TBA",
      venue: "",
    },
  ]);

  useEffect(() => {
    getSchedule();
  }, []);

  const url = process.env.REACT_APP_HOST;

  const getSchedule = async () => {
    try {
      const response = await axios.get(`${url}schedule/getAll`);
      setSchedule(response.data);
    } catch (error) {
      //toast.error("something Went Wrong Please try after sometime");
    }
  };

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
            <h1 className="text-center">Matches</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item">
                  <Link to="/">HOME</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Matches
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      <div>.</div>
      <div>
        {/* <div className="head">
          <h1>UPCOMING</h1>
        </div> */}
        <div className="head-top">
          <h1 id="bcl">BHARAT CORPORATE LEAGUE - T20</h1>

          <h2>SEASON - 1</h2>
          {/* <button
            className="button-88"
            data-bs-target="#memberModal"
            data-bs-toggle="modal"
          >
            REGISTRATION
          </button> */}
        </div>
      </div>
      {/* {schedule &&
        schedule.map((sched) => (
          <div key={sched._id} className="card">
            <div className="top-part-section d-inline-block w-100">
              <div className="row align-items-center">
                <div className="col-lg-3">
                  <p className="text-white text-center text-lg-start">
                    {" "}
                    {sched.matchName}{" "}
                  </p>
                  <h4 className="text-white text-center text-lg-start">
                    {" "}
                    {sched.time}{" "}
                  </h4>
                  <p className="text-white text-center text-lg-start mt-4">
                    {" "}
                    {sched.venue}{" "}
                  </p>
                  <p className="text-white text-center text-lg-start mt-1">
                    {" "}
                    <span className="d-block"> {sched.date} </span>{" "}
                  </p>
                </div>
                <div className="col-lg-6 d-grid justify-content-center my-4 my-lg-0">
                  <div className="flexrt">
                    <div className="comoi-temas d-lg-flex align-items-center">
                      <div className="logui ">
                        <img alt="su" src={sched.team1.image} className="i" />
                      </div>
                      <h5 className="text-white"> {sched.team1.teamName}</h5>
                    </div>
                    <div className="comoi-temas mt-4 d-lg-flex align-items-center">
                      <div className="logui">
                        <img alt="su" src={sched.team2.image} className="i" />
                      </div>
                      <h5 className="text-white"> {sched.team2.teamName}</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 d-grid justify-content-lg-end">
                  <div className="imgou">
                    <img alt="sy" src="images/bg-stadium01.jpg" />
                  </div>
                  <button className="btn btn-live d-table text-center">
                    {" "}
                    SEASON-1{" "}
                  </button>
                 
                </div>
              </div>
            </div>
          </div>
        ))} */}
      {/* <div className="dd">
        {schedule &&
          schedule.map((match, index) => (
            <div className="match-card" key={index}>
              <div className="match-info">
                <div>
                  <h4 className="match-name">{match.matchName}</h4>
                </div>
                <div>
                  <h5 className="match-venue">Venue : {match.venue}</h5>
                  <h5 className="match-datetime">
                    {match.date} {match.time}
                  </h5>
                </div>
              </div>
              <div className="team-vs-team">
                <div className="team">
                  <img
                    src={match.team1.image}
                    alt={match.team1.image}
                    className="team-logo"
                  />
                  <h4 className="team-name">{match.team1.teamName}</h4>
                </div>
                <h1 className="vs">vs</h1>
                <div className="team">
                  <img
                    src={match.team2.image}
                    alt={match.team2.image}
                    className="team-logo"
                  />
                  <h4 className="team-name">{match.team2.teamName}</h4>
                </div>
              </div>
            </div>
          ))}

        {Matches.map((match, index) => (
          <div className="match-card" key={index}>
            <div className="match-info">
              <div>
                <h4 className="match-name">{match.matchName}</h4>
              </div>
              <div>
                <h5 className="match-datetime">
                  {match.date} {match.time}
                </h5>
                <h5 className="match-venue">{match.venue}</h5>
              </div>
            </div>
            <div className="team-vs-team">
              <div className="team">
                <img
                  src={match.image}
                  alt={match.image}
                  className="team-logo"
                />
                <h4 className="team-name">{match.teamName1}</h4>
              </div>
              <h1 className="vs">vs</h1>
              <div className="team">
                <img
                  src={match.image}
                  alt={match.image}
                  className="team-logo"
                />
                <h4 className="team-name">{match.teamName2}</h4>
              </div>
            </div>
          </div>
        ))}
      </div> */}
      <div className="design">
        <div className="inner-design">
          {schedule &&
            schedule.map((match, index) => (
              <>
                <div className="indesign" key={index}>
                  <div className="design1">
                    <div className="one">
                      {" "}
                      <p className="dnames">{match.matchName}</p>
                      <div className="lined"></div>
                      <div className="circle"></div>
                    </div>

                    <p className="ddays">{match.date}</p>
                    <p className="dtimes">
                      <FontAwesomeIcon icon={faClock} /> {match.time} IST
                    </p>
                  </div>
                  <div className="design2">
                    <p className="dven">{match.venue}</p>
                    <div className="dven2">
                      <div>
                        <img
                          src={match.team1.image}
                          alt={match.team1.image}
                          className="dlogo1"
                        />
                      </div>
                      <div>
                        <p className="dteam1">{match.team1.teamName} </p>
                        <p className="scores">{match.team1score}</p>
                      </div>

                      <img
                        src="./images/as.jpeg"
                        alt="wdw"
                        style={{ height: "50px" }}
                      />
                      <div>
                        <p className="dteam2">{match.team2.teamName}</p>
                        <p className="scores2">{match.team2score}</p>
                      </div>

                      <div>
                        <img
                          src={match.team2.image}
                          alt={match.team2.image}
                          className="dlogo2"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="design3">
                    <p className="result">{match.result}</p>
                  </div>
                </div>
                <hr
                  style={{
                    margin: "0px",
                    marginLeft: "40px",
                    marginRight: "40px",
                  }}
                />
                
              </>
            ))}
        </div>
      </div>
      <Footer />
      <Commoncode />
    </>
  );
};

export default Matches;
