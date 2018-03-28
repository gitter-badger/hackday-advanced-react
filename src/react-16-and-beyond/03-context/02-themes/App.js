import React, {Fragment, createContext} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const THEMES = {
  light: {
    backgroundColor: '#FAFAFA',
    text: '#444',
  },
  dark: {
    backgroundColor: '#444',
    text: '#FAFAFA',
  },
  epileptic: {
    backgroundColor: '#FF0',
    text: '#0FF',
  },
}

const ThemeContext = createContext(THEMES.light)

const Text = styled.p`
  color: ${props => props.text};
`

const Box = styled.div`
  padding: 3rem;
  background-color: ${props => props.backgroundColor};
`

export const ThemedBox = ({children}) => (
  <ThemeContext.Consumer>
    {({backgroundColor}) => (
      <Box backgroundColor={backgroundColor}>{children}</Box>
    )}
  </ThemeContext.Consumer>
)

export const ThemedText = ({children}) => (
  <ThemeContext.Consumer>
    {({text}) => <Text text={text}>{children}</Text>}
  </ThemeContext.Consumer>
)

export class App extends React.Component {
  state = {
    selectedTheme: 'light',
  }

  nextTheme = () => {
    const names = Object.keys(THEMES)
    const selectedIndex = names.indexOf(this.state.selectedTheme)
    this.setState({
      selectedTheme: names[(selectedIndex + 1) % names.length],
    })
  }

  render() {
    return (
      <Fragment>
        <button type="button" onClick={this.nextTheme}>
          Change theme
        </button>
        <ThemeContext.Provider value={THEMES[this.state.selectedTheme]}>
          <ThemedBox>
            <ThemedText>Yo bro</ThemedText>
          </ThemedBox>
        </ThemeContext.Provider>
      </Fragment>
    )
  }
}
