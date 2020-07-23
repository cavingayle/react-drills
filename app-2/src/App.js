import React, { Component } from 'react'

class App extends Component {
  constructor() {
    super()
    this.state = {
      list: ['chicken','steak','pasta','ice cream']
    }
   }
  render() {
let listDisplay = this.state.list.map((e, i) => <h2 key={i}>{e}</h2>
    )
    return (
      <div>
        {listDisplay}

      </div>
    )
  }
}

export default App