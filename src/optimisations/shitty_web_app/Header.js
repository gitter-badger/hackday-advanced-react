import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
  display: flex;

  color: white;

  a {
    padding: 0.5rem 1rem;
    color: white;
    font-family: Helvetica;
    text-decoration: none;

    &:hover {
      background-color: #00b89c;
      color: white;
    }
  }

  .active {
    box-shadow: inset 0 -5px 0 #fff;
    transition: 0.3s ease-in-out;
    color: white;
  }
`

const Container = styled.div`
  background-color: #00d1b2;
`

export const HeaderNav = ({children}) => (
  <Container>
    <Nav>{children}</Nav>
  </Container>
)
