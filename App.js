import React from "react"
import Navbar from "/Components/Navbar.js"
import Card from "/Components/Card.js"
import data from "/data.js"

export default function App() {
    const cards = data.map(item => {
        return(
            <Card
                key={item.id}
                {...item}
            />
        )
    })
    
    return(
        <div>
            <Navbar />
            {cards} 
        </div>
    )
}

