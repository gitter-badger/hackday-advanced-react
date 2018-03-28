import React, {Component} from 'react'
import {Emojis} from '../../../shared/Emojis'
import {Container} from '../../../shared/Container'
import {Title} from '../../../shared/Title'

const emojis = ['💩', '🎉', '🦄', '🍔', '💅', '⚡️', '🔥', '🤦‍']

// TODO:
// Call the render function with a random emoji from the array above 🤓
const RandomEmoji = () => null

export class App extends Component {
  static propTypes = {}

  render() {
    return (
      <Container>
        <Title>Here, have a free, random emoji</Title>
        {/** Pass a function to the render prop that renders an emoji inside the <Emojis /> component **/}
        <RandomEmoji />
      </Container>
    )
  }
}
