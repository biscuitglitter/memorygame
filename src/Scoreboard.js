import React, { useState, useEffect } from "react"

const Scoreboard = ({ score, highScore }) => {
  const [winMessage, setWinMessage] = useState("")

  useEffect(() => {
  if (highScore > 5) {
        setWinMessage("you win!")
       }
  }, [highScore]);

  return (
    <div className="score">    
      Score: {score} 
      <div className="highscore">Highscore: {highScore}</div>
      {/* <p className="winMessage">{winMessage}</p>  */}
    </div>
  )
}

export default Scoreboard
