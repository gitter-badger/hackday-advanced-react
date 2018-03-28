import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Title} from '../../../shared/Title'
import {Container} from '../../../shared/Container'

//TODO
// Transform the following HOC to a Render Prop using Children As A Function

class MousePosProvider extends Component {
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
    const {children} = this.props
    return (
      <Container onMouseMove={this.handleMouse}>
        {children(this.state)}
      </Container>
    )
  }
}

export class App extends Component {
  render() {
    return (
      <MousePosProvider>
        {({x, y}) => (
          <Title>
            The mouse position is ({x}, {y})
          </Title>
        )}
      </MousePosProvider>
    )
  }
}
