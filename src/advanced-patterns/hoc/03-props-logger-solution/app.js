import React, {Component} from 'react'
import {Container} from '../../../shared/Container'
import {Title} from '../../../shared/Title'

// TODO
// Create a HOC to log the props of this component
// Don't forget to proxy the props forward
const propsLogger = WrappedComponent => props => {
  console.log(props)
  return <WrappedComponent {...props} />
}

const _Card = ({firstName, age}) => (
  <Container>
    <Title>
      Hi im {firstName} and im {age}
    </Title>
  </Container>
)

const Card = propsLogger(_Card)

export class App extends Component {
  render() {
    return (
      <div>
        <Card firstName="Antonio" age={22} />
      </div>
    )
  }
}
