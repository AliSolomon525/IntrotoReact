import React, { useState, Fragment } from "react";

//usf = creates new useState variabel

const ClickCounter = () => {
  const [clickCount, setClickCount] = useState(0); //when the page loads we want the click count to be 0
  const [name, setName] = useState("");

  function handleClick() {
    console.log("I was clicked");
    setClickCount(clickCount + 1); //take whatever the current value of clickcount is and add 1
  }
  //e is shorthand for events
  return (
    <Fragment>
      <input type="text" onChange={(events) => setName(events.target.value)} />
      <br />
      <button onClick={handleClick}>Click Me</button>
      <p>Clicked {clickCount} times</p>
      <p>
        {name} clicked {clickCount} times
      </p>
    </Fragment>
  );
};

export default ClickCounter;
