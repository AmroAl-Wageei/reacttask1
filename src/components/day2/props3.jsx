// ProductCard.js
import React from 'react';

function Props3({ productName, price, description }) {
  return (
    <div>
        <h1> Product Details </h1>
        <div style={{ border: '1px solid #ccc', padding: '16px', width: '200px' , backgroundColor : "orange" }}>
        <h3>{productName}</h3>
        <p>Price: ${price}</p>
        <p>{description}</p>
        </div>
    </div>
  );
}

export default Props3;

// <Props3 productName="Laptop" price={999} description="A powerful laptop for work and play." />
