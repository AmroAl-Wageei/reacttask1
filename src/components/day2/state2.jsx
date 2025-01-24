import React, { useState } from 'react';

function ToggleTheme() {
  // Initialize theme state with useState hook
  const [isDark, setIsDark] = useState(false);

  // Toggle theme function
  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div style={{ background: isDark ? 'black' : 'white', color: isDark ? 'white' : 'black' }}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>The current theme is {isDark ? 'Dark' : 'Light'}</p>
    </div>
  );
}

export default ToggleTheme;
