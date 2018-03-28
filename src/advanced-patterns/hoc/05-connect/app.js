import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {createStore} from 'redux'
import {connect, Provider} from 'react-redux'
import {Container} from '../../../shared/Container'
import {Title} from '../../../shared/Title'
import {Button} from '../../../shared/Button'

const reducer = (state = 0, action = {}) => {
  if (action.type === 'INCREMENT') {
    return state + 1
  }
  if (action.type === 'DECREMENT') {
    return state - 1
  }
  return state
}

const increment = () => ({type: 'INCREMENT'})
const decrement = () => ({type: 'DECREMENT'})

const store = createStore(reducer)

// TODO:
// Remove the connect import above and decomment the code below
// You'll have access to the redux store using this.context.store in the HOC below
// Make it work! 🎉

/**
const connect = (mapState, mapDispatch) => WrappedComponent =>
  class extends Component {
    static contextTypes = {
      store: PropTypes.object
    }

    componentDidMount(){

    }

    render(){
      return <WrappedComponent {...this.props} />
    }
  }
**/

const mapState = counter => ({counter})
const mapDispatch = {
  increment,
  decrement,
}

@connect(mapState, mapDispatch)
class Counter extends Component {
  render() {
    const {increment, decrement, counter} = this.props
    return (
      <Container>
        <Button onClick={increment}>+</Button>
        <Title>Counter value is {counter}</Title>
        <Button secondary onClick={decrement}>
          -
        </Button>
      </Container>
    )
  }
}

export const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
)
