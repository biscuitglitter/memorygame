/* eslint-disable */

import React, { useState, useEffect } from "react"
import data from "./data.json"
import CardDisplay from "./CardDisplay"
import _ from 'lodash'
import Scoreboard from "./Scoreboard"
import PokemonAPI from "./PokemonAPI"

function App() {
  
  const [allCards, setCards] = useState(data)
  const [allClickedCards, setClickedCards] = useState([])
  const [score, setScore] = useState("")
 
  const handleClickedCards = (id) => {
    setCards(_.shuffle(allCards))
    const card = allCards.find(card => card.id === Number(id))
    if (allClickedCards.includes(card)) {
      console.log("GAME OVER")
      setScore(0)
      setClickedCards([])
    } else {
      setClickedCards([...allClickedCards, card])
      setScore(Number(score) + 1)
    }
  }
 
  return (
    <div className="App">
      <Scoreboard score={score} />
      <CardDisplay allCards={allCards} handleClickedCards={handleClickedCards} />
      <PokemonAPI />
    </div>
  )
}

export default App

