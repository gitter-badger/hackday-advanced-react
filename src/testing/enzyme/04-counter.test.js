import React from 'react'
import {mount} from 'enzyme'
import {Counter, decrementFn, incrementFn} from './04-counter'
import {sel} from '../testUtils'
import {isEqual} from 'lodash'

describe('testing initial state values', () => {
  it('Should have an initial state of 0', () => {
    const wrapper = mount(<Counter />)
    /** you can access the state using wrapper.state(key) **/
  })

  it('Should be able to provide an initial value', () => {
    const wrapper = mount(<Counter initialValue={10} />)
  })
})

describe('Testing the state updates', () => {
  describe('The increment function', () => {
    it('Should be a function', () => {
      /** Not implemented 😜 **/
    })

    it('Should receive a state and return a new state with value incremented by 1', () => {
      const initial = {value: 10}
      const newState = null // Call the incrementFn here with the initial State
      expect(newState.value).toEqual(_)
    })

    it('Should not mutate the original object', () => {
      const initial = {value: 10}
      const copyInitial = {...initial}
      const newState = incrementFn(initial)
      expect(newState.value).toEqual(11)
      // Assert that the original state has not been mutated (hint: use equals from lodash)
    })
  })

  describe('The decrement function', () => {
    it('Should be a function', () => {
      /** Not implemented 😜 **/
    })

    it('Should receive a state and return a new state with value decremented by 1', () => {
      /** Not implemented 😜 **/
    })

    it('Should not mutate the original object', () => {
      /** Not implemented 😜 **/
    })
  })
})

describe('Testing the rendered markup', () => {
  describe('Testing the increment function', () => {
    it('Should have dom elements with an increment action', () => {
      const wrapper = mount(<Counter />)
      const increment = null // Select the dom element that has the testid "increment" (hint: use the sel util function)
      /** Assert that increment contains 1 element (using .length)**/
    })

    it('Should increment the state by 1 when clicking on the increment element', () => {
      const wrapper = mount(<Counter />)
      // 1: Assert that state.value === 0
      // 2: Select the increment action
      // 3: Simulate a click on it (simulate(event))
      // 4: Assert that state.value is now equal 1
    })
  })

  describe('Testing the counter value', () => {
    it('Should correctly render the value according to the state', () => {
      const wrapper = mount(<Counter initialValue={42} />)
      /** Select the element with testid counterValue, assert that it exists and its value is equal to 42 **/
    })
  })

  describe('Testing the decrement function', () => {
    it('Should have dom elements with an decrement action', () => {
      /** Not implemented 😜 **/
    })

    it('Should decrement the state by 1 when clicking on the decrement element', () => {
      /** Not implemented 😜 **/
    })
  })
})
