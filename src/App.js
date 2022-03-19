/* eslint-disable */

import React, { useState, useEffect } from "react"
import CardDisplay from "./CardDisplay"
import _, { set } from 'lodash'
import data from "./data.json"

function App() {  
  const [allCards, setCards] = useState(data)
  const [allClickedCards, setClickedCards] = useState([])
  const [score, setScore] = useState("")
  const [highScore, setHighScore] = useState("")

  const handleClickedCards = (id) => {
    setCards(_.shuffle(allCards))
    const card = allCards.find(card => card.id === Number(id))
    if (allClickedCards.includes(card)) {
      setScore(0)
      highScore < score ? setHighScore(score) : null
      setClickedCards([])
    } else {
      setClickedCards([...allClickedCards, card])
      setScore(Number(score) + 1)
      highScore < score ? setHighScore(score) : setHighScore(highScore) 
    }
  }  

  return (
    <div className="App">
      <CardDisplay score={score} highScore={highScore} allCards={allCards} handleClickedCards={handleClickedCards} /> 
    </div>
  )
}

export default App
