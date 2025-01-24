import React from 'react'

const isSuccess=true;

export default function task7() {
  return (
    <div>
    
    {
        isSuccess ? (<p> Success!</p>) : (<p> "Error!"</p>)
    }
    
    </div>
  )
}
