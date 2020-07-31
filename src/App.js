import React from "react";
// import DisplayingVariables from ">/DisplayingVariables/DisplayingVariables";
import ParentComponent from "./PassingProps/ParentComponent"; //you have to import each one to make it display
import Presidents from "./PassingProps/GeneratingList/Presidents";
import ClickCounter from "./Events/ClickCounter";
import ParentMorty from "./Fetching/ParentMorty";
import Navbar from "./GenericLoginSignup/NavBar/Navbar";
import Auth from "./GenericLoginSignup/Auth/Auth";
// import TenLittleMonkeys from "./Events/TenLittleMonkeysJumpingOnBed";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <Navbar />
      <Auth />
    </div>
  );
}

export default App;

//2 elements have to be wrapped in the same div (like 2 p tags)
//or 2 <> </>
//or <Fragment> </Fragment> - doesn't show up when you inspect in browser
