import React, { useState } from 'react';

function InputTracker() {
  // Initialize state for user input
  const [inputValue, setInputValue] = useState('');

  // Function to handle input changes
  const handleChange = (e) => setInputValue(e.target.value);

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <p>You typed: {inputValue}</p>
    </div>
  );
}

export default InputTracker;
