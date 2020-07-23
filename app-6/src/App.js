import React, { Component } from "react";
import Todo from "./component/Todo";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      todos: [],
      input: "",
    };

    this.handleUpdateTodos = this.handleUpdateTodos.bind(this);
  }

  handleInputChange(value) {
    this.setState({
      input: value,
    });
  }

  handleUpdateTodos() {
    this.setState({
      todos: [...this.state.todos, this.state.input],
      input: "",
    });
  }

  delTodo(ind, e) {
    let todosList = [...this.state.todos]
    todosList.splice(ind, 1)
   this.setState({
      todos: todosList
    });
  }

  render() {
    let list = this.state.todos.map((e, i, a) => (
      <Todo delTodo={() => this.delTodo(i)} key={i} task={e} list={a} />
    ));

    return (
      <div>
        <h1>Cavin's Todo List</h1>
        <input
          value={this.state.input}
          onChange={(e) => this.handleInputChange(e.target.value)}
          type="text"
          placeholder="Enter New Task"
        />
        <button onClick={this.handleUpdateTodos}>Add</button>
        {list}
      </div>
    );
  }
}
