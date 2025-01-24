import React from 'react'

const style = { color: 'green' , fontStyle: 'italic' , fontWeight: 'bold' };
const styleH1 = { color: 'green' , fontStyle: 'italic' , fontWeight: 'bold' };
const styleP = { color: 'green' , fontStyle: 'italic' , fontWeight: 'bold' };


export default function task5() {
  return (
    <div style={style}>
    <h1 style={styleH1}> This is heading </h1>
    <p style={styleP}> This is paragraph </p>
    </div>
  )
}
