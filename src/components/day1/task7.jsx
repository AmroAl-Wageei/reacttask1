import React from 'react'

const isLogged = true;







export default function task7() {
  return (
    <div>
    {
        isLogged ? <p> You are Login</p> : <p> You are not Login</p>
    }

    
    </div>
  )
}

