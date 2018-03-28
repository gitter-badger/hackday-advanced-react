import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, {Fragment} from 'react'
import styled from 'styled-components'

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
`

const Line = styled.div`
  padding: 0 1rem;
  flex: 1;
  transform: translateY(50%);

  div {
    border-bottom: 1px solid #ddd;
  }
`

export const StepBar = ({step, numberOfSteps, selectStep}) => (
  <Header>
    {Array(numberOfSteps)
      .fill(0)
      .map((v, i) => (
        <Fragment key={i}>
          <span
            className={classNames('tag', 'is-rounded', {
              'is-primary': i === step,
            })}
            onClick={() => selectStep(i)}
          >
            {i + 1}
          </span>
          {i < numberOfSteps - 1 && (
            <Line>
              <div />
            </Line>
          )}
        </Fragment>
      ))}
  </Header>
)

StepBar.propTypes = {
  step: PropTypes.number.isRequired,
  numberOfSteps: PropTypes.number.isRequired,
  selectStep: PropTypes.func.isRequired,
}
