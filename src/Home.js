import React, { useState } from 'react'
import './Home.css'

const Home = ({changeMode}) => {

  let [mode,setMode] = useState('easy')

  return (
    <div className = "home">
        
        <div className = "select-type">
          <div className = "option" onClick = {changeMode}>Easy</div>
          <div className = "option" onClick = {changeMode}>Medium</div>
          <div className = "option" onClick = {changeMode}>Hard</div>
          <div className = "option" onClick = {changeMode}>Tough</div>
        </div>
    </div>
  )
}

export default Home