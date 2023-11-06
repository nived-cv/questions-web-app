import React, { useEffect, useState } from "react"
import Home from "./Home"
import All from "./All"
import Questions from "./Questions"

const ContentScreen = ({page,setPage}) => {

    let [level,setLevel] = useState("Easy")

    const sayhi = (e) =>{
        let value = e.target.innerText
        setLevel(value)
        setPage("Questions")
    }

        switch(page){

            case 'Home' : return <Home className = "screens" changeMode = {sayhi}/>
            case 'All'  : return <All />
            case 'Questions'  : return <Questions level = {level}/>

            default : return <Home />
        }
}

export default ContentScreen