import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/navbar";
import axios from "axios";
import Footer from "../Footer/footer";
import "./teamform.css";
import Commoncode from "../Others/commoncode";
import CricketLoader from "../Others/spinner";

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const [teamsAdded, setTeamsAdded] = useState(false);

  useEffect(() => {
    getTeams();
  }, []);

  let url = process.env.REACT_APP_HOST;

  const getTeams = async () => {
    try {
      const response = await axios.get(`${url}team/getAll`);
      setTeams(response.data);
      if (response.data.length > 0) {
        setTeamsAdded(!teamsAdded);
      }
    } catch (error) {
      // console.error("Error fetching videos:", error);
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
            <h1 className="text-center">Videos</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item">
                  <Link to="/">HOME</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  teams
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      <div id="teamshow">
        <div className="one">
          <h1 className="teans">Teams</h1>
        </div>
        {!teams && (
          <div className="update-message">
            <h2>Teams will be updated soon</h2>
          </div>
        )}
        {teams &&
          teams.map((team, index) => {
            return (
              <div className="teamcardshow" key={index}>
                <img src={team.image} className="teamimg" alt="loading..." />
                <h2 className="teamname">{team.teamName}</h2>
              </div>
            );
          })}
      </div>
      <Footer />
      <Commoncode />
    </>
  );
};

export default Teams;
