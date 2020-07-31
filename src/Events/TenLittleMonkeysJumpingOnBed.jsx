// 1. Create a Functional Component called TenLittleMonkeys
// 2. Use useState to set the initial Monkey Count to 10
// 3. Display how many monkeys are left in a sentece that says the following...
// 10 little monkeys jumping on the bed one fell off and hit his head. Mama called the doctor and the doctor said. No more monkeys jumping on the bed!
// 4. Once the count gets to zero display "All the Monkeys fell off"
// 5. Button clicking should take 1 away from the total monkey counter

//React doesn't like if statements
import React, { useState, Fragment } from "react";

const TenLittleMonkeys = () => {
  const [monkeyCount, setMonkeyCount] = useState(10);
  const [left, setLeft] = useState("");
  function handleClick() {
    console.log("How many monkeys are fell off");
    setMonkeyCount(monkeyCount - 1);
  }
  function resetClick() {
    console.log("Reset");
    setMonkeyCount(10);
  }
  function displayMonkeyCount() {
    return monkeyCount === 0 ? (
      <p>All the monkeys fell off!</p>
    ) : (
      <p>
        {" "}
        {monkeyCount} little monkeys jumping on the bed one fell off and hit his
        head. Mama called the doctor and the doctor said. No more monkeys
        jumping on the bed!
      </p>
    );
  }
  return (
    <Fragment>
      <input type="text" onChange={(e) => setLeft(e.target.value)} />
      <br />
      {monkeyCount > 0 ? (
        <button onClick={handleClick}>
          Click to check how many monkeys are left
        </button>
      ) : (
        <button onClick={resetClick}>Reset</button>
      )}
      {displayMonkeyCount()}
    </Fragment>
  );
};
export default TenLittleMonkeys;
