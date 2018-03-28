import React, {Component} from 'react'
import {SimpleContainer} from '../../shared/SimpleContainer'
import {Input} from '../../shared/Input'
import {Text} from '../../shared/Text'
import {Emojis} from '../../shared/Emojis'
import {range} from './utils'

class RandomEmoji extends Component {
  emojis = ['💩', '🎉', '🦄', '🍔', '💅', '⚡️', '🔥', '🤦‍', '🤮', '🤓', '🍆']
  render() {
    const emoji = this.emojis[Math.floor(Math.random() * this.emojis.length)]
    return <Emojis onClick={() => alert('Hello, world!')}>{emoji}</Emojis>
  }
}

export class PureComponents extends Component {
  state = {
    elapsed: 0,
    input: '',
  }

  onChange = ({target: {value}}) =>
    this.setState({
      input: value,
    })

  componentDidMount() {
    setInterval(() => {
      this.setState(state => ({
        elapsed: state.elapsed + 1,
      }))
    }, 10)
  }

  render() {
    return (
      <SimpleContainer>
        <Input
          label="Enter some value"
          value={this.state.input}
          onChange={this.onChange}
        />
        <Text>
          Here's your text in reverse <Emojis>😱</Emojis>
        </Text>
        <Text reversed>{this.state.input}</Text>
        <Text>{this.state.elapsed}</Text>
        {range(5000).map(() => <RandomEmoji />)}
      </SimpleContainer>
    )
  }
}
