import React, {Component} from 'react'
import {Container} from '../../../shared/Container'
import {Input} from '../../../shared/Input'
import {Button} from '../../../shared/Button'
import {Emojis} from '../../../shared/Emojis'

const initialState = {
  controlled: '',
  uncontrolled: '',
  locked: false,
}

export class App extends Component {
  static propTypes = {}

  state = initialState

  onChange = ({target: {name, value}}) =>
    this.setState(
      state =>
        state.locked
          ? state
          : {
              [name]: value,
            }
    )

  lock = () =>
    this.setState(state => ({
      locked: !state.locked,
    }))

  reset = () => this.setState(initialState)

  render() {
    return (
      <Container>
        <Input
          placeholder="Uncontrolled text input"
          onChange={this.onChange}
          name="uncontrolled"
          label={'Uncontrolled'}
        />
        <Input
          placeholder="Controlled text input"
          onChange={this.onChange}
          name="controlled"
          label={'Controlled'}
          value={this.state.controlled}
        />

        <pre>{JSON.stringify(this.state, null, 2)}</pre>

        <Button onClick={this.reset}>Reset state</Button>

        <Button secondary onClick={this.lock}>
          {this.state.locked ? 'Unlock' : 'Lock'} state{' '}
          <Emojis>{this.state.locked ? '🔐' : '🔒'}</Emojis>
        </Button>
      </Container>
    )
  }
}
