import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.span`
  font-size: 2rem;
`

export const Emojis = ({children}) => (
  <Container role="img" aria-label="emoji">
    {children}
  </Container>
)

Emojis.propTypes = {
  children: PropTypes.node.isRequired,
}
