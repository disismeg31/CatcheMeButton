import React, { useState } from "react";

const CatchMeBtn = () => {
  const [position, setPosition] = useState({
    top: "50%",
    left: "50%",
  });

  const handleCatching = () => {
    const newTop = Math.random() * (window.innerHeight - 50) + "px";
    const newLeft = Math.random() * (window.innerWidth - 100) + "px";
    setPosition({ top: newTop, left: newLeft });
  };

  return (
    <button
      style={{
        position: "absolute",
        top: position.top,
        left: position.left,
        borderStyle: "none",
        height: "45px",
        width: "90px",
        border: "5px solid #2c3641",
        backgroundColor: "#96c180",
        color: "#2c3641",
        fontWeight: "bold",
        fontSize: "15px",
      }}
      onMouseEnter={handleCatching}
    >
      Catch Me
    </button>
  );
};

export default CatchMeBtn;
