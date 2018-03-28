import React from 'react'
import {mount} from 'enzyme'
import {App} from './03-testing-children'

it('It should render our child component', () => {
  const mountedApp = mount(
    <App>
      <h1>Hello, world!</h1>
    </App>
  )
  /** Assert that the mountedApp contains <h1>Hello, world!</h1> **/
})
