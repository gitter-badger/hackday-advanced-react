import React, {Component, Fragment} from 'react'
import {Button} from '../../../shared/Button'
import {CenteredSpinner} from '../../../shared/CenteredSpinner'
import {Container} from '../../../shared/Container'
import {Emojis} from '../../../shared/Emojis'
import {Row} from '../../../shared/Row'
import {Title} from '../../../shared/Title'

const parseJson = res => res.json()

const Loading = ({loading, children}) => (loading ? children : null)

const Empty = ({loading, movies, children, refresh}) =>
  !loading && movies.length === 0 ? children({refresh}) : null

const List = ({loading, movies, children, refresh}) =>
  !loading && movies.length !== 0 ? children({movies, refresh}) : null

// TODO
// Write the render prop below
// It should load movies from http://localhost:5000/movies
// Don't forget to start the server by running yarn server:slow
// The server will respond after 1.5s and will send back an empty array 1 time out of 5
// Fetch the movies in cDM
// what you should give to FetchMovie's Childrens
// - refresh (function that fetches the movies)
// - loading (whether the list of movies is loaded or not)
// - movies (the list of movies)
// You don't need to change the implementation of app.js, you should just make it work
class FetchMovies extends Component {
  static Loading = Loading
  static Empty = Empty
  static List = List

  state = {
    loading: false,
    movies: [],
  }

  componentDidMount() {
    this.refresh()
  }

  refresh = () => {
    this.setState(
      {
        loading: true,
      },
      () => {
        fetch('http://localhost:5000/movies')
          .then(parseJson)
          .then(movies => {
            this.setState({
              movies,
              loading: false,
            })
          })
      }
    )
  }

  render() {
    const {children: rawChildren} = this.props
    const {loading, movies} = this.state
    return React.Children.map(rawChildren, el =>
      React.cloneElement(el, {
        loading,
        movies,
        refresh: this.refresh,
      })
    )
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
