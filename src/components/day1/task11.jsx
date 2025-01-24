import React from 'react'

const Numbers = [2 , 3 , 4 , 5];

function task11() {
  return (
    <div>
    <h1>Task 11</h1>
    {Numbers.map(( index , number) => {
      return <h3 key={index}> Original : {number} , Doubled : {number * 2 } </h3>
    })}

      
    </div>
  )
}

export default task11