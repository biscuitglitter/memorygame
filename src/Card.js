import React from "react"

const Card = ({ card, handleClickedCards, pokemons }) => {

  const handleClick = (e) => {
    e.preventDefault()
    let id = e.currentTarget.id
    handleClickedCards(id)
  }

  return (
    <div>    
    <div value={card.id} className="card" id={card.id} key={card.cardtitle} name="card" onClick={handleClick}>
      card: {card.name}
      </div>
      </div>
  )
}

export default Card
