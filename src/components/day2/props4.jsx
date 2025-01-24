// UserInfo.js
import React from 'react';

function Props4({ username, email, age }) {
  return (
    <div>
      <h2>User Information</h2>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
      <p>Age: {age}</p>
    </div>
  );
}

export default Props4;

// <Props4 username="jane_doe" email="jane@example.com" age={30} />

