import styled from 'styled-components'
import {Title} from './Title'

export const Text = styled(Title)`
  color: ${props => (props.darkTheme ? 'rgb(178, 115, 222)' : 'black')};
  font-family: Helvetica;
  transform: ${props => (props.reversed ? 'scale(-1, 1);' : 'scale(1, 1);')};
`
