import React from "react";

const State = ({ total }) => {
  console.log(total);
  return (
    <div>
      <h2>Total Counted Value is : {total}</h2>
    </div>
  );
};

export default State;
