import React from "react";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";
import { Link } from "react-router-dom";
import Commoncode from "../Others/commoncode";
import "./points.css";
import CricketLoader from "../Others/spinner";
import cc from "./cc.png";
import rr from "./rr.png";
import ss from "./ss.png";
import ssn from "./ssn.png";

const Pointstable = () => {
  const teams = [
    {
      pos: 1,
      name: "Capitals",
      img: cc,
      played: 3,
      won: 3,
      lost: 0,
      nrr: "3.250",
      points: 6,
      nr: 0,
    },
    {
      pos: 2,
      name: "Super Kings",
      img: ss,
      played: 3,
      won: 2,
      lost: 1,
      nrr: "1.623",
      points: 4,
      nr: 0,
    },
    {
      pos: 3,
      name: "Sun Risers",
      played: 3,
      img: ssn,
      won: 1,
      lost: 2,
      nrr: "-1.367",
      points: 2,
      nr: 0,
    },
    {
      pos: 4,
      name: "Royal challengers",
      played: 3,
      img: rr,
      won: 0,
      lost: 3,
      nrr: "-3.599",
      points: 0,
      nr: 0,
    },
  ];
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
            <h1 className="text-center"> Points Table</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item">
                  <Link to="/">HOME</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Points Table
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      <div>
        <div className="design">
          <div className="inner-design ds">
            <div className="points">
              {" "}
              <div className="table-responsive">
                <table>
                  <thead>
                    <tr>
                      <th>POS</th>
                      <th>Team</th>
                      <th>P</th>
                      <th>W</th>
                      <th>L</th>
                      <th>NR</th>
                      <th>NRR</th>
                      <th>POINTS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {teams.map((team, index) => (
                      <tr key={index}>
                        <td>{team.pos}</td>
                        <td>
                          <div className="tn">
                            {" "}
                            <img src={team.img} alt="team" className="dlogo2" />
                            <h5 style={{ marginLeft: "10px" }}>{team.name}</h5>
                          </div>
                        </td>
                        <td>{team.played}</td>
                        <td>{team.won}</td>
                        <td>{team.lost}</td>
                        <td>{team.nr}</td>
                        <td>{team.nrr}</td>
                        <td>{team.points}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Commoncode />
    </>
  );
};

export default Pointstable;
