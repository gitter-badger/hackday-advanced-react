import React, {Component} from 'react'

export class App extends Component {
  static propTypes = {}

  render() {
    const {children} = this.props
    return <div>{children}</div>
  }
}
