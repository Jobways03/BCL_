import React, { useState } from "react";
import Footer from "../Footer/footer";
import Navbar from "../Navbar/navbar";
import "./videos.css";
import { Link } from "react-router-dom";
import VideoIframe from "../youtube/YoutubeIframe.tsx";
import Commoncode from "../Others/commoncode.jsx";
// import axios from "axios";
import CricketLoader from "../Others/spinner.jsx";
//import toast from "react-hot-toast";

const Videos = () => {
  let video = [
    { VideoId: "N1XCfDKOPcQ" },
    { VideoId: "3uDpiU5uzv0" },
    { VideoId: "GjewE9bDAlI" },
    { VideoId: "pcZz3ncBRto" },
    { VideoId: "pbVsoT4MX7A" },
    { VideoId: "NabiG8sGVz4" },
    { VideoId: "F7w5_IyN0WE" },
    { VideoId: "anKnkwhE-1o" },
  ];
  const [galleryVideo, setgalleryVideo] = useState(video);

  //const url = process.env.REACT_APP_HOST;

  // const fetchVideos = async () => {
  //   try {
  //     const response = await axios.get(`${url}video/getAll`);
  //     setgalleryVideo(response.data);
  //     // toast.dismiss();
  //   } catch (error) {
  //     // console.error("Error fetching videos:", error);
  //   }
  // };

  // setTimeout(() => {
  //   toast.loading("....loading");
  // }, 5000);

  // useEffect(() => {
  //   fetchVideos();
  // }, []);
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
            <h1 className="text-center">Videos</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item">
                  <Link to="/">HOME</Link>
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
      <div className="video">
        {galleryVideo &&
          galleryVideo.map((video, index) => {
            return (
              <div key={index} className="in-video">
                <VideoIframe videoId={video.VideoId} videoTitle={index} />
                {/* <VideoIframe videoId={video.VideoID} videoTitle={video._id} /> */}
              </div>
            );
          })}
      </div>

      <Footer />
      <Commoncode />
    </>
  );
};

export default Videos;
