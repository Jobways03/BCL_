import React from "react";
import "./TeamCaptains.css"; // Importing CSS file

const teamCaptains = [
  {
    name: "Captain 1",
    team: "Team A",
    imageUrl: "./images/de.jpg",
  },
  {
    name: "Captain 2",
    team: "Team B",
    imageUrl: "./images/che.jpg",
  },
  {
    name: "Captain 3",
    team: "Team C",
    imageUrl: "./images/rcb.jpg",
  },
  {
    name: "Captain 4",
    team: "Team D",
    imageUrl: "./images/sun1.jpg",
  },
];

const TeamCaptains = () => {
  return (
    <div className="captainsContainer">
      <h1 className="al">TEAM CAPTAINS</h1>
      <div className="captainsContaine">
        {teamCaptains.map((captain, index) => (
          <div className="captainCard" key={index}>
            <img src={captain.imageUrl} alt={captain.name} />
            <h2>{captain.name}</h2>
            <p>{captain.team}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamCaptains;
