import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Player from "../Player/Player";
import axios from "axios";
import Navbar from "../Navbar/navbar";
import Commoncode from "../Others/commoncode";
import Footer from "../Footer/footer";
import CricketLoader from "../Others/spinner";
import AdminNavbar from "../Navbar/adminNavbar";
import AdminPlayers from "./Players";


const AdminList = () => {
  const [teams, setTeams] = useState([]);
   
  const navigate = useNavigate();

  useEffect(() => {
    getTeams();
  }, []);

  let url = process.env.REACT_APP_HOST;

  const getTeams = async () => {
    try {
      const response = await axios.get(`${url}team/getAll`);
      //console.log(response.data);
      setTeams(response.data);
      // if (response.data.length > 0) {
      //   setTeamsAdded(!teamsAdded);
      // }
    } catch (error) {
      // console.error("Error fetching videos:", error);
    }
  };

  return (
    <>
      <CricketLoader />
      <AdminNavbar />
      <div className="tea">
        <div className="team-container">
          {teams.map((team) => (
            <div className="car" key={team.teamName}>
              <div className="team-card">
                <img src={team.image} alt={team.teamName} />
                <h2>{team.teamName}</h2>
              </div>
              <AdminPlayers team={team.teamName} />
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

export default AdminList;
