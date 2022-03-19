import React from "react"

const Scoreboard = ({ score, highScore }) => {

  return (
    <div className="score">    
      Score {score} 
      <div>Highscore {highScore}</div>
    </div>
  )
}

export default Scoreboard

