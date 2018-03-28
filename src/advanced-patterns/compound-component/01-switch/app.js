import React, {Component} from 'react'
import {Switch} from '../../../shared/Switch'
import {Container} from '../../../shared/Container'
import {Emojis} from '../../../shared/Emojis'

const ToggledOn = ({active, children}) => (active ? children : null)

const ToggledOff = ({active, children}) => (active ? null : children)

class SwitchButton extends Component {
  static Switch = Switch
  static On = ToggledOn
  static Off = ToggledOff
  state = {
    on: true,
  }

  toggle = () => {
    this.setState({
      on: !this.state.on,
    })
  }

  render() {
    const {children: rawChildren} = this.props
    const children = React.Children.map(rawChildren, el =>
      React.cloneElement(el, {
        active: this.state.on,
        onSwitchChange: this.toggle,
      })
    )
    return children
  }
}

export class App extends Component {
  static propTypes = {}

  render() {
    return (
      <Container>
        <SwitchButton>
          <SwitchButton.On>
            <Emojis>🎉</Emojis>
          </SwitchButton.On>
          <SwitchButton.Off>
            <Emojis>😱</Emojis>
          </SwitchButton.Off>
          <SwitchButton.Switch />
        </SwitchButton>
      </Container>
    )
  }
}
