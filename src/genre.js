import React from "react";
import {
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  Button
} from "react-bootstrap";
import Genregallery from "./genregallery";
import "./genre.css";

class Genre extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genre: "",
      quotes: []
    };
  }

  handleChange = event => {
    this.setState({ genre: event.target.value });
  };

  handleSubmit = event => {
    fetch(
      `https://quote-garden.herokuapp.com/api/v2/genre/${
        this.state.genre
      }?page=1&limit=10`
    )
      .then(response => response.json())
      .then(json => {
        // let { quotes } = json;
        this.setState({ quotes: json.quotes });
      });
    event.preventDefault();
  };
  render() {
    console.log(this.state);
    return (
      <div>
        <Form
          onSubmit={this.handleSubmit}
          // onSubmit={this.search}
        >
          <FormGroup>
            <FormLabel>
              Select a genre
              <FormControl
                as="select"
                value={this.state.genre}
                onChange={this.handleChange}
              >
                <option />
                <option value="inspirational">inspirational</option>
                <option value="motivation">motivation</option>
                <option value="love">love</option>
                <option value="sad">sad</option>
                <option value="funny">funny</option>
                <option value="life">life</option>
              </FormControl>
            </FormLabel>
            <Button type="submit" varient="primary" value="submit">
              Submit
            </Button>
          </FormGroup>
        </Form>
        <div className="quotelist">
          <ul>
            {this.state.quotes.map((item, index) => {
              console.log(item);
              return (
                <li key={item.id} className="quotebox">
                  {item.quoteText}
                  <hr />
                  <span>{item.quoteAuthor}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
export default Genre;
