import React from 'react'
import {shallow} from 'enzyme'
import {App} from './02-reflected-props'

it('It should render our title prop somewhere', () => {
  const title = 'NaN NaN NaN NaN Batman'
  const wrapper = shallow(<App title={title} />)
  /** Assert that the wrapper contains our title **/
})
