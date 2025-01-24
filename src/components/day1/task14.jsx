import React from "react";
import { toast } from "react-toastify";  

const task14 = () => {
  const handleClick = () => {
    toast("hhhhhhhhhhhh");
  };

  return (
    <div>
      <button onClick={handleClick}>Notify from Component!</button>
    </div>
  );
};

export default task14;

// react-toastify