import React from 'react'
import {shallow} from 'enzyme'
import {App} from './02-reflected-props'

it('It should render our title prop somewhere', () => {
  const title = 'NaN NaN NaN NaN Batman'
  expect(shallow(<App title={title} />).contains(title)).toBe(true)
})
