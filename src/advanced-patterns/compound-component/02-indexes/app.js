import React, {Component} from 'react'
import {Container} from '../../../shared/Container'
import {Title} from '../../../shared/Title'

// By only changing the code of the component ComponentsCounter
// get to the following result: https://i.imgur.com/aJQxZNy.png
const ComponentsCounter = ({children}) => (
  <Container>
    <Title>You passed 0 element</Title>
    {children}
  </Container>
)

const Element = ({index}) => <Title small>Im the element number {index}</Title>

export class App extends Component {
  static propTypes = {}

  render() {
    return (
      <ComponentsCounter>
        <Element />
        <Element />
        <Element />
        <Element />
        <Element />
        <Element />
      </ComponentsCounter>
    )
  }
}
