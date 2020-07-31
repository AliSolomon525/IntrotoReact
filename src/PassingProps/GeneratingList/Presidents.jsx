//

//PARENT

//Using props and .map() pass the props from parent to child and display the president's first name
import React from "react";
import presidentsArray from "./PresidentsArray";
import President from "./President";

const Presidents = () => {
  return (
    <div>
      {presidentsArray.map((president) => (
        <President name={president.first} last={president.last} />
      ))}
    </div>
  );
};

export default Presidents;
