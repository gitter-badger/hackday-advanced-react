// TODO:
// Using what was explained in the exercise controlled-uncontrolled/01-basic control the tabs component from the App component

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

const List = ({children, activeTab, selectTab}) => (
  <TabsContainer>
    {React.Children.map(children, (el, index) =>
      React.cloneElement(el, {
        active: activeTab === index,
        selectTab: () => selectTab(index),
      })
    )}
  </TabsContainer>
)

const ListItem = ({active, disabled, children, selectTab}) => (
  <Item
    active={active}
    disabled={disabled}
    onClick={disabled ? null : selectTab}
  >
    {children}
  </Item>
)

const Panels = ({children, activeTab}) => (
  <PanelsContainer>{children[activeTab]}</PanelsContainer>
)

const Panel = ({children}) => <div>{children}</div>

class Tabs extends Component {
  static List = List
  static ListItem = ListItem
  static Panels = Panels
  static Panel = Panel

  state = {
    activeTab: 0,
  }

  selectTab = number =>
    this.setState({
      activeTab: number,
    })

  render() {
    const {children: rawChildren} = this.props
    const {activeTab} = this.state
    return React.Children.map(rawChildren, el =>
      React.cloneElement(el, {
        activeTab,
        selectTab: this.selectTab,
      })
    )
  }
}

export class App extends Component {
  render() {
    return (
      <Tabs>
        <Tabs.List>
          <Tabs.ListItem>Icecream</Tabs.ListItem>
          <Tabs.ListItem disabled>Pie</Tabs.ListItem>
          <Tabs.ListItem>Cakes</Tabs.ListItem>
        </Tabs.List>
        <Tabs.Panels>
          <Tabs.Panel>Mmhhh Icecream is yummy</Tabs.Panel>
          <Tabs.Panel>
            Mom made this pie for me, you want a piece of it?
          </Tabs.Panel>
          <Tabs.Panel>
            Cakes are why I'm writting React, so that I can afford them.
          </Tabs.Panel>
        </Tabs.Panels>
      </Tabs>
    )
  }
}
