import React from "react";
import Heading from "./Heading";
import List from "./List";
import "./textStyle.css"

function Main() {
  return (
    <div className="content">

      <Heading />
      <List />
      <button className="btn-giveTest">Give Test</button>
    
    </div>
  );
}

export default Main;
