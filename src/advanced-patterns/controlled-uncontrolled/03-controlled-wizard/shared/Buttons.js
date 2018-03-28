import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #ddd;
`

export const Buttons = ({previousStep, nextStep}) => (
  <Footer>
    <button className="button" type="button" onClick={previousStep}>
      Prev
    </button>
    <button className="button" type="button" onClick={nextStep}>
      Next
    </button>
  </Footer>
)

Buttons.propTypes = {
  previousStep: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
}
