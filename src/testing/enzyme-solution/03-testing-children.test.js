import React from 'react'
import {mount} from 'enzyme'
import {App} from './03-testing-children'

it('It should render our child component', () => {
  const mountedApp = mount(
    <App>
      <h1>Hello, world!</h1>
    </App>
  )
  expect(mountedApp.contains(<h1>Hello, world!</h1>)).toBe(true)
})
