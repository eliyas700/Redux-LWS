import React from "react";

const State = ({ total }) => {
  console.log(total);
  return (
    <div>
      <h2 className="text-3xl text-center mt-4">
        Total Counted Value is : {total}
      </h2>
    </div>
  );
};

export default State;
