import React, { useState, useEffect } from "react";
import "./popup.css"; // Import your CSS file

const CricketLoader = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false); // Hide loader after 3 seconds (adjust as needed)
    }, 1000);

    return () => clearTimeout(timer); // Cleanup function
  }, []);

  return (
    <div className={`loader-container ${showLoader ? "" : "hide"}`}>
      <div className="loader-animation"></div>
      {/* <img src="images/logo.png" alt="Loader" className="loader-image" /> */}
    </div>
  );
};

export default CricketLoader;
