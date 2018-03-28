import styled from 'styled-components'

export const Title = styled.h1`
  font-family: Helvetica;
  color: ${props => props.color || 'black'}
  font-size: ${props => (props.small ? '1rem' : '2rem')};
`
