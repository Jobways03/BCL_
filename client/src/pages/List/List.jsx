import React, { useEffect, useState } from "react";
import "./list.css"; // Import the CSS file for styling
import { useNavigate } from "react-router-dom";
import Player from "../Player/Player";
import axios from "axios";
import Navbar from "../Navbar/navbar";
import Commoncode from "../Others/commoncode";
import Footer from "../Footer/footer";
import CricketLoader from "../Others/spinner";
import toast from "react-hot-toast";

const List = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    getTeams();
  }, []);

  let url = process.env.REACT_APP_HOST;

  const getTeams = async () => {
    try {
      const response = await axios.get(`${url}team/getAll`);
      //console.log(response.data);
      setTeams(response.data);
    } catch (error) {
      // console.error("Error fetching videos:", error);
    }
  };

  return (
    <>
      <CricketLoader />
      <Navbar />
      <div className="tea">
        <div className="team-container">
          {teams.map((team) => (
            <div className="car" key={team.teamName}>
              <div className="team-card">
                <img src={team.image} alt={team.teamName} />
                <h2>{team.teamName}</h2>
              </div>
              <Player team={team.teamName} />
              <hr />
            </div>
          ))}
        </div>
      </div>

      <Footer />
      <Commoncode />
    </>
  );
};

export default List;

//9059445503
