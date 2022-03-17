import React from "react"

const Card = ({ card, handleClickedCard }) => {

  const handleClick = (e) => {
    e.preventDefault()
    let id = e.currentTarget.id
    handleClickedCard(id)
  }

  return (
    <div value={card.id} className="card" id={card.id} 
    key={card.cardtitle} name="card" onClick={handleClick}>
      card: {card.name}
    </div>
  )
}

export default Card
