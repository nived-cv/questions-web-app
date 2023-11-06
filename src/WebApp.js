
import React, { useState } from 'react'
import Header from "./Header"
import ContentScreen from './ContentScreen'


const WebApp = () => {

    const [page,setPage] = useState("Home")

    return (<div className = "WebApp">

        <Header setPage = {setPage} />
        <ContentScreen page = {page} setPage = {setPage}/>

    </div>)
}

export default WebApp