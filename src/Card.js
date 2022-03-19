import React from "react"

const Card = ({ card, handleClickedCards }) => {

  const handleClick = (e) => {
    e.preventDefault()
    let id = e.currentTarget.id
    handleClickedCards(id)
  }

  return (
      <div className="card" id={card.id} onClick={handleClick}> {card.name} </div>
  )
}

export default Card

