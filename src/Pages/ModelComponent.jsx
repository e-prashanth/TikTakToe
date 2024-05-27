import React from "react";
import "./ModelComponent.css";
function ModelComponent({props}) {
  const handleResetGame = () => {
    console.log("clicked");
    window.location.reload();
  };
  console.log(props)
  return (
    <div className="totalContianer">
      <div className="ModelContainer">
        {props.PlayerName} is the Winner <br></br>🥳💃
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
