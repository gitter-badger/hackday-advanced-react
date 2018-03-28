import React, {Component} from 'react'
import {Container} from '../../../shared/Container'
import {Title} from '../../../shared/Title'
import {Emojis} from '../../../shared/Emojis'

const hide2Seconds = WrappedComponent =>
  class extends Component {
    state = {
      ready: false,
    }

    componentDidMount() {
      setTimeout(() => {
        this.setState({
          ready: true,
        })
      }, 2000)
    }

    render() {
      const {ready} = this.state
      return ready ? <WrappedComponent /> : <h1>Loading...</h1>
    }
  }

@hide2Seconds
export class App extends Component {
  render() {
    return (
      <Container>
        <Title>
          Your first Higher order! <Emojis>🎉</Emojis>
        </Title>
      </Container>
    )
  }
}
