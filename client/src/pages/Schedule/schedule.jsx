import React, { useState, useEffect } from "react";
import axios from "axios";
import "./schedule.css";
import AdminNavbar from "../Navbar/adminNavbar";
import { Link } from "react-router-dom";
import Footer from "../Footer/footer";
import Commoncode from "../Others/commoncode";

const Schedule = () => {
  const [schedule, setSchedule] = useState([]);
  const [teams1, setTeams1] = useState();
  const [teams2, setTeams2] = useState();
  const [matchName, setMatchName] = useState("");
  const [team1, setTeam1] = useState("");
  const [team2, setTeam2] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [venue, setVenue] = useState("");
  const [result, setresult] = useState("");
  const [resultid, setresultid] = useState("");
  const [res, setres] = useState(false);
  const [score1 , setscore1] = useState("")
   const [score2, setscore2] = useState("");
  useEffect(() => {
    getSchedule();
    getTeams();
  }, []);

  const url = process.env.REACT_APP_HOST;

  const getTeams = async () => {
    try {
      const response = await axios.get(`${url}team/getAll`);
      setTeams1(response.data);
      setTeams2(response.data);
    } catch (error) {
      // console.error("Error fetching teams:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newSchedule = { matchName, team1, team2, time, venue, date };
      const response = await axios.post(`${url}schedule/create`, newSchedule);
      setSchedule([...schedule, response.data]);
    } catch (error) {
      // console.error("Error creating schedule:", error);
    }
  };

  const getSchedule = async () => {
    try {
      const response = await axios.get(`${url}schedule/getAll`);
      setSchedule(response.data);
    } catch (error) {
      // console.error("Error fetching schedule:", error);
    }
  };

  const deleteSchedule = async (id) => {
    try {
      await axios.delete(`${url}schedule/delete/${id}`);
      setSchedule(schedule.filter((sched) => sched._id !== id));
    } catch (error) {
      // console.error("Error deleting schedule:", error);
    }
  };

  const showupdate = (id) => {
    setres(true);
    setresultid(id);
  };

  const handleupdate = async () => {
    try {
      console.log(result);
      const newSchedule = { result, resultid, score1, score2 };
      const response = await axios.put(`${url}schedule/update`, newSchedule);
      //setSchedule(response.data);
      setres(false);
    } catch (error) {
      // console.error("Error Updating schedule:", error);
    }
  };

  const handleTeamChange = (e) => {
    setTeam1(e.target.value);
  };

  const handleTeamChange2 = (e) => {
    setTeam2(e.target.value);
  };

  return (
    <>
      <AdminNavbar />
      <section className="banner-part sub-main-banner float-start w-100">
        <div className="baner-imghi">
          <img src="images/sub-banner01.jpg" alt="sub-banner" />
        </div>
        <div className="sub-banner">
          <div className="container">
            <h1 className="text-center"> Matches</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item">
                  <Link to="/adminjobways">Admin</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Matches
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      <form className="form-group" onSubmit={handleSubmit}>
        <h2>Cricket Match Schedule</h2>
        <input
          type="text"
          placeholder="Match Name"
          value={matchName}
          onChange={(e) => setMatchName(e.target.value)}
          required
        />

        <select
          value={team1.teamName}
          onChange={handleTeamChange}
          className="option"
          required
        >
          <option value=""> team 1</option>
          {teams1 &&
            teams1.map((team) => (
              <option key={team._id} value={team._id}>
                {team.teamName}
              </option>
            ))}
        </select>

        <select
          value={team2.teamName}
          onChange={handleTeamChange2}
          className="option"
          required
        >
          <option value=""> team 2</option>
          {teams2 &&
            teams2.map((team) => (
              <option key={team._id} value={team._id}>
                {team.teamName}
              </option>
            ))}
        </select>

        <input
          type="text"
          placeholder="Venue"
          value={venue}
          onChange={(e) => setVenue(e.target.value)}
        />

        <input
          type="date"
          placeholder="date"
          onChange={(e) => setDate(e.target.value)}
        />

        <input
          type="time"
          placeholder="Time"
          onChange={(e) => setTime(e.target.value)}
        />

        <button type="Submit">Add Match</button>
      </form>
      {res ? (
        <div>
          <hr />

          <h1 style={{ paddingLeft: "600px" }}>ADD THE RESULT</h1>
          <input
            style={{ marginLeft: "570px", padding: "5px", width: "300px" }}
            type="text"
            placeholder="Team 1 score"
            value={score1}
            onChange={(e) => setscore1(e.target.value)}
            required
          />
          <input
            style={{ marginLeft: "570px", padding: "5px", width: "300px" }}
            type="text"
            placeholder="Team 2 score"
            value={score2}
            onChange={(e) => setscore2(e.target.value)}
            required
          />
          <input
            style={{ marginLeft: "570px", padding: "5px", width: "300px" }}
            type="text"
            placeholder="Match Result"
            value={result}
            onChange={(e) => setresult(e.target.value)}
            required
          />

          <button onClick={() => handleupdate()}>Update</button>
        </div>
      ) : (
        <></>
      )}
      {schedule &&
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
                        <img alt="su" src={sched.team1.image} />
                      </div>
                      <h5 className="text-white"> {sched.team1.teamName}</h5>
                    </div>
                    <div className="comoi-temas mt-4 d-lg-flex align-items-center">
                      <div className="logui">
                        <img alt="su" src={sched.team2.image} />
                      </div>
                      <h5 className="text-white"> {sched.team2.teamName}</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 d-grid justify-content-lg-end">
                  <div className="imgou">
                    <img alt="sy" src="images/bg-stadium01.jpg" />
                  </div>
                  <button
                    className="btn btn-live d-table text-center"
                    id="delete"
                    onClick={() => deleteSchedule(sched._id)}
                  >
                    {" "}
                    Delete{" "}
                  </button>
                  <button
                    className="btn btn-live d-table text-center"
                    onClick={() => showupdate(sched._id)}
                  >
                    {" "}
                    Update{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      <Footer />
      <Commoncode />
    </>
  );
};

export default Schedule;
