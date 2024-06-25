import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import "./gallery.css";
import Footer from "../Footer/footer";
import { Link } from "react-router-dom";
import Commoncode from "../Others/commoncode";
import CricketLoader from "../Others/spinner";
import axios from "axios";
import AdminNavbar from "../Navbar/adminNavbar";
import toast from "react-hot-toast";

const AdminGallery = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [galleryImages, setgalleryImages] = useState([]);
  const [image, setImage] = useState();

  const url = process.env.REACT_APP_HOST;
  // console.log(url);

  const fetchImages = async () => {
    try {
      const response = await axios.get(`${url}image/getAll`);
      setgalleryImages(response.data);
    } catch (error) {
      // console.error("Error fetching images:", error);
      toast.error("Failed to fetch images");
    }
  };

  const handleimage = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) {
      toast.error("Please select the Image");
    } else {
      toast.loading("...Loading");
      const formData = new FormData();
      formData.append("image", image);
      try {
        const response = await axios.post(`${url}image/create`, formData);
        if (response.data.message === "success") {
          toast.dismiss();
          toast.success("Image uploaded successfully");
          fetchImages();
          setImage();
          // Clear the file input value after successful upload
          const input = document.querySelector('input[type="file"]');
          if (input) {
            input.value = "";
          }
        } else {
          toast.error("Error in uploading the Image");
        }
      } catch (error) {
        // console.error("Error:", error);
        toast.error("Error in uploading the Image");
      }
    }
  };

  const deleteImage = async (id) => {
    const confirmed = window.confirm("deleteing the selected image?");

    if (confirmed) {
      try {
        await axios.delete(`${url}image/delete/${id}`);
        const updatedImages = galleryImages.filter((image) => image._id !== id);
        setgalleryImages(updatedImages);
      } catch (error) {
        //console.error("Error deleting image:", error);
        toast.error("Error deleting image");
      }
    } else {
      console.log("Deletion canceled");
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

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
        <AdminNavbar />
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
        <form onSubmit={handleSubmit} className="TeamForm">
          <h2>ADD MEMORIES</h2>
          <label>
            PICTURE
            <input
              type="file"
              className="teamlogo"
              onChange={(e) => handleimage(e)}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
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
                <img
                  src={galleryImages[slideNumber].image}
                  alt="imageloading.."
                />
              </div>
            </div>
          )}

          <div className="gallery">
            {galleryImages &&
              galleryImages.map((image, index) => (
                <div key={index} className="image-card">
                  <img src={image.image} alt="imageloading.." />
                  <button
                    onClick={() => deleteImage(image._id)}
                    className="delete-button"
                  >
                    Delete
                  </button>
                </div>
              ))}
          </div>
        </div>
        <Footer />
      </div>
      <Commoncode />
    </>
  );
};
export default AdminGallery;
