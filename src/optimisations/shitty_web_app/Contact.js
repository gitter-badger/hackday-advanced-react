import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {SimpleContainer} from '../../shared/SimpleContainer'
import {Input} from '../../shared/Input'
import {Title} from '../../shared/Title'
import {Button} from '../../shared/Button'
import {reduxForm} from 'redux-form'
import {Field} from 'redux-form'

const requiredField = value => (value ? undefined : 'This Field is Required')

@reduxForm({
  form: 'contact',
})
export class Contact extends Component {
  static propTypes = {}

  onSubmit = () => {
    alert('We should ask an intern to implement this..')
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <SimpleContainer>
          <Title>Contact page</Title>
          <Field
            name="fullName"
            label="Full name"
            placeholder="Full name"
            validate={requiredField}
            component={Input}
          />
          <Field
            name="email"
            label="Email"
            placeholder="Email"
            component={Input}
            validate={requiredField}
          />
          <Field
            validate={requiredField}
            name="message"
            label="Your message"
            placeholder="We don't really care BTW..."
            component={Input}
          />
          <Button type="submit">Send</Button>
        </SimpleContainer>
      </form>
    )
  }
}
