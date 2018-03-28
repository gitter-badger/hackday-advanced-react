import React, {Component} from 'react'

export const incrementFn = state => ({
  value: state.value + 1,
})

export const decrementFn = state => ({
  value: state.value - 1,
})

export class Counter extends Component {
  state = {
    value: this.props.initialValue || 0,
  }

  increment = () => {
    this.setState(incrementFn)
  }

  decrement = () => {
    this.setState(decrementFn)
  }

  render() {
    return (
      <div>
        <button data-testid="increment" onClick={this.increment}>
          +
        </button>
        <span data-testid="counterValue">{this.state.value}</span>
        <button data-testid="decrement" onClick={this.decrement}>
          -
        </button>
      </div>
    )
  }
}
