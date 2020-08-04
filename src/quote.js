import React from "react";
import Gallery from "./gallery";
import "./quote.css";

class Quotes extends React.Component {
  constructor() {
    super();
    this.state = {
      quotes: []
    };
  }

  async quote() {
    // const url = "https://quote-garden.herokuapp.com/api/v2/quotes?page=1&limit=10";
    const url = "https://quote-garden.herokuapp.com/api/v2/quotes/random";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    this.setState({ quotes: data.quote });
  }
  componentDidMount() {
    this.quote();
  }

  // search() {
  //   // const url = "https://quote-garden.herokuapp.com/api/v2/quotes?page=1&limit=10";
  //   const url = "https://quote-garden.herokuapp.com/api/v2/quotes/random";
  //   fetch(url)
  //     .then(response => response.json())

  //     .then(data => {
  //       this.setState({ quotes: data.quote });
  //     });
  //   // console.log(data.quotes))
  // }

  reload() {
    // window.location.reload()
  }
  render() {
    console.log(this.state);
    return (
      <div className="conatainer">
        {/* <div className="quoteBox"> */}
        <div className="quote">
          <q>{this.state.quotes.quoteText}</q>
          <hr />
          <div className="author">
            <p>{this.state.quotes.quoteAuthor}</p>
          </div>
        </div>
        {/* </div> */}
        <button
          className="new-btn"
          // onClick={() => window.location.reload(false)}
          onClick={() => this.quote()}
        >
          Get New
        </button>
        {/* <button onClick={this.reload()}>Get New</button>
         */}

        {/* <button onClick={() => this.search()}>Get New</button> */}
        {/* <Gallery quotes ={this.state.quotes}/> */}
      </div>
    );
  }
}
export default Quotes;
