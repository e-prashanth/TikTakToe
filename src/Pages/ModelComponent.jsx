import React from "react";
import "./ModelComponent.css";
function ModelComponent({ PlayerName }) {
  const handleResetGame = () => {
    console.log("clicked");
    window.location.reload();
  };
  return (
    <div className="totalContianer">
      <div className="ModelContainer">
        Prashanth is the Winner <br></br>🥳💃
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
