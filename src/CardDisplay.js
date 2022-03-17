import React from "react"
import Card from "./Card"

const CardDisplay = ({ allCards, handleClickedCard}) => {

  return (
    <div>
      {allCards.map((card) => {
        return (
            <Card card={card} key={card.id + 1} handleClickedCard={handleClickedCard}  />
        )
      })}
    </div>
  )
}

export default CardDisplay
