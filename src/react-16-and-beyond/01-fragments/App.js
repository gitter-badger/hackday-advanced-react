import React, {Fragment} from 'react'

const Header = () => <h1>Hello, world!</h1>

const Text = () => <p>This is a test text</p>

const BeforeFragments = () => (
  <div>
    <Header />
    <Text />
  </div>
)

const ComponentWithoutFragment = () => [
  <Header key="header" />,
  <Text key="text" />,
]

const ComponentWithFragment = () => (
  <Fragment>
    <Header />
    <Text />
  </Fragment>
)

export const App = () => {
  return <BeforeFragments />
}
