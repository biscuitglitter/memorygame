/* eslint-disable */

import React, { useState, useEffect } from "react"
import CardDisplay from "./CardDisplay"
import _ from 'lodash'
import data from "./data.json"

function App() {  
  const [allCards, setCards] = useState(data)
  const [allClickedCards, setClickedCards] = useState([])
  const [score, setScore] = useState("")
  const [highScore, setHighScore] = useState("")

  const handleClickedCards = (id) => {
    setCards(_.shuffle(allCards))
    if (score > highScore) {
      setHighScore(score)
    } else if (highScore > score) {
      setHighScore(highScore)
    } 
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
      <CardDisplay score={score} highScore={highScore} allCards={allCards} handleClickedCards={handleClickedCards} /> 
    </div>
  )
}

export default App
