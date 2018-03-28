import React, {Component} from 'react'
import {Container} from '../../../shared/Container'
import {Title} from '../../../shared/Title'
import {getDisplayName} from '../../../utils/utils'

// TODO
// Write the propsMapper HOC to make the following code work
const propsMapper = config => WrappedComponent =>
  class extends Component {
    static displayName = getDisplayName('propsMapper', WrappedComponent)

    getNewProps = () => {
      return Object.keys(config).reduce(
        (newProps, nextKey) => ({
          ...newProps,
          [config[nextKey] ? config[nextKey] : nextKey]: this.props[nextKey],
        }),
        {}
      )
    }

    render() {
      const newProps = this.getNewProps()
      console.log(newProps)
      return <WrappedComponent {...newProps} />
    }
  }
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
