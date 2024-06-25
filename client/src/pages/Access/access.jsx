import React, { useState } from "react";
import "./access.css";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

function Access() {
  const [accessCode, setAccessCode] = useState("");
  const [msg, setmsg] = useState("");
  const naviage = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (accessCode === "BCL@jobways") {
      naviage("/adminjobways");
    } else {
      setmsg("SORRY ACCESS DENIED");
      setTimeout(() => {
        setmsg("");
      }, 5000);
    }
  };

  const goback = () => {
    naviage("/");
  };

  return (
    <div className="Ap">
      <header className="Ap-header">
        <h1>Please provide your Access code to step forward</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={accessCode}
            onChange={(e) => setAccessCode(e.target.value)}
            placeholder="Enter Access Code"
            className="access-input"
          />
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
        {msg}
        <Button variant="light" onClick={goback}>
          Go Back
        </Button>{" "}
      </header>
    </div>
  );
}

export default Access;
