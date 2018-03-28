import styled from 'styled-components'

export const Button = styled.button`
  padding: 22px 22px 22px 22px;
  font-family: Helvetica, sans-serif;
  line-height: 0;
  font-size: 1rem;
  color: white;
  margin: 2rem;
  background-color: ${props => (props.secondary ? 'tomato' : 'dodgerblue')};
  transition: 0.3s ease;
  border-radius: 50px;
  box-shadow: 6px 8px 19px 0 rgba(0, 0, 0, 0.2);
  &:hover {
    box-shadow: 6px 8px 12px 0 rgba(0, 0, 0, 0.2);
  }
  &:active {
    box-shadow: 1px 1px 1px 0 rgba(0, 0, 0, 0.2);
  }

  &:focus {
    outline: none;
  }
`
