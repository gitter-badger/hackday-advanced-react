import styled from 'styled-components'
import React from 'react'
import PropTypes from 'prop-types'

const switchSize = `30`
const ButtonHeight = `24`
const blue = '#188DF2'
const white = '#FFFFFF'

export const SwitchBox = styled.div`
  position: relative;
  outline: 0;
  -webkit-backface-visibility: hidden;
  -webkit-transform: translate3d(0, 0, 0);
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  width: 60px;
  height: ${switchSize}px;
  margin: 5px auto;

  input {
    display: none;
  }

  input + label {
    display: block;
    position: absolute;
    cursor: pointer;
    user-select: none;
    width: 60px;

    &:before,
    &:after {
      content: '';
      position: absolute;
      border-radius: 30px;
      transition: all 0.25s ease-in-out;
    }

    &:before {
      height: ${switchSize}px;
      width: ${switchSize * 2}px;
      background-color: ${blue};
      border: 2px solid ${blue};
    }

    &:after {
      top: 3px;
      left: 3px;
      border: 2px solid ${blue};
      width: ${ButtonHeight}px;
      height: ${ButtonHeight}px;
      background: white;
      transform: translate(${switchSize}px, 0);
    }
  }

  input:checked + label:after {
    background: ${blue};
    border: 2px solid ${white};
    transition: all 0.25s ease-in-out;
    transform: translate(0, 0);
  }

  input:checked + label:before {
    background-color: white;
    border: 2px solid ${blue};
  }
`

export class Switch extends React.Component {
  static propTypes = {
    onSwitchChange: PropTypes.func.isRequired,
    active: PropTypes.bool,
  }

  render() {
    const {onSwitchChange, active} = this.props
    return (
      <SwitchBox>
        <input
          type="checkbox"
          id="check1"
          checked={!active}
          onChange={onSwitchChange}
        />
        <label htmlFor="check1" />
      </SwitchBox>
    )
  }
}
