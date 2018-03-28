import React from 'react'
import {mount} from 'enzyme'
import {Counter, decrementFn, incrementFn} from './04-counter'
import {sel} from '../testUtils'
import {isEqual} from 'lodash'

describe('testing initial state values', () => {
  it('Should have an initial state of 0', () => {
    const wrapper = mount(<Counter />)
    expect(wrapper.state('value')).toEqual(0)
  })

  it('Should be able to provide an initial value', () => {
    const wrapper = mount(<Counter initialValue={10} />)
    expect(wrapper.state('value')).toEqual(10)
  })
})

describe('Testing the state updates', () => {
  describe('The increment function', () => {
    it('Should be a function', () => {
      expect(typeof incrementFn).toEqual('function')
    })

    it('Should receive a state and return a new state with value incremented by 1', () => {
      const initial = {value: 10}
      const newState = incrementFn(initial)
      expect(newState.value).toEqual(11)
    })

    it('Should not mutate the original object', () => {
      const initial = {value: 10}
      const copyInitial = {...initial}
      const newState = incrementFn(initial)
      expect(newState.value).toEqual(11)
      expect(isEqual(initial, copyInitial)).toBeTruthy()
    })
  })

  describe('The decrement function', () => {
    it('Should be a function', () => {
      expect(typeof decrementFn).toEqual('function')
    })

    it('Should receive a state and return a new state with value decremented by 1', () => {
      const initial = {value: 10}
      const newState = decrementFn(initial)
      expect(newState.value).toEqual(9)
    })

    it('Should not mutate the original object', () => {
      const initial = {value: 10}
      const copyInitial = {...initial}
      const newState = decrementFn(initial)
      expect(newState.value).toEqual(9)
      expect(isEqual(initial, copyInitial)).toBeTruthy()
    })
  })
})

describe('Testing the rendered markup', () => {
  describe('Testing the increment function', () => {
    it('Should have dom elements with an increment action', () => {
      const wrapper = mount(<Counter />)
      const increment = wrapper.find(sel('increment'))
      expect(increment.length).toEqual(1)
    })

    it('Should increment the state by 1 when clicking on the increment element', () => {
      const wrapper = mount(<Counter />)
      const increment = wrapper.find(sel('increment'))
      expect(wrapper.state('value')).toEqual(0)
      increment.simulate('click')
      expect(wrapper.state('value')).toEqual(1)
    })
  })

  describe('Testing the counter value', () => {
    it('Should correctly render the value according to the state', () => {
      const wrapper = mount(<Counter initialValue={42} />)
      const value = wrapper.find(sel('counterValue'))
      expect(value.length).toEqual(1)
      expect(Number(value.text())).toEqual(42)
    })
  })

  describe('Testing the decrement function', () => {
    it('Should have dom elements with an decrement action', () => {
      const wrapper = mount(<Counter />)
      const decrement = wrapper.find(sel('decrement'))
      expect(decrement.length).toEqual(1)
    })

    it('Should decrement the state by 1 when clicking on the decrement element', () => {
      const wrapper = mount(<Counter />)
      const decrement = wrapper.find(sel('decrement'))
      expect(wrapper.state('value')).toEqual(0)
      decrement.simulate('click')
      expect(wrapper.state('value')).toEqual(-1)
    })
  })
})
