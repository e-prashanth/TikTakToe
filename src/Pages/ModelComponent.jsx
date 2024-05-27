import React from "react";
import "./ModelComponent.css";
function ModelComponent({ props }) {
  let message;
    props.winner === "None"
      ? message = "Game Over 🥲 Play again"
      : message = `${props.winner} is the Winner 🥳💃`;
  const handleResetGame = () => {
    console.log("clicked");
    window.location.reload();
  };
  console.log(props);
  return (
    <div className="totalContianer">
      <div className="ModelContainer">
        {message}
        <button
          className="ResetButton"
          onClick={() => {
            handleResetGame();
          }}
        >
          Reset Game
        </button>
      </div>
    </div>
  );
}

export default ModelComponent;
