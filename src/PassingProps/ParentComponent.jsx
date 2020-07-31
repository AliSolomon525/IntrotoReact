//
import React from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const votes = [
    { name: "Abe Lincoln", count: 139033 },
    { name: "Stephen Douglas", count: 11564 },
  ];
  return (
    <div>
      This is the ParentComponent
      {votes.map((vote) => (
        <ChildComponent name={vote.name} count={vote.count} />
      ))}
    </div>
  );
};

export default ParentComponent;
