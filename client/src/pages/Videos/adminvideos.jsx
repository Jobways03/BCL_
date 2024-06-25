import React, { useEffect, useState } from "react";
import Footer from "../Footer/footer";
import "./videos.css";
import { Link } from "react-router-dom";
import VideoIframe from "../youtube/YoutubeIframe.tsx";
import AdminNavbar from "../Navbar/adminNavbar.jsx";
import Commoncode from "../Others/commoncode.jsx";
import axios from "axios";
import toast from "react-hot-toast";

const AdminVideos = () => {
  const [galleryVideo, setgalleryVideo] = useState([]);
  const [VideoID, setvideoID] = useState("");
  const [videoUrl, setvideoUrl] = useState("");

  const url = process.env.REACT_APP_HOST;

  const handlevideo = (e) => {
    let link = e.target.value;
    setvideoUrl(link);
    let verifylink = link.split("v=");
    if (verifylink[0].length === 30) {
      let ID = link.split("v=")[1].split("&")[0];
      let ar = ID.split("");
      if (ar.length !== 11) {
        toast.error("Please provide the valid link");
      } else {
        setvideoID(ID);
      }
    } else {
      toast.error("Please provide the valid link here");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!VideoID) {
      toast.error("Please provide the video link");
    } else {
      try {
        const newVideo = { VideoID };
        const response = await axios.post(`${url}video/create`, newVideo);
        if (response.data.message === "success") {
          setvideoUrl("");
          setvideoID("");
          fetchVideos();
          toast.success("Video created successfully");
        } else {
          toast.error("Error creating video");
        }
      } catch (error) {
        // console.error("Error:", error);
        toast.error("Error creating video");
      }
    }
  };

  const fetchVideos = async () => {
    try {
      const response = await axios.get(`${url}video/getAll`);
      setgalleryVideo(response.data);
    } catch (error) {
      // console.error("Error fetching videos:", error);
    }
  };

  const deleteTeam = async (id) => {
    const confirmed = window.confirm("deleteing the selected video?");
    if (confirmed) {
      try {
        await axios.delete(`${url}video/delete/${id}`);
        const updatedVideos = galleryVideo.filter((video) => video._id !== id);
        setgalleryVideo(updatedVideos);
      } catch (error) {
        // console.error("Error deleting video:", error);
        toast.error("Error deleting video");
      }
    } else {
      //console.log("Deletion canceled");
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);
  return (
    <>
      <AdminNavbar />
      <section className="banner-part sub-main-banner float-start w-100">
        <div className="baner-imghi">
          <img src="images/sub-banner01.jpg" alt="sub-banner" />
        </div>
        <div className="sub-banner">
          <div className="container">
            <h1 className="text-center">Videos</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item">
                  <Link to="/adminjobways">Admin</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Videos
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      <div>.</div>
      <form onSubmit={handleSubmit} className="url-form">
        <label>
          Paste URL:
          <input
            type="text"
            value={videoUrl}
            onChange={handlevideo}
            placeholder="https://example.com"
          />
        </label>
        <button type="submit" style={{ marginBottom: "10px" }}>
          Submit
        </button>
      </form>
      <div className="video">
        {galleryVideo &&
          galleryVideo.map((video, index) => {
            return (
              <div key={index}>
                <div className="in-video">
                  <VideoIframe videoId={video.VideoID} videoTitle={video._id} />
                </div>
                <button
                  className="dle-btn"
                  onClick={() => deleteTeam(video._id)}
                >
                  Delete
                </button>
              </div>
            );
          })}
      </div>
      <Footer />
      <Commoncode />
    </>
  );
};

export default AdminVideos;
