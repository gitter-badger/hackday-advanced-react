import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Title} from '../../../shared/Title'
import {Container} from '../../../shared/Container'

//TODO
// Transform the following HOC to a Render Prop using Children As A Function
const withMouseHOC = WrappedComponent =>
  class extends Component {
    state = {
      x: 0,
      y: 0,
    }

    handleMouse = event => {
      this.setState({
        x: event.clientX,
        y: event.clientY,
      })
    }

    render() {
      return (
        <Container onMouseMove={this.handleMouse}>
          <WrappedComponent {...this.state} />
        </Container>
      )
    }
  }

export class App extends Component {
  static propTypes = {}

  render() {
    const {x, y} = {x: 42, y: 300}
    return (
      <Title>
        The mouse position is ({x}, {y})
      </Title>
    )
  }
}
