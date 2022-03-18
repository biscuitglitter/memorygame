import React from "react"
import Card from "./Card"

const CardDisplay = ({ allCards, handleClickedCards, pokemons }) => {

  return (
    <div>
      {allCards.map((card) => {
        return (          
          <Card card={card} pokemons={pokemons} key={card.id + 1} handleClickedCards={handleClickedCards} />  
        )
      })}
    </div>
  )
}

export default CardDisplay

// return (
//   <div>
//     {allJobs.map((job) => {
//       return (
//         <JobComponent job={job} key={job.id + 1} handleToggle={handleToggle} handleFilter={handleFilter} />
//       )
//     })}

//     <button style={{ margin: "20px" }} onClick={handleFilter}> Liked only </button>
//   </div>
// )