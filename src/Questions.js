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
      popupEl.current.style.top = `${window.scrollY - 58}px`
      msgEl.current.innerText = msg;
      if(typeof msg === 'object' && msg.length === undefined){
        let txtmsg =''
        for(let key in msg)
          txtmsg += `${key} : ${msg[key]} , `
        
        msgEl.current.innerText = txtmsg;
    }
  }

    const closePopup = () =>{
      popupEl.current.classList.add('hidden')
    }

    const cards = () => 
      questions.map((q,idx) => { return <Card key = {idx} onAction = {popup} data = {q}/> })
    

  return (
    <div className = "questions-container">
        
    {cards()}
        <div className = 'custom-popup hidden' ref = { popupEl }>
          <div className = "message" >
              <button className = 'btn-close' onClick = { closePopup }>
                X</button>
              <p ref = { msgEl }>this is result</p>
          </div>
        </div>
    </div>
  )
}

export default Questions