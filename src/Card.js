import React from "react"

const Card = ({ card, handleClickedCards, pokemons }) => {

  const handleClick = (e) => {
    e.preventDefault()
    let id = e.currentTarget.id
    handleClickedCards(id)
  }

  return (
    <div>    
      <div value={card.id} className="card" pokemons={pokemons} id={card.id} onClick={handleClick}>    

      </div>
      </div>
  )
}

export default Card

