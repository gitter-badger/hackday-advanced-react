import React, {Component} from 'react'
import {Container} from '../../../shared/Container'
import {Title} from '../../../shared/Title'

// TODO
// Create a HOC to log the props of this component
// Don't forget to proxy the props forward
const Card = ({firstName, age}) => (
  <Container>
    <Title>
      Hi im {firstName} and im {age}
    </Title>
  </Container>
)

export class App extends Component {
  render() {
    return (
      <div>
        <Card firstName="Antonio" age={22} />
      </div>
    )
  }
}
