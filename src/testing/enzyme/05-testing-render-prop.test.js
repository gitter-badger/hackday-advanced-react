import React from 'react'
import {mount} from 'enzyme'
import {CounterRenderProp} from './05-testing-render-prop'

describe('Testing the render prop', () => {
  it('Should call the function passed in children', () => {
    // 1: Create a spy using jest.fn()
    // 2: Mount <CounterRenderProp>{spy}</CounterRenderProp>
    // 3: Assert that your spy has been called
  })

  it('Should be called with a counter value of 0, an increment function and a decrement function', () => {
    let counterVal
    let incrementFn
    let decrementFn

    const spy = jest
      .fn()
      .mockImplementation(({increment, decrement, counter}) => {
        counterVal = counter
        incrementFn = increment
        decrementFn = decrement
        return null
      })

    // 1: Mount the counterRenderProp function
    // 2: Assert that both incrementFn and decrementFn are functions
    // 3: Assert that counter is equal to 0
    // 4: Play with increment and decrement and make sure the counter value updates!
  })
})
