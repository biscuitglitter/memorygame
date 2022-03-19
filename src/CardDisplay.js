import React from "react"
import Card from "./Card"
import Scoreboard from "./Scoreboard"

const CardDisplay = ({ allCards, handleClickedCards, score, highScore}) => {

    return (
    <div className="battle">
     <p className="title">memory 
        <span style={{color:  `hsl(${Math.random() * 360}, 100%, 64%)`}}>g</span><span style={{color:  `hsl(${Math.random() * 360}, 100%, 64%)`}}>a</span><span style={{color:  `hsl(${Math.random() * 360}, 100%, 64%)`}}>m</span><span style={{color:  `hsl(${Math.random() * 360}, 100%, 64%)`}}>e</span></p>
     <div className="cardContainer">
      {allCards.map((card) => {
        return ( 
          <Card card={card} key={card.id + 1} handleClickedCards={handleClickedCards} />  
        )
      })}
        </div>
        <Scoreboard score={score} highScore={highScore} className="scoreboard" />
      </div>

  )
}

export default CardDisplay

