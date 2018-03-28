import React, {Component} from 'react'
import {Container} from '../../../shared/Container'
import {Title} from '../../../shared/Title'
import {Emojis} from '../../../shared/Emojis'

export class App extends Component {
  static propTypes = {}

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
    return ready ? (
      <Container>
        <Title>
          Your first Higher order! <Emojis>🎉</Emojis>
        </Title>
      </Container>
    ) : (
      <h1>Loading...</h1>
    )
  }
}
