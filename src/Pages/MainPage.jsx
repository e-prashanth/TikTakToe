import React from "react";
import "./MainPage.css";
function MainPage() {
  return (
    <div className="MainContainer">
      <form className="FormContianer">
        <div className="onlyInputsContainer">
          <div className="InputContainer">
            <label>Player 1</label>
            <input type="text" placeholder="Enter the Player1 Name" />
          </div>
          <div className="InputContainer">
            <label>Player 2</label>
            <input type="text" placeholder="Enter the Player2 Name" />
          </div>
        </div>

        <div className="buttonContainer">
          <button>Start the Game</button>
        </div>
      </form>
    </div>
  );
}

export default MainPage;
