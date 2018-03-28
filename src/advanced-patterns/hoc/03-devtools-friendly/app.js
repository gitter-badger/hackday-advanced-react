import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Container} from '../../../shared/Container'
import {Title} from '../../../shared/Title'

// TODO 1
// Open your devtools and try to find the withScreenSize HOC in the tree
// What do you see?

// TODO 2
// Make the HOC withScreenSize react devtools friendly using the display name of the component passed to it
// See: https://reactjs.org/docs/higher-order-components.html#convention-wrap-the-display-name-for-easy-debugging

const withScreenSize = WrappedComponent => props => {
  const {height, width} = window.screen
  return <WrappedComponent {...props} height={height} width={width} />
}

@withScreenSize
export class App extends Component {
  static propTypes = {}

  render() {
    const {width, height} = this.props
    return (
      <Container>
        <Title>
          The size of your screen is {width}x{height}
        </Title>
      </Container>
    )
  }
}
