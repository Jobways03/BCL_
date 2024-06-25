import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "./players.css"

const Update = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [player, setplayer] = useState({
    name: "",
    number: "",
    profile: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    let playe = JSON.parse(localStorage.getItem("Editplayer"));
    setplayer(playe);
    //localStorage.removeItem("Editplayer");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    toast.loading("...loading");
    let url = process.env.REACT_APP_HOST;
    //console.log(formData);
    // const formData = new FormData();
    // Object.keys(player).forEach((key) => formData.append(key, player[key]));
    try {
      let response = await axios.put(url + `player/updatePlayer`, player, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.data) {
        toast.dismiss();
        toast.success("Successfully updated profile");
        navigate("/adminplayers");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong ! Please try after sometime");
      // alert("An error occurred");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "profile") {
      setplayer({ ...player, [name]: e.target.files[0] });
    } else {
      setplayer({ ...player, [name]: value });
    }
  };

  const handleFileChange = (e) => {
    setProfilePhoto(e.target.files[0]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form-style">
        <div className="input-group">
          <label htmlFor="name" className="label-style">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={player.name}
            onChange={handleChange}
            className="input-style"
          />
        </div>
        <div className="input-group">
          <label htmlFor="number" className="label-style">
            Number
          </label>
          <input
            type="text"
            id="number"
            name="number"
            value={player.number}
            onChange={handleChange}
            className="input-style"
          />
        </div>
        <div className="input-group">
          <label htmlFor="profilePhoto" className="label-style">
            Profile Photo
          </label>
          <input
            type="file"
            id="profilePhoto"
            name="profile"
            onChange={handleChange}
            className="input-style"
          />
        </div>
        <button type="submit" className="button-style">
          Update
        </button>
      </form>
    </div>
  );
};

export default Update;
