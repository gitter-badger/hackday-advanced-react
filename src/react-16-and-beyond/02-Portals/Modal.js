import React, {Component, Fragment} from 'react'
import styled from 'styled-components'

const modalRoot = document.getElementById('modal-root')

const Background = styled.div`
  background: #383b3a;
  opacity: 0.4;
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;
  position: absolute;
`

const Container = styled.div`
  background: white;
  height: auto;
  width: 50vw;
`

const ModalComponent = ({children}) => (
  <Fragment>
    <Background />
    <div>{children}</div>
  </Fragment>
)

export class Modal extends Component {
  constructor(props) {
    super(props)
    this.el = document.createElement('div')
  }

  componentDidMount() {
    modalRoot.appendChild(this.el)
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el)
  }

  render() {
    return ReactDOM.createPortal(<ModalComponent {...this.props} />, this.el)
  }
}
