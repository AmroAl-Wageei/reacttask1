import React from 'react'

const lis = ["Student1" , "Student2" , "Student3" , "Student4"];
function task10() {
  return (
    <div>
    <h1>Task 10</h1>
    {lis.map((index , Student ) => {
        return <li key={index} 
        style={{ color : "green" , backgroundColor : "red" , margin : "10px" }}>{Student}</li>
    })}
    
    </div>
  )
}

export default task10