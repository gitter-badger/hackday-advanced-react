import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
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

const connect = (mapState, mapDispatch) => WrappedComponent =>
  class extends Component {
    static contextTypes = {
      store: PropTypes.object,
    }

    state = {
      storeData: null,
    }

    componentDidMount() {
      const {store} = this.context
      const initialState = store.getState()
      this.setState({
        storeData: mapState(initialState),
      })
      store.subscribe(() => {
        this.setState({
          storeData: mapState(store.getState()),
        })
      })
    }

    getActions = mapDispatch => {
      if (typeof mapDispatch === 'function') {
        return mapDispatch(this.context.store.dispatch)
      }
      return Object.keys(mapDispatch).reduce(
        (newMapState, nextKey) => ({
          ...newMapState,
          [nextKey]: () => store.dispatch(mapDispatch[nextKey]()),
        }),
        {}
      )
    }

    render() {
      const {storeData} = this.state
      return (
        <WrappedComponent
          {...this.props}
          {...storeData}
          {...this.getActions(mapDispatch)}
        />
      )
    }
  }

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
