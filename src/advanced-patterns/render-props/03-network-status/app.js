import React, {Component} from 'react'
import {Background} from '../../../shared/Background'
import {Text} from '../../../shared/Text'

// TODO 1:
// Make the following renderProp work
// You need to call the function passed to the render prop
// To test it, open the network tab in your bowser and toggle the offline button
class OnlineStatusProvider extends Component {
  state = {
    onLine: navigator.onLine,
  }

  componentDidMount() {
    window.addEventListener('online', this.online)
    window.addEventListener('offline', this.offline)
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.online)
    window.removeEventListener('offline', this.offline)
  }

  online = () =>
    this.setState({
      onLine: true,
    })

  offline = () =>
    this.setState({
      onLine: false,
    })

  render() {
    return null
  }
}

export class App extends Component {
  static propTypes = {}

  render() {
    const onLine = true
    // TODO 2:
    // Use the render prop <OnlineStatusProvider /> to get network status
    return (
      <Background darkTheme={!onLine}>
        <Text darkTheme={!onLine}>
          {onLine ? "You're online!" : "You're offline!"}
        </Text>
      </Background>
    )
  }
}
