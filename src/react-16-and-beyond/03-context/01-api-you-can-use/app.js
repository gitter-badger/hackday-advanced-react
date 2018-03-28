import React, {createContext} from 'react'
import {Container} from '../../../shared/Container'

const NavigatorContext = createContext({
  userAgent: navigator.userAgent,
})

export const Agent = () => (
  <NavigatorContext.Consumer>
    {context => {
      console.log('context', context)
      return <div>My name is {context.userAgent}</div>
    }}
  </NavigatorContext.Consumer>
)

export const App = () => (
  <Container>
    <Agent />
  </Container>
)
