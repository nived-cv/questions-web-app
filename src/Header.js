import react from 'react'
import './Header.css'

const Header = ({setPage}) => {

    function sayHi(){
        console.log("say Hi")
    }


    return(<div className = "header-container">
        <div className='left-items'>
            <h1> Javascript Questions</h1>
        </div>
        <div className = "right-items">
            <p className = "btn" onClick = {()=> setPage("Home")}>Home</p>
            <p className = "btn" onClick = {()=> setPage("Questions")}>Questions</p>
            <p className = "btn" onClick = {()=> setPage("All")}>All</p>
        </div>
    </div>)
}

export default Header