import React, { useState } from 'react';

function ShowHideText() {
  // Initialize visibility state

  
  const [isVisible, setIsVisible] = useState(false);

  // Toggle visibility function
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div>
      <button onClick={toggleVisibility}>Show/Hide Text</button> 
      
      
      {isVisible && <p>This is some hidden text!</p>}
      


    </div>
  );
}

export default ShowHideText;
// <ShowHideText />
// {isVisible ? <p>This is some hidden text!</p> : null}
