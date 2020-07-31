import React, { useState, useEffect } from "react";
import CardMorty from "./CardMorty";
import { CardColumns } from "reactstrap";

const ParentMorty = () => {
  const fetchURL = "https://rickandmortyapi.com/api/character/";
  const [results, setResults] = useState([]);

  useEffect(() => {
    handleClick();
  }, []); //keep the brackets in there! otherwise it loops over and over in console
  //empty brackets means that once page is done loading, just do the handleClick function one time

  function handleClick() {
    fetch(fetchURL)
      .then((res) => res.json())
      .then((jsonData) => {
        console.log(jsonData.results); //calling the .results just gets you the results in dev tools console, not info
        setResults(jsonData.results); //how you get the results from the fetch
      });
  }

  function displayCards() {
    return results.map((result, index) => (
      <CardMorty key={index} character={result} />
    )); //.map loops through the array
  } //pass all the data through the child rather than listing them out

  return (
    <div>
      {/* <button onClick={handleClick}>Click Here!</button> */}
      <CardColumns>{displayCards()}</CardColumns>
    </div>
  );
};

export default ParentMorty;
