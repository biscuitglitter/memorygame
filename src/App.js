/* eslint-disable */

import React, { useState, useEffect } from "react"
import data from "./data.json"
import CardDisplay from "./CardDisplay"

function App() {
  const [allCards, setCards] = useState(data)
  const [clickedCard, setClickedCard] = useState({})


  const handleClickedCard = (id) => {
   allCards.map((card) => {
     if (card.id === Number(id)) {
       setClickedCard(card)
       console.log(clickedCard)
     }
   }
   )
  }

 
  return (
    <div className="App">
      <CardDisplay allCards={allCards} handleClickedCard={handleClickedCard} />
    </div>
  )
}

export default App

