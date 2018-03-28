import styled from 'styled-components'
import React, {Fragment} from 'react'
import PropTypes from 'prop-types'

export const InputArea = styled.input`
  height: 40px;
  width: 50%;
  border: 1px solid #b7bbba;
  border-radius: 4px;
  font-size: 0.875rem;
  color: #717776;
  padding: 0.5625rem 0.75rem;

  //Fix box-shadow on iphone
  -webkit-appearance: none;
  &:focus {
    outline: none;
    border: 1px solid dodgerblue;
  }
  &::placeholder {
    color: #999e9d;
  }
`

export const Label = styled.label`
  font-size: 0.875rem;
  font-family: Helvetica;
  color: ${props => (props.danger ? 'tomato' : '#4b4f4e')};
`

export class Input extends React.Component {
  static propTypes = {
    wrong: PropTypes.bool,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    meta: PropTypes.object,
  }
  render() {
    const {
      label,
      wrong,
      placeholder,
      meta = {},
      input = {},
      ...rest
    } = this.props
    return (
      <Fragment>
        {label && <Label>{label}</Label>}
        <InputArea
          type="text"
          wrong={meta.valid}
          placeholder={placeholder}
          {...input}
          {...rest}
        />
        {(meta.dirty || meta.touched) &&
          meta.error && <Label danger>{meta.error}</Label>}
      </Fragment>
    )
  }
}
