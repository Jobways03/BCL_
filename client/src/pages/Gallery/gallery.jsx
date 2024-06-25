import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import "./gallery.css";
import Footer from "../Footer/footer";
import Navbar from "../Navbar/navbar";
import { Link } from "react-router-dom";
import Commoncode from "../Others/commoncode";
import CricketLoader from "../Others/spinner";
//import axios from "axios";

const Gallery = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  let src = [
    "images/21-07-23.png",
    "images/RE- 16-11-23- PJ.png",
    "images/RE-17-11-23- PJ.png",
    "images/WhatsApp Image 2023-09-24 at 4.17.01 PM.jpeg",
    "images/RE-21-09-23.jpeg",
    "images/11-07-23.png",
    "images/13-07-23.png",
    "images/pro.png",
    "images/29-06-23.png",
    "images/26-06-23.png",
    "images/19-06-23.jpg",
    "images/20-06-23.png",
    "images/23-06-23.png",
    "images/16-06-23.png",
    "images/pro jobways (2).png",
    "images/pro jobways (16).png",
    "images/PJ- 08-05-23 (3).jpg",
    "images/26-05-23.png",
    "images/PJ- 05-05-23.png",
    "images/1683037813897.jpg",
  ];
  const [galleryImages, setgalleryImages] = useState(src);

  //const url = process.env.REACT_APP_HOST;
  // console.log(url);
  // const fetchImages = async () => {
  //   try {
  //     const response = await axios.get(`${url}image/getAll`);
  //     setgalleryImages(response.data);
  //   } catch (error) {
  //     //toast.error("Something went wrong. Please try again later.");
  //   }
  // };
  // // fetchImages();
  // useEffect(() => {
  //   fetchImages();
  // }, []);

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  // Close Modal
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // Previous Image
  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(galleryImages.length - 1)
      : setSlideNumber(slideNumber - 1);
  };

  // Next Image
  const nextSlide = () => {
    slideNumber + 1 === galleryImages.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };

  return (
    <>
      <div>
        <CricketLoader />
        <Navbar />
        <section className="banner-part sub-main-banner float-start w-100">
          <div className="baner-imghi">
            <img src="images/sub-banner01.jpg" alt="sub-banner" />
          </div>
          <div className="sub-banner">
            <div className="container">
              <h1 className="text-center"> Gallery</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <Link to="/">HOME</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Gallery
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </section>
        <div>.</div>
        <div>
          {openModal && (
            <div className="sliderWrap">
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="btnClose"
                onClick={handleCloseModal}
              />
              <FontAwesomeIcon
                icon={faCircleChevronLeft}
                className="btnPrev"
                onClick={prevSlide}
              />
              <FontAwesomeIcon
                icon={faCircleChevronRight}
                className="btnNext"
                onClick={nextSlide}
              />
              <div className="fullScreenImage">
                <img src={galleryImages[slideNumber]} alt="imageloading.." />
                {/* src={galleryImages[slideNumber].image} */}
              </div>
            </div>
          )}

          <div className="galleryWrap">
            {galleryImages &&
              galleryImages.map((slide, index) => {
                return (
                  <div
                    className="single"
                    key={index}
                    onClick={() => handleOpenModal(index)}
                  >
                    <img
                      src={slide}
                      // src={slide.image}
                      alt="imageloading.."
                      style={{ width: "100%" }}
                    />
                  </div>
                );
              })}
          </div>
        </div>

        <Footer />
      </div>
      <Commoncode />
    </>
  );
};
export default Gallery;
