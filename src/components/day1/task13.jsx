import React from 'react'
import '../css/task13.css'


import StyleJson from '../json/task13.json'

function task13() {
  return (
     <div className="task13">
      <div className="card-container">
        {StyleJson.map((card) => 
          <div  className="card">
            <h2>{card.title}</h2>
            <p>{card.description}</p>
            <img src={card.image} alt={card.title} />
          </div> )}

        </div>
    </div>
  )
}

export default task13

