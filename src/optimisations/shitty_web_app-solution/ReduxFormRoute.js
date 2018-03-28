import React, {Component} from 'react'
import {reducersRegistry} from './reducersRegistry'
import {Route} from 'react-router-dom'

export class ReduxFormRoute extends Component {
  static propTypes = {}

  componentDidMount() {
    if (!reducersRegistry.getReducers['form']) {
      import(/* webpackChunkName: "ReduxForm" */ 'redux-form').then(
        ({reducer}) => reducersRegistry.register('form', reducer)
      )
    }
  }

  render() {
    return <Route {...this.props} />
  }
}
