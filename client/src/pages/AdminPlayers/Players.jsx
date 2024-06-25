import React, { useEffect, useState } from "react";
import "./players.css"; // Import the CSS module
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-bootstrap/Modal";
import toast from "react-hot-toast";

const whatapp = "https://wa.me/+91";

const AdminPlayers = (team) => {
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
  const [lgShow, setLgShow] = useState(false);
  const [upName , setupName] = useState("")
  const [formData, setFormData] = useState({
    profile: "",
    _id: "",
    name:""
  });
  const navigate = useNavigate();
  const handleclick = (player) => {
    localStorage.setItem("id", JSON.stringify(player.id));
    localStorage.setItem("name", JSON.stringify(player.name));
    localStorage.setItem("role", player.role);
    localStorage.setItem("position", JSON.stringify(player.position));
    localStorage.setItem("img", JSON.stringify(player.img));
    localStorage.setItem("team", JSON.stringify(team.team));
    navigate("/form");
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

  const handleconfirm = async (id) => {
    let url = process.env.REACT_APP_HOST;
    try {
      let response = await axios.put(`${url}player/confirmPlayer/${id}`);
      getplayers();
    } catch (error) {
      console.error(error.message);
    }
  };
  const handledelete = async (id) => {
    let url = process.env.REACT_APP_HOST;
    try {
      let response = await axios.delete(`${url}player/deleteplayer/${id}`);
      getplayers();
    } catch (error) {
      //console.error(error.message);
    }
  };
  const handleupdate = (player) => {

    localStorage.setItem("Editplayer" , JSON.stringify(player))
    navigate("/update");
  };


  const handleFormSubmit = async (e) => {
   
  };

  return (
    <>
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
              <a className="playerTitle" href={whatapp + player.number}>
                Phone: {player.number}
              </a>

              <div className="playerTitle">Email: {player.email}</div>
              {player.email ? (
                <>
                  <button
                    onClick={() => handledelete(player._id)}
                    className="btn-8"
                  >
                    delete
                  </button>
                  <button
                    onClick={() => handleupdate(player)}
                    className="btn-8"
                  >
                    Update
                  </button>
                </>
              ) : (
                <></>
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
              <button
                className="book"
                onClick={() => handleconfirm(player._id)}
              >
                Confirm
              </button>
            ) : (
              <></>
            )}
            {/* <Modal
              size="lg"
              show={lgShow}
              onHide={() => setLgShow(false)}
              aria-labelledby="example-modal-sizes-title-lg"
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                  Update
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form onSubmit={handleFormSubmit}>
                  <label>
                    <div className="p">Profile</div>
                    <input
                      type="file"
                      className="teamlogo"
                      name="profile"
                      onChange={(e) => handleimage(e)}
                    />
                  </label>
                  <label >Name</label>
                  <input type="text" onChange={(e)=>{setupName(e.target.value)}}/>
                  <button type="submit" className="btn btn-primary">
                    Update Profile
                  </button>
                </form>
              </Modal.Body>
            </Modal> */}
          </div>
        ))}
      </div>
    </>
  );
};

export default AdminPlayers;
