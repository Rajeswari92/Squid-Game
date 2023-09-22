import React, { useState } from "react";
import RegistrationForm from "./components/RegistrationForm";
import GameOver from "./components/GameOver";
import GameWin from "./components/GameWin";
import GameBox from "./components/GameBox";
import "./App.css";
const App = () => {
  const [user, setUser] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [gameWin, setGameWin] = useState(false);
  const [score, setScore] = useState(0);

  const startGame = (userData) => {
    setUser(userData);
    setGameStarted(true);
    setTimeout(() => {
      if (!gameOver && score < userData.n) {
        setGameOver(true);
      }
    }, userData.y * 1000);
  };

  const handleGreenClick = () => {
    if (!gameOver) {
      setScore(score + 1);
      if (score + 1 === user.n) {
        setGameWin(true);
      }
    }
  };

  const handleRedClick = () => {
    if (!gameOver) {
      setGameOver(true);
    }
  };
  return (
    <div className="App">
      {!user && <RegistrationForm startGame={startGame} />}

      {gameStarted && !gameOver && !gameWin && (
        <GameBox onGreenClick={handleGreenClick} onRedClick={handleRedClick} />
      )}
      {gameOver && <GameOver />}
      {gameWin && <GameWin />}
    </div>
  );
};

export default App;
