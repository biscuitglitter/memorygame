/* eslint-disable */

import React, { useState, useEffect } from "react"
import CardDisplay from "./CardDisplay"
import _ from 'lodash'
import Scoreboard from "./Scoreboard"
import DataFetchRender from "./DataFetchRender"

function App() {  
  const [allCards, setCards] = useState([])
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
      {/* <CardDisplay allCards={allCards} handleClickedCards={handleClickedCards} /> */}
      <DataFetchRender allCards={allCards} setCards={setCards} />
    </div>
  )
}

export default App
