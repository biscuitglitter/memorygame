import React, { useState } from "react"

function HowToPlay() {
  const [active, setActive] = useState("")

  const handleClick = () => {
    setActive(!active);
  }

  return (
    <div className="howToPlayContainer">
      <div className="howToPlay" onClick={handleClick}>How to play?</div>      
      <div id="informationalSideBar" className={active ? "hidden" : "active"}>
        <p> the words get shuffled everytime they are clicked. you have to make sure you don't click
          on any word more than once or your score resets to zero.  </p></div>
      </div>
      )
}

export default HowToPlay

