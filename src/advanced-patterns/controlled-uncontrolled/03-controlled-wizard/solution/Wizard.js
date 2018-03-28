import PropTypes from 'prop-types'
import React, {Fragment} from 'react'

const Step = ({children, ...childrenProps}) =>
  childrenProps.step === childrenProps.id ? children(childrenProps) : null

export class Wizard extends React.Component {
  static propTypes = {
    step: PropTypes.number,
    onChangeStep: PropTypes.func,
    children: PropTypes.node,
    header: PropTypes.func,
    footer: PropTypes.func,
  }

  static Step = Step

  state = {
    step: this.props.step || 0,
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.step != null && this.props.step !== nextProps.step) {
      this.setState({
        step: nextProps.step || 0,
      })
    }
  }

  numberOfSteps = () => React.Children.count(this.props.children)

  previousStep = () => {
    const previousStep = Math.max(this.state.step - 1, 0)
    if (previousStep !== this.state.step) {
      this.selectStep(previousStep)
    }
  }

  nextStep = () => {
    const nextStep = Math.min(this.state.step + 1, this.numberOfSteps() - 1)

    if (nextStep !== this.state.step) {
      this.selectStep(nextStep)
    }
  }

  selectStep = index => {
    if (this.props.onChangeStep) {
      return this.props.onChangeStep(index)
    }
    this.setState({step: index})
  }

  render() {
    const {children, header, footer} = this.props

    const childProps = {
      nextStep: this.nextStep,
      previousStep: this.previousStep,
      selectStep: this.selectStep,
      step: this.state.step,
      numberOfSteps: this.numberOfSteps(),
    }

    return (
      <Fragment>
        {header && header(childProps)}

        {React.Children.map(children, (step, index) =>
          React.cloneElement(step, {id: index, ...childProps})
        )}

        {footer && footer(childProps)}
      </Fragment>
    )
  }
}
