import React, {Component, Fragment} from 'react'
import {Button} from '../../../shared/Button'
import {CenteredSpinner} from '../../../shared/CenteredSpinner'
import {Container} from '../../../shared/Container'
import {Emojis} from '../../../shared/Emojis'
import {Row} from '../../../shared/Row'
import {Title} from '../../../shared/Title'

const identity = x => x

const Loading = ({loading, children}) => children

const Empty = ({loading, movies = [], children, refresh = identity}) =>
  children({refresh})

const List = ({loading, movies = [], children, refresh = identity}) =>
  children({movies, refresh})

// TODO
// Write the render prop below
// It should load movies from http://localhost:5000/movies
// Don't forget to start the server by running yarn server:slow
// The server will respond after 1.5s and will send back an empty array 1 time out of 5
// Fetch the movies in componentDidMount
// what you should give to FetchMovie's Children
// - refresh (function that fetches the movies)
// - loading (whether the list of movies is loaded or not)
// - movies (the list of movies)
// You don't need to change the implementation the App component, you should just make it work
class FetchMovies extends Component {
  static Loading = Loading
  static Empty = Empty
  static List = List

  render() {
    const {children} = this.props
    return children
  }
}

export class App extends Component {
  static propTypes = {}

  render() {
    return (
      <Container horizontal>
        <FetchMovies>
          <FetchMovies.Loading>
            <CenteredSpinner />
          </FetchMovies.Loading>
          <FetchMovies.Empty>
            {({refresh}) => (
              <Fragment>
                <Title>
                  Sorry, we couldn't find any movie <Emojis>😤</Emojis>
                </Title>
                <Button secondary onClick={refresh}>
                  Try again
                </Button>
              </Fragment>
            )}
          </FetchMovies.Empty>
          <FetchMovies.List>
            {({movies, refresh}) => (
              <Fragment>
                <Button onClick={refresh}>Refresh</Button>
                <ul>
                  {movies.map(movie => <Row key={movie.id}>{movie.title}</Row>)}
                </ul>
              </Fragment>
            )}
          </FetchMovies.List>
        </FetchMovies>
      </Container>
    )
  }
}
