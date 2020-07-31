//
import React from "react";

const DisplayingVariables = () => {
  const movieCharacter = {
    name: "Han Solo",
    job: "pilot",
    bestFriend: "Chewie",
  };

  const { name, job, bestFriend } = movieCharacter; //this allows you to destructure the object and pull variables/keys out to use below so you don't have to put movieCharacter.pilot, etc.

  return (
    <div>
      <p>
        This is a story about {name} and he was a {job} for 12 years. One of his
        best friends in the story is {bestFriend}.
      </p>
    </div>
  );
};

export default DisplayingVariables;

//DisplayingVariables is a component
