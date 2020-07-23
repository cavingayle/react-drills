import React, { Component } from "react";
import Image from "./components/Image";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      source:
        "https://upload.wikimedia.org/wikipedia/en/9/99/YYK_protagonists.jpg",
    };
  }
  render() {
    return (
      <div>
        <Image source={this.state.source} />
      </div>
    );
  }
}
