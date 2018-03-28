import React, {Component} from 'react'
import {VictoryAxis, VictoryChart, VictoryTheme} from 'victory'
import {parseJSON} from '../../utils/utils'
import {Title} from '../../shared/Title'
import {VictoryBar} from 'victory-chart'
import {SimpleContainer} from '../../shared/SimpleContainer'
import {getNumberOfMoviesPerYear} from './utils'

export class Stats extends Component {
  state = {
    movies: [],
  }
  componentDidMount() {
    fetch('http://localhost:5000/movies')
      .then(parseJSON)
      .then(movies => {
        this.setState({
          movies,
        })
      })
  }

  render() {
    const moviesPerYear = getNumberOfMoviesPerYear(this.state.movies)
    return (
      <SimpleContainer>
        <Title>Number of movies per year in our database from 94 to 17</Title>
        <VictoryChart theme={VictoryTheme.material} animate>
          <VictoryBar x={'year'} y={'number'} data={moviesPerYear} />
          <VictoryAxis
            style={{
              axis: {stroke: '#E0F2F1'},
              axisLabel: {fontSize: 16},
              ticks: {stroke: '#ccc'},
              tickLabels: {fontSize: 14, fontWeight: 'bold'},
              grid: {stroke: '#B3E5FC', strokeWidth: 0.25},
            }}
            dependentAxis
          />
        </VictoryChart>
      </SimpleContainer>
    )
  }
}
