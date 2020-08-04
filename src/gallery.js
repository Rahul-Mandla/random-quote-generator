import React from "react";

export default function Gallery(props) {
  console.log("gallery", props.quotes);
  return (
    <div>
      <h1>{props.quotes.quoteText}</h1>
    </div>
  );
}
