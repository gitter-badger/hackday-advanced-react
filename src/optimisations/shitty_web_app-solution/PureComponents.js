import React, {PureComponent, Component, Fragment} from 'react'
import {SimpleContainer} from '../../shared/SimpleContainer'
import {Input} from '../../shared/Input'
import {Text} from '../../shared/Text'
import {Emojis} from '../../shared/Emojis'
import {range} from './utils'

class RandomEmoji extends PureComponent {
  emojis = ['💩', '🎉', '🦄', '🍔', '💅', '⚡️', '🔥', '🤦‍', '🤮', '🤓', '🍆']
  render() {
    const emoji = this.emojis[Math.floor(Math.random() * this.emojis.length)]
    return <Emojis onClick={() => alert('Hello, world!')}>{emoji}</Emojis>
  }
}

class ReversedText extends PureComponent {
  state = {
    input: '',
  }

  onChange = ({target: {value}}) =>
    this.setState({
      input: value,
    })

  render() {
    return (
      <Fragment>
        <Input
          label="Enter some value"
          value={this.state.input}
          onChange={this.onChange}
        />
        <Text>
          Here's your text in reverse <Emojis>😱</Emojis>
        </Text>
        <Text reversed>{this.state.input}</Text>
      </Fragment>
    )
  }
}

class Counter extends PureComponent {
  state = {
    elapsed: 0,
  }

  componentDidMount() {
    setInterval(() => {
      this.setState(state => ({
        elapsed: state.elapsed + 1,
      }))
    }, 10)
  }

  render() {
    return <Text>{this.state.elapsed}</Text>
  }
}

export class PureComponents extends Component {
  render() {
    return (
      <SimpleContainer>
        <ReversedText />
        <Counter />
        {range(5000).map(i => <RandomEmoji key={i} />)}
      </SimpleContainer>
    )
  }
}
