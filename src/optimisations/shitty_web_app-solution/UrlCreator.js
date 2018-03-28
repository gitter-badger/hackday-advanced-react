import React, {Component} from 'react'
import slug from 'slug'
import {Container} from '../../shared/Container'
import {Input} from '../../shared/Input'
import {Text} from '../../shared/Text'

export class UrlCreator extends Component {
  state = {
    input: '',
  }

  onChange = ({target: {value}}) => this.setState({input: value})

  render() {
    return (
      <Container>
        <Input
          value={this.state.input}
          onChange={this.onChange}
          label={"Enter a value here and we'll make it URL safe 🎉"}
        />
        <Text>{slug(this.state.input)}</Text>
      </Container>
    )
  }
}
