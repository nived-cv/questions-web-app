import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Card from './Card'
import { easyQuestions, mediumQuestions, hardQuestions, toughQuestions} from './all_questions'
import './Questions.css'

const Questions = ({level}) => {

    let [questions,setQuestions] = useState(easyQuestions)
    let popupEl = useRef()
    let msgEl = useRef()

    useEffect(() => {

      level == "Easy" ? setQuestions(easyQuestions): level == "Hard" ? setQuestions(hardQuestions) : level == "Medium" ? setQuestions(mediumQuestions) : setQuestions(toughQuestions)
    },[level])

    const popup = (msg) =>{
      popupEl.current.classList.remove('hidden')
      msgEl.current.innerText = msg;
    }
    const close_popup = () =>{
      popupEl.current.classList.add('hidden')
    }

  return (
    <div className = "questions-container">
        {questions.map((q,idx) => { return <Card key = {idx} onAction = {popup} data = {q}/> })}

        <div className = 'custom-popup hidden' ref = { popupEl }>
          <div className = "message" >
              <button className = 'btn-close' onClick = { close_popup }>
                X</button>
              <p ref = { msgEl }>this is result</p>
          </div>
        </div>
    </div>
  )
}

export default Questions