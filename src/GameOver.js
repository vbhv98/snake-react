import React from 'react'

const GameOver = ({score}) => {
  return (
    <center>
      <h1>Game Over</h1>
      <p>Your Score: {score}</p>
    </center>
  )
}

export default GameOver