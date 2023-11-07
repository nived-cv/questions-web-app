import React, { useState } from 'react'
import './Home.css'

const Home = ({changeMode}) => {

  let [mode,setMode] = useState('easy')

  return (
    <div className = "home">
        
        <div className = "select-type">
          <div className = "option" onClick = {changeMode} id = "Easy">Easy</div>
          <div className = "option" onClick = {changeMode} id = "Medium">Medium</div>
          <div className = "option" onClick = {changeMode} id = "Hard">Hard</div>
          <div className = "option" onClick = {changeMode} id = "Tough">Tough</div>
        </div>
    </div>
  )
}

export default Home