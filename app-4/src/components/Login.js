import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
    };

    this.clickAlert = this.clickAlert.bind(this);
  }

  handlePass(val) {
    this.setState({
      password: val,
    });
  }

  handleUser(val) {
    this.setState({
      username: val,
    });
  }

  clickAlert() {
    alert(`Username:${this.state.username} Password: ${this.state.password}`);
  }

  render() {
    return (
      <div>
        <input
          placeholder="Username"
          onChange={(e) => this.handleUser(e.target.value)}
          type="text"
        />
        <input
          placeholder="Password"
          onChange={(e) => this.handlePass(e.target.value)}
          type="text"
        />
        <button onClick={this.clickAlert}>Login</button>
      </div>
    );
  }
}
