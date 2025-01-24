import React from 'react'

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


function task12() {
  return (
    <div>
    <h1>Task 12</h1>
    
    {num.map((index , n) => {
        const isEven = n % 2 === 0 ? "Even" : "Odd";
        return (
            <div key={index}>
                <p>{n} is {isEven}</p>
            </div>
        )
    })}
    
    </div>
  )
}

export default task12