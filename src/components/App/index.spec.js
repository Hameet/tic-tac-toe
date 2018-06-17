import React from 'react'
import { shallow } from 'enzyme'

import App from '.'

describe('components:App', () => {
  // it is an alias for test, describe takes a string description and sa fn that will group one or more tests together
  // it takes a string description of the test and a fn that runs the actual test
  it('renders the App with a game board and nine squares', () => {
    expect(toJson(shallow(<App />).dive())).toMatchSnapshot()
  })
})
