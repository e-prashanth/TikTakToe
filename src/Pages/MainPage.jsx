import React, { useState } from "react";
import "./MainPage.css";
import { useNavigate } from "react-router-dom";
function MainPage() {
  const [player1Name, setplayer1Name] = useState("Player1");
  const [player2Name, setplayer2Name] = useState("Player2");
  const navigate = useNavigate();
  const [Mode, setMode] = useState(1);
  const handleStartGame = (event) => {
    event.preventDefault();
    if (Mode === 2) {
      if (player1Name === player2Name) {
        alert("Player's Name Cannot be Same !!");
        window.location.reload();
      } else {
        localStorage.setItem("player1Name", player1Name);
        localStorage.setItem("player2Name", player2Name);
        navigate("/TikTakToe/game");
      }
    } else if (Mode === 1) {
      if (player1Name === "Computer" || player1Name === "computer") {
        alert("Player Name Can't be Computer!!");
      } else {
        localStorage.setItem("player1Name", player1Name);
        localStorage.setItem("player2Name", "Computer");
        navigate("/TikTakToe/gamewithcomputer");
      }
    }
  };
  const handleModeSelection = (x) => {
    setMode(x);
    if (x === 2) {
      setplayer2Name("Computer");
    }
  };
  return (
    <div className="MainContainer">
      <img src="logobg.png" style={{ height: "90px" }} />
      <div className="PlayerSelectionContianer">
        <div className="secondMode">
          <input
            type="radio"
            name="gameMode"
            id="ComputerVsPlayer"
            style={{
              height: "20px",
              width: "20px",
              accentColor: "#adefd1ff",
            }}
            onChange={() => {
              handleModeSelection(1);
            }}
          />
          Computer VS Player
        </div>
        <div className="firstMode">
          <input
            type="radio"
            name="gameMode"
            id="PLayerVsPlayer"
            style={{
              height: "20px",
              width: "20px",
              accentColor: "#adefd1ff",
              marginLeft: "30px",
            }}
            onChange={() => {
              handleModeSelection(2);
            }}
          />
          Player VS Player
        </div>
      </div>

      <form
        className="FormContianer"
        onSubmit={(e) => {
          handleStartGame(e);
        }}
      >
        <div className="onlyInputsContainer">
          <div className="InputContainer">
            <label>{Mode === 2 ? "Player1" : "Player Name"}</label>
            <input
              type="text"
              required
              placeholder={
                Mode === 2 ? "Enter the Player 1 Name" : "Enter the Player Name"
              }
              onChange={(e) => {
                setplayer1Name(e.target.value.trim());
              }}
            />
          </div>
          {Mode === 2 && (
            <div className="InputContainer">
              <label>Player 2</label>
              <input
                type="text"
                required
                placeholder="Enter the Player 2 Name"
                onChange={() => {
                  setplayer2Name(event.target.value.trim());
                }}
              />
            </div>
          )}
        </div>

        <div className="buttonContainer">
          <button className="buttons" type="submit">
            Start the Game
          </button>
        </div>
      </form>
    </div>
  );
}

export default MainPage;
