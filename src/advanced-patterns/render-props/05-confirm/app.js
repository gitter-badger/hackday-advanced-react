import React, {Component, Fragment} from 'react'
import {Container} from '../../../shared/Container'
import {Button} from '../../../shared/Button'
import {Title} from '../../../shared/Title'

// TODO:
// Write a render prop that takes makes the code below work
class Confirm extends Component {
  render() {
    return this.props.children()
  }
}

export const App = () => (
  <Container>
    <Confirm action={() => alert('Hello, world!')}>
      {({confirmed, action, cancel}) =>
        confirmed ? (
          <Fragment>
            <Title>Are you sure you wanna do that?</Title>
            <Button onClick={action}>Yes 🎉</Button>
            <Button secondary onClick={cancel}>
              No ...
            </Button>
          </Fragment>
        ) : (
          <Button onClick={action}>Send me an alert!</Button>
        )
      }
    </Confirm>
  </Container>
)
