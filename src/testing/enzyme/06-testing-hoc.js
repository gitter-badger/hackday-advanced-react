import React, {Component} from 'react'
import PropTypes from 'prop-types'

export const CounterHOC = WrappedComponent =>
  class CounterComponent extends Component {
    state = {
      counter: 0,
    }

    increment = () =>
      this.setState(state => ({
        counter: state.counter + 1,
      }))

    decrement = () =>
      this.setState(state => ({
        counter: state.counter - 1,
      }))

    render() {
      return (
        <WrappedComponent
          counter={this.state.counter}
          increment={this.increment}
          decrement={this.decrement}
        />
      )
    }
  }
