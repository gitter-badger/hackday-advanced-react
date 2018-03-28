import React, {Component} from 'react'
import PropTypes from 'prop-types'

export class CounterRenderProp extends Component {
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
    const {children} = this.props
    const {counter} = this.state
    return children({
      counter,
      decrement: this.decrement,
      increment: this.increment,
    })
  }
}
