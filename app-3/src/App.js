import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: ["chicken", "steak", "pasta", "ice cream"],
      listString: "",
    };
  }

  handleChange(e) {
    this.setState({
      listString: e.target.value,
    });
  }

  render() {
    let listDisplay = this.state.list
      .filter((e, i) => e.includes(this.state.listString))
      .map((e, i) => <h2 key={i}>{e}</h2>);

    return (
      <div>
        <input onChange={(e) => this.handleChange(e)} />
        {listDisplay}
      </div>
    );
  }
}

export default App;
