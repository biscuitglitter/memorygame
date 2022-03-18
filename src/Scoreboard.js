import React from "react"

const Scoreboard = ({ score }) => {

  return (
    <div className="scoreboard">    
       score: {score} 
    </div>
  )
}

export default Scoreboard


// return (
//     <div>    
//     <div value={card.id} className="card" id={card.id} key={card.cardtitle} name="card" onClick={handleClick}>
//       card: {card.name}
//       </div>
//       </div>
//   )