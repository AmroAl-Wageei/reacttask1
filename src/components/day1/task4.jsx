import React from 'react'

const styleH1 = { color: 'green' };
const stylebold = { color: 'orange' , fontWeight: 'bold' };
const stylespan = { color: 'red' , fontStyle: 'italic' };
export default function task3() {
  return (
    <div>
    <p style={{ color: 'green' }}> Orange <span style={{ color: 'orange' , fontWeight: 'bold' }}> Coding </span> <span style={{ color: 'red' , fontStyle: 'italic' }}> Academy</span> </p>
    
    </div>
  )
}
