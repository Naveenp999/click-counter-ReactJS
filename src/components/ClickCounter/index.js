import './index.css'
import {Component} from 'react'

class ClickCounter extends Component {
  state = {count: 0}

  Increment = () => this.setState(({count}) => ({count: count + 1}))

  render() {
    const p = (
      <div className="container">
        <h1 className="heading">
          The Button has been clicked
          <br />
          <span className="count">{this.state.count}</span> times
        </h1>
        <p className="description">Click the button to increase the count</p>
        <button className="button" onClick={this.Increment}>
          Click me
        </button>
      </div>
    )
    return p
  }
}

export default ClickCounter
