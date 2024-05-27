import React, { useState } from "react";
import "./MainPage.css";
import { useNavigate } from "react-router-dom";
function MainPage() {
  const [player1Name, setplayer1Name] = useState("Player1");
  const [player2Name, setplayer2Name] = useState("Player2");
  const navigate = useNavigate();
  const handleStartGame = (event) => {
    event.preventDefault();
    console.log("starting the game !!");
    console.log(player1Name);
    console.log(player2Name);
    navigate("/game");
  };
  return (
    <div className="MainContainer">
      <form
        className="FormContianer"
        onSubmit={(e) => {
          handleStartGame(e);
        }}
      >
        <div className="onlyInputsContainer">
          <div className="InputContainer">
            <label>Player 1</label>
            <input
              type="text"
              required
              placeholder="Enter the Player1 Name"
              onChange={(e) => {
                setplayer1Name(e.target.value);
              }}
            />
          </div>
          <div className="InputContainer">
            <label>Player 2</label>
            <input
              type="text"
              required
              placeholder="Enter the Player2 Name"
              onChange={() => {
                setplayer2Name(event.target.value);
              }}
            />
          </div>
        </div>

        <div className="buttonContainer">
          <button type="submit">Start the Game</button>
        </div>
      </form>
    </div>
  );
}

export default MainPage;
