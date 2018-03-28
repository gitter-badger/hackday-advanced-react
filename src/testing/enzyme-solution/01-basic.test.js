import React from 'react'
import {shallow} from 'enzyme'
import {App} from './01-basic'

describe('test suite', () => {
  it('Should render without any error', () => {
    /** You can render the app using shallow from Enzyme **/
    /** Assert that it does not throw and that it contains <div className="yolo">Hello, world!</div> **/
    expect(() => {
      shallow(<App />)
    }).not.toThrow()

    expect(
      shallow(<App />).contains(<div className="yolo">Hello, world!</div>)
    ).toBe(true)
  })
})
