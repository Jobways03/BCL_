import React, { useEffect, useState } from "react";
import "./teamform.css";
import axios from "axios";
import AdminNavbar from "../Navbar/adminNavbar";
import { Link } from "react-router-dom";
import Footer from "../Footer/footer";
import Commoncode from "../Others/commoncode";
import toast from "react-hot-toast";

const TeamForm = () => {
  const [teamName, setTeamName] = useState("");
  const [image, setImage] = useState();
  const [teams, setTeams] = useState();

  useEffect(() => {
    getTeams();
  }, []);

  let url = process.env.REACT_APP_HOST;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!teamName) {
      toast.error("Please give the Teamname");
    } else if (!image) {
      toast.error("Please select the Image");
    } else {
      toast.loading("...Loading");
      try {
        const formData = new FormData();
        formData.append("teamName", teamName);
        formData.append("image", image);
        const response = await axios.post(`${url}team/create`, formData);
        if (response.data.message === "success") {
          toast.dismiss();
          getTeams();
          setTeamName("");
          setImage(null);
          // Clear the file input value after successful upload
          const input = document.querySelector('input[type="file"]');
          if (input) {
            input.value = "";
          }
          toast.success("Team created successfully");
        } else {
          toast.error("Error creating team");
        }
      } catch (error) {
        // console.error("Error:", error);
        toast.error("Error creating team");
      }
    }
  };

  const getTeams = async () => {
    const response = await axios.get(`${url}team/getAll`);
    setTeams(response.data);
  };

  // Delete team
  const deleteTeam = async (id) => {
    const confirmed = window.confirm("deleting the selected team?");

    if (confirmed) {
      try {
        let response = await axios.delete(`${url}team/delete/${id}`);
        if (response.data.message === "Team deleted successfully") {
          toast.success("Team deleted successfully");
          const updatedTeams = teams.filter((team) => team._id !== id);
          setTeams(updatedTeams);
        } else {
          toast.error("Team is included in the matches.so, cannot be deleted");
        }
      } catch (error) {
        console.error(error.message);
        toast.error("Error deleting team");
      }
    } else {
      //console.log("Deletion canceled");
    }
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
            <h1 className="text-center"> Teams</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item">
                  <Link to="/adminjobways">Admin</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Teams
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      <div>
        <form onSubmit={handleSubmit} className="TeamForm">
          <h2>NEW TEAM</h2>
          <label>
            Team Name:
            <input
              type="text"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
            />
          </label>

          <label>
            Team Logo:
            <input
              type="file"
              className="teamlogo"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </label>
          <button type="submit">Submit</button>
        </form>

        <div className="team-top">
          <h1>TEAMS</h1>
          <div>
            {teams &&
              teams.map((team, index) => {
                return (
                  <div className="teamcar" key={index}>
                    <img src={team.image} className="teamim" alt="loading..." />
                    <h5 className="teamnam">{team.teamName}</h5>
                    <button
                      className="delete"
                      onClick={() => deleteTeam(team._id)}
                    >
                      Delete
                    </button>
                    {/* <button
                      className="updateteam"
                      onClick={() => updateTeam(team._id)}
                    >
                      Update
                    </button> */}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <Commoncode />
      <Footer />
    </>
  );
};

export default TeamForm;
