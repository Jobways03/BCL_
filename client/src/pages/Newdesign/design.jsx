import React, { useEffect, useState } from "react";
import "./design.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const Design = () => {
  const [schedule, setSchedule] = useState([]);
  const [date, setdate] = useState([]);
  useEffect(() => {
    getSchedule();
    console.log(date);
  }, []);

  const url = process.env.REACT_APP_HOST;

  const getSchedule = async () => {
    try {
      const response = await axios.get(`${url}schedule/getAll`);
      setSchedule(response.data);
      console.log(response.data);
      for (let i = 0; i < response.data.length; i++) {
        const inputDate = response.data[i].date;
        const date = new Date(inputDate);
        const options = { month: "short", day: "numeric", weekday: "short" };
        const formattedDate = date.toLocaleDateString("en-US", options);
        setdate(...date, formattedDate);
      }
    } catch (error) {
      //toast.error("something Went Wrong Please try after sometime")
    }
  };

  return (
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
              {/* wkjed k ekmwek dmne c */}
              {/* <div className="match-card" key={index}>
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
              </div> */}
            </>
          ))}
      </div>
    </div>
  );
};

export default Design;
