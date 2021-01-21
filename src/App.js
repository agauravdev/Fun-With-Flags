import React, { useEffect, useState } from "react";
import "./styles.css";

import Background from "/public/web-pirate_00435677.jpg";

const flags = {
  "🏴‍☠️": "Pirate",
  "🇮🇳": "Indian",
  "🇯🇵": "Japan",
  "🇳🇱": "Netherlands",
  "🇬🇧": "United Kingdom",
  "🇮🇹": "Italy",
  "🇳🇵": "Nepal"
};

export default function App() {
  const [selectedFlag, setFlag] = useState("");
  const [flagName, setFlagName] = useState("");

  useEffect(() => {
    let flag = "This land be not yet discovered";
    if (selectedFlag) {
      flag = flags[selectedFlag] || flag;
    } else {
      flag = "";
    }
    setFlagName(flag);
  }, [selectedFlag]);

  const displayFlagName = (flag) => {
    setFlag(flag);
  };

  const inputChange = (event) => {
    const flag = event.target.value;
    setFlag(flag);
  };

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${Background})`,
        width: "100vw",
        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        margin: 0
      }}
    >
      <div className="container">
        <h1>Flag Interpreter</h1>
        <input
          id="flagInput"
          className="mb-20"
          placeholder="Enter flag"
          value={selectedFlag}
          onChange={inputChange}
        />

        <h3>Flag : {flagName}</h3>

        <h2 style={{ marginTop: "20px", marginBottom: "20px" }}>
          List of flags
        </h2>
        {Object.keys(flags).map((flag) => {
          return (
            <button
              key={flag}
              onClick={() => displayFlagName(flag)}
              style={{
                fontSize: "2rem",
                border: "0px",
                background: "transparent",
                cursor: "pointer"
              }}
            >
              {flag}
            </button>
          );
        })}
      </div>
    </div>
  );
}
