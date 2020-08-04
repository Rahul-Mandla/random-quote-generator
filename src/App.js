import React from "react";
import "./styles.css";
import Quotes from "./quote";
import Genre from "./genre";
export default function App() {
  return (
    <div className="App">
      <h2 className="top-heading">
        <q>random quote generator</q>
      </h2>
      <Quotes />
      <Genre />
    </div>
  );
}
