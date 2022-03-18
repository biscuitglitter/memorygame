import React, { useState, useEffect } from "react"
import axios from 'axios'

const DataFetchRender = ({ setCards, allCards }) => {

    useEffect(() => {
        axios.get("https://api.unsplash.com/search/photos/?client_id=PNgJXTnPK3ZXOLGtSwPWvTZOL-vLxLlgQTM2i8QwH7E&query=flower")
            .then(res => {
                for (let i = 0; i < 7; i++) {
                  setCards(res.data.results[i])
                  console.log(res.data.results[i])
                }
            })
            .catch(err => {
             console.log(err)
        })
    }, [])
    
  return (
    <div>
    {allCards.map((card) => {
      return (
        <div>{card.id}</div>
      )
    })}
  </div>
  )
}

export default DataFetchRender

