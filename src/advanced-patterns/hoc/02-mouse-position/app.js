import React, {Component} from 'react'
import {Container} from '../../../shared/Container'
import {Title} from '../../../shared/Title'

// TODO:
// create a withMousePos HOC that gives you the position of the mouse
export class App extends Component {
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
    const {x, y} = this.state
    return (
      <Container onMouseMove={this.handleMouse}>
        <Title>
          The mouse position is ({x}, {y})
        </Title>
      </Container>
    )
  }
}
