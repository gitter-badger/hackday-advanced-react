import styled from 'styled-components'
import {Container} from './Container'

export const Background = styled(Container)`
  background-color: ${props => (props.darkTheme ? 'rgb(28, 38, 43)' : 'white')};
  transition: background-color 0.3s linear;
`
