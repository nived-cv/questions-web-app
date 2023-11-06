import React from 'react'
import './Card.css'


const Card = ({data,onAction}) => {

    const showResult = () =>{
        onAction(data.answer)
    }

  return (
    <div className = "card">
        <h3>{data.question}</h3>

        <button onClick = {showResult}> Show Answer</button>
    </div>
  )
}

export default Card