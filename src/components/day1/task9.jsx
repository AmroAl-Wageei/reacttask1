import React from 'react'

const listOfStudent = ["Student1" , "Student2" , "Student3" , "Student4"];

function task9() {
  return (
    <div>
    <h1>Task 9</h1>
    {listOfStudent.map((index , student) => {
      return <li key={index}>{student}</li>
    })}

    
    </div>
  )
}

export default task9