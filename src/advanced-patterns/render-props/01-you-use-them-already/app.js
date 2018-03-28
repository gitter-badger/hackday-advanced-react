import React, {Component} from 'react'
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import {Container} from '../../../shared/Container'
import {Emojis} from '../../../shared/Emojis'
import {Title} from '../../../shared/Title'

const CharactersMap = {
  alice: '🙍‍♀️‍',
  bob: '🙎‍♂️',
}

export class App extends Component {
  static propTypes = {}

  render() {
    return (
      <BrowserRouter>
        <Container>
          <Link to="/">Home</Link>
          <Link to="/intro">Intro</Link>
          <Link to="/bob">Bob's profile</Link>
          <Link to="/alice">Alice's profile</Link>
          <Switch>
            <Route exact path="/" render={() => <Emojis>🏡</Emojis>} />
            <Route
              path="/intro"
              render={() => (
                <Title>
                  Welcome to this exercise about render props! This is an
                  example on how you (probably) already use them!
                </Title>
              )}
            />
            <Route
              path="/:character"
              render={({match: {params: {character}}}) => (
                <Title>
                  {character}:{' '}
                  <span role="img" aria-label={character}>
                    {CharactersMap[character]}
                  </span>
                </Title>
              )}
            />
          </Switch>
        </Container>
      </BrowserRouter>
    )
  }
}
