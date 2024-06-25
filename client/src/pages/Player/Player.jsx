import React, { useEffect, useState } from "react";
import "./Player.css"; // Import the CSS module
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";

const Player = (team) => {
  const [players, setplayers] = useState([
    {
      id: 1,
      name: "Player - 1",
      role: "Batsman",
      position: "Opener - 1",
      img: "./images/open.webp",
    },
    {
      id: 2,
      name: "Player - 2",
      role: "Batsman",
      position: "Opener - 2",
      img: "./images/open.webp",
    },
    {
      id: 3,
      name: "Player - 3",
      role: "Batsman",
      position: "Batsman-1",
      img: "./images/bat.jpeg",
    },
    {
      id: 4,
      name: "Player - 4",
      role: "Batsman",
      position: "Batsman - 2",
      img: "./images/bat.jpeg",
    },
    {
      id: 5,
      name: "Player - 5",
      role: "Batsman",
      position: "Batsman - 3",
      img: "./images/bat.jpeg",
    },
    {
      id: 6,
      name: "Player - 6",
      role: "Batsman",
      position: "Batsman - 4",
      img: "./images/bat.jpeg",
    },
    {
      id: 7,
      name: "Player - 7",
      role: "All Rounder - 1",
      position: "Batting & Bowling",
      img: "./images/batball.jpeg",
    },
    {
      id: 8,
      name: "Player - 8",
      role: "All Rounder - 2",
      position: "Batting & Bowling",
      img: "./images/batball.jpeg",
    },
    {
      id: 9,
      name: "Player - 9",
      role: "Bowler",
      position: "Bowler - 1",
      img: "./images/bal.webp",
    },
    {
      id: 10,
      name: "Player - 10",
      role: "Bowler",
      position: "Bowler - 2",
      img: "./images/bal.webp",
    },
    {
      id: 11,
      name: "Player - 11",
      role: "Bowler",
      position: "Bowler - 3",
      img: "./images/bal.webp",
    },
    {
      id: 12,
      name: "Player - 12",
      role: "Bowler",
      position: "Bowler - 4",
      img: "./images/bal.webp",
    },
    {
      id: 13,
      name: "Player - 13",
      role: "substitute player",
      position: "Batting & Bowling",
      img: "./images/batball.jpeg",
    },
    {
      id: 14,
      name: "Player - 14",
      role: "substitute player",
      position: "Batting & Bowling",
      img: "./images/batball.jpeg",
    },
  ]);
  const [teamplayers, setteamPlayers] = useState([]);
  const [view, setview] = useState("playerCard");
  const [icon, seticon] = useState(faChevronDown);
  const naviagte = useNavigate();
  const handleclick = (player) => {
    localStorage.setItem("id", JSON.stringify(player.id));
    localStorage.setItem("name", JSON.stringify(player.name));
    localStorage.setItem("role", player.role);
    localStorage.setItem("position", JSON.stringify(player.position));
    localStorage.setItem("img", JSON.stringify(player.img));
    localStorage.setItem("team", JSON.stringify(team.team));
    naviagte("/form");
  };

  const getplayers = async () => {
    let url = process.env.REACT_APP_HOST;
    let playerteam = team.team;
    //console.log(playerteam);

    try {
      const response = await axios.get(url + `player/getPlayer/${playerteam}`);

      setteamPlayers(response.data);
      let list = [];
      for (let i = 0; i < players.length; i++) {
        let update = false;
        for (let j = 0; j < response.data.length; j++) {
          if (players[i].id == response.data[j].id) {
            update = true;
            list.push(response.data[j]);
            break;
          }
        }
        if (update === false) {
          list.push(players[i]);
        }
      }
      setplayers(list);
    } catch (error) {
      console.error("Error fetching players:", error);
      // Handle error
    }
    //console.log(teamplayers);
  };

  const handlephoneview = () => {
    if (view == "playerCard") {
      setview("none");
      seticon(faChevronUp);
    } else {
      setview("playerCard");
      seticon(faChevronDown);
    }
  };

  useEffect(() => {
    getplayers();
  }, []);

  return (
    <div className="playerListContainer">
      <div className="slotdiv">
        <h3 className="slot"> {14 - teamplayers.length} - SLOTS LEFT </h3>
        <h3 className="phoneslot" onClick={handlephoneview}>
          {" "}
          {14 - teamplayers.length} - SLOTS LEFT{" "}
          <span style={{ marginLeft: "10px" }}>
            <FontAwesomeIcon icon={icon} />
          </span>
        </h3>
      </div>
      {players.map((player) => (
        <div key={Math.random(1000000)} className={view}>
          <div>
            <div className="playerTitle">{player.name}</div>
            <div className="playerDetails">Role: {player.role}</div>
            <div className="playerDetails" style={{ marginTop: "3px" }}>
              {player.position || player.details || player.overs}
            </div>
          </div>
          <div className="flex">
            {player._id ? (
              <></>
            ) : (
              <span>
                <button onClick={() => handleclick(player)} className="btn-8">
                  Enroll
                  <span>
                    <FontAwesomeIcon icon={faRightToBracket} />
                  </span>
                </button>
              </span>
            )}
          </div>

          <img src={player.img} alt="" className="img-7" />
          {player.filled == true ? (
            <img
              src={player.profile}
              alt="Description"
              className="round-image"
            />
          ) : player.filled == false ? (
            <p className="book" >Booked</p>
          ) : (
            <></>
          )}
        </div>
      ))}
    </div>
  );
};

export default Player;

// import ball from "./ball-2.png";
// import bat from "./bat.jpeg";
// import batball from "./batball.jpeg";
// import wk from "./wk-2.webp";
// import opener from "./open.webp";
