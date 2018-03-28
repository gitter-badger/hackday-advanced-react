import React, {Component, Fragment} from 'react'
import {Container} from '../../../shared/Container'
import {Button} from '../../../shared/Button'
import {Title} from '../../../shared/Title'

// TODO:
// Give to the client the following things
// - action: a function that when called for the first time, changes the state of confirmed to true and when called again executes props.action
// - cancel: a function that sets confirmed to false
// - confirmed: a bool that tells the children if the "process" started (ie: the user started the action)
class Confirm extends Component {
  state = {
    comfirmed: false,
  }

  action = () => {
    if (this.state.comfirmed) {
      this.setState({
        comfirmed: false,
      })
      return this.props.action()
    }
    this.setState({
      comfirmed: true,
    })
  }

  cancel = () => {
    this.setState({
      comfirmed: false,
    })
  }

  render() {
    const {action, cancel} = this
    const {comfirmed} = this.state
    const {children} = this.props
    return children({
      comfirmed,
      action,
      cancel,
    })
  }
}

export const App = () => (
  <Container>
    <Confirm action={() => alert('Hello, world!')}>
      {({comfirmed, action, cancel}) =>
        comfirmed ? (
          <Fragment>
            <Title>Are you sure you want to receive an alert?</Title>
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
