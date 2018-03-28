import React, {Component} from 'react'
import {Container} from '../../../shared/Container'
import {Title} from '../../../shared/Title'

// TODO
// Write the propsMapper HOC to make the following code work

const _Card = ({name, yearsOfLife}) => (
  <Container>
    <Title>
      Hi im {name} and im {yearsOfLife}
    </Title>
  </Container>
)

const Card = propsMapper({
  firstName: 'name',
  age: 'yearsOfLife',
})(_Card)

export class App extends Component {
  render() {
    return (
      <div>
        <Card firstName="Antonio" age={22} />
      </div>
    )
  }
}
