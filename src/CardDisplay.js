import React from "react"
import Card from "./Card"

const CardDisplay = ({ allCards, handleClickedCards, pokemons }) => {

  return (
    <div>
      {allCards.map((card) => {
        return (          
          <Card card={card} pokemons={pokemons} key={card.id + 1} handleClickedCards={handleClickedCards} />  
        )
      })}
    </div>
  )
}

export default CardDisplay
