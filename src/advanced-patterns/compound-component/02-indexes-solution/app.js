import React, {Component} from 'react'
import {Container} from '../../../shared/Container'
import {Title} from '../../../shared/Title'

// By only changing the code of the component ComponentsCounter
// get to the following result: https://i.imgur.com/aJQxZNy.png
const ComponentsCounter = ({children}) => (
  <Container>
    <Title>
      You passed {React.Children.count(children)} element{React.Children.count(
        children
      ) > 1
        ? 's'
        : ''}
    </Title>
    {React.Children.map(children, (el, index) =>
      React.cloneElement(el, {
        index,
      })
    )}
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
