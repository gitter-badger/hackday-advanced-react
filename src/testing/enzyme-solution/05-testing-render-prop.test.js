import React from 'react'
import {mount} from 'enzyme'
import {CounterRenderProp} from './05-testing-render-prop'

describe('Testing the render prop', () => {
  it('Should call the function passed in children', () => {
    const spy = jest.fn().mockReturnValue(null)
    mount(<CounterRenderProp>{spy}</CounterRenderProp>)
    expect(spy).toBeCalled()
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
    mount(<CounterRenderProp>{spy}</CounterRenderProp>)
    expect(spy).toHaveBeenCalled()
    expect(typeof incrementFn).toEqual('function')
    expect(typeof decrementFn).toEqual('function')
    expect(counterVal).toEqual(0)
    decrementFn()
    expect(counterVal).toEqual(-1)
    incrementFn()
    incrementFn()
    incrementFn()
    expect(counterVal).toEqual(2)
  })
})
