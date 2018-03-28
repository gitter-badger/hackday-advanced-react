import React, {Component} from 'react'
import PropTypes from 'prop-types'

export class App extends Component {
  static propTypes = {}

  render() {
    const {title} = this.props
    return <div>{title}</div>
  }
}
