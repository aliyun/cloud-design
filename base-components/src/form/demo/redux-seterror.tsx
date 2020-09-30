/**
 * @title 手动设置错误
 * @description 在`redux`中结合 `componentWillReceiveProps` `setErrors` 使用, 配合 Field 使用更加方便
 */

import * as React from 'react'
import styled from 'styled-components'

import { Form, Input, Button, Field } from '@alife/alicloud-components'
import { combineReducers, createStore } from 'redux'
import { Provider, connect } from 'react-redux'

const initState = {
  values: { email: '', username: 'xiachi' },
  errors: {}
}

function formReducer(state = initState, action) {
  switch (action.type) {
    case 'save_fields':
      return {
        ...state,
        values: {
          ...state.values,
          ...action.values
        }
      }
    case 'set_errors':
      return {
        ...state,
        errors: {
          ...state.errors,
          ...action.errors
        }
      }
    default:
      return state
  }
}

class FormDemo extends React.Component {
  constructor(props) {
    super(props)

    this.field = new Field(this, {
      onChange: (name, value) => {
        console.log('onChange', name, value, this.field.getError(name))
        this.props.dispatch({
          type: 'save_fields',
          values: {
            [name]: value
          }
        })
        this.props.dispatch({
          type: 'set_errors',
          errors: {
            [name]: this.field.getError(name)
          }
        })
      }
    })
  }

  componentWillReceiveProps(nextProps) {
    this.field.setValues(nextProps.formData.values)
    this.field.setErrors(nextProps.formData.errors)
  }

  setEmail() {
    this.props.dispatch({
      type: 'save_fields',
      values: {
        email: 'qq@gmail.com'
      }
    })
  }

  setName() {
    this.props.dispatch({
      type: 'save_fields',
      values: {
        username: 'frank'
      }
    })
  }

  setError() {
    this.props.dispatch({
      type: 'set_errors',
      errors: {
        email: 'Error message from remote'
      }
    })
  }

  setErrors() {
    this.props.dispatch({
      type: 'set_errors',
      errors: {
        email: 'A-Error message from remote',
        username: 'B-Error message from remote'
      }
    })
  }

  render() {
    return (
      <Form field={this.field}>
        <Form.Item required format="email">
          <Input name="email" />
        </Form.Item>
        <Form.Item help="" required requiredMessage="required">
          <Input
            name="username"
            defaultValue={this.props.formData.values.username}
          />
          <p style={{ color: 'blue' }}>{this.field.getError('username')}</p>
        </Form.Item>

        <p>email: {this.props.email && this.props.email.value}</p>
        <Button onClick={this.setEmail.bind(this)}>setEmail</Button>
        <Button onClick={this.setName.bind(this)}>setName</Button>
        <Button onClick={this.setError.bind(this)}>setError</Button>
        <Button onClick={this.setErrors.bind(this)}>setErrors</Button>
        <Button onClick={() => this.field.reset()}>reset</Button>
      </Form>
    )
  }
}

const ReduxFormDemo = connect((state) => {
  return {
    formData: state.formReducer
  }
})(FormDemo)

const store = createStore(
  combineReducers({
    formReducer
  })
)

export default function DemoComponent() {
  return (
    <Style>
      <Provider store={store}>
        <div>
          <ReduxFormDemo />
        </div>
      </Provider>
    </Style>
  )
}
const Style = styled.div``
