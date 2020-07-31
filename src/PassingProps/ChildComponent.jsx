//
import React from "react";

const ChildComponent = (props) => {
  return (
    <div>
      {props.name} had {props.count} votes
    </div>
  );
};

export default ChildComponent;
