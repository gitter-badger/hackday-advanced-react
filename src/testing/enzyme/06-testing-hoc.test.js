import React from 'react'
import {CounterHOC} from './06-testing-hoc'
import {mount} from 'enzyme'
import {sel} from '../testUtils'

const MockComponent = ({counter, increment, decrement}) => (
  <div>
    <button data-testid="incrementAction" onClick={increment}>
      +
    </button>
    <p data-testid="counterValue">{counter}</p>
    <button data-testid="decrementAction" onClick={decrement}>
      -
    </button>
  </div>
)

const Hello = () => <h1>Hello, world</h1>

describe('Testing a HOC', () => {
  it('Should render without error', () => {
    // 1: Create a decorated version of the Hello Component
    // 2: Assert that rendering it doesn't throw
  })

  it('Should render the component it receives', () => {
    // 1: Create a decorated version of the Hello Component
    // 2: Assert that it renders <h1>Hello, world</h1>
  })

  it('Should render the component it receives with a counter value, an increment function and a decrement function', () => {
    // 1: Create a decorated version of the MockComponent
    // 2: Select the different elements of the app (counterValue, incrementAction, decrementAction,...) and play with them to assert the HOC works correctly
  })
})
