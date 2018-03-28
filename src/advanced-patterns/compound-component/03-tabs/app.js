// TODO:
// The Tabs component should track wich tab is active and pass that active state
// to the active tab
// It should display the content according to the tabs
// If the 2nd tab is open then only the 2nd <Tabs.Panel /> should be displayed

import React, {Component} from 'react'
import styled from 'styled-components'

const TabsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
  box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.2);
`

const PanelsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Item = styled.div`
  flex: 1;
  padding: 1rem;
  text-align: center;
  &:hover {
    background-color: #ddd;
  }

  color: ${props =>
    props.disabled ? 'grey' : props.active ? 'dodgerblue' : 'black'};
`

const List = ({children}) => <TabsContainer>{children}</TabsContainer>

const ListItem = ({children}) => <Item>{children}</Item>

const Content = ({children}) => <PanelsContainer>{children}</PanelsContainer>

const Panel = ({children}) => <div>{children}</div>

class Tabs extends Component {
  static List = List
  static ListItem = ListItem
  static Content = Content
  static Panel = Panel

  render() {
    const {children} = this.props
    return children
  }
}

export class App extends Component {
  static propTypes = {}

  render() {
    return (
      <Tabs>
        <Tabs.List>
          <Tabs.ListItem>Icecream</Tabs.ListItem>
          <Tabs.ListItem disabled>Pie</Tabs.ListItem>
          <Tabs.ListItem>Cakes</Tabs.ListItem>
        </Tabs.List>
        <Tabs.Content>
          <Tabs.Panel>Mmhhh Icecream is yummy</Tabs.Panel>
          <Tabs.Panel>
            Mom made this pie for me, you want a piece of it?
          </Tabs.Panel>
          <Tabs.Panel>
            Cakes are why I'm writting React, so that I can afford them.
          </Tabs.Panel>
        </Tabs.Content>
      </Tabs>
    )
  }
}
