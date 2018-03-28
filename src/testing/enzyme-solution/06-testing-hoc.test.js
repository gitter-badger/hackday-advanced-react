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
    const DecoratedComponent = CounterHOC(Hello)
    expect(() => {
      mount(<DecoratedComponent />)
    }).not.toThrow()
  })

  it('Should render the component it receives', () => {
    const DecoratedComponent = CounterHOC(Hello)
    const wrapper = mount(<DecoratedComponent />)
    expect(wrapper.contains(<h1>Hello, world</h1>)).toBeTruthy()
  })

  it('Should render the component it receives with a counter value, an increment function and a decrement function', () => {
    const DecoratedComponent = CounterHOC(MockComponent)
    const wrapper = mount(<DecoratedComponent />)

    const counter = wrapper.find(sel('counterValue'))
    const increment = wrapper.find(sel('incrementAction'))
    const decrement = wrapper.find(sel('decrementAction'))

    expect(Number(counter.text())).toEqual(0)
    increment.simulate('click')
    expect(Number(counter.text())).toEqual(1)
    decrement.simulate('click')
    decrement.simulate('click')
    expect(Number(counter.text())).toEqual(-1)
  })
})
