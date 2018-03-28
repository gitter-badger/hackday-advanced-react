import React, {Component} from 'react'
import {Emojis} from '../../../shared/Emojis'
import {Container} from '../../../shared/Container'
import {Title} from '../../../shared/Title'

const emojis = ['💩', '🎉', '🦄', '🍔', '💅', '⚡️', '🔥', '🤦‍']

// TODO:
// Call the render function with a random emoji from the array above 🤓
const RandomEmoji = ({render}) =>
  render(emojis[Math.floor(Math.random() * emojis.length)])

export class App extends Component {
  static propTypes = {}

  render() {
    return (
      <Container>
        <Title>Here, have a free, random emoji</Title>
        <RandomEmoji render={emoji => <Emojis>{emoji}</Emojis>} />
      </Container>
    )
  }
}
