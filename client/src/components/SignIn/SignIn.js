import React from 'react';
import { SignInDiv } from './SignInCSS'
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { nameOfUser } from '../../actions'

class SignIn extends React.Component {
  renderError({ error, touched }) {
    if(touched && error) {
      return(
        <div className="ui error message">
          <div className ="header"> {error} </div>
        </div>
      )
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`
    return (
      <div className={className}>
        <label>{label}</label>
         <input { ...input } autoComplete="off"/>
        {this.renderError(meta)}
      </div>

    )
  }

  onSubmit = (formValues) => {
    this.props.nameOfUser(formValues)
  }

  render() {
    return(
      <SignInDiv>
        <h1>Schedule Yourself</h1>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
          <Field name="name" component={this.renderInput} label="Enter Name: "/>
          <button className="ui button primary"> Submit </button>
        </form>
      </SignInDiv>

    )
  }
}
const validate = (formValues) => {
  const errors = {}
  if(!formValues.name) {
    errors.name = 'You must enter your name'
  }

  return errors
}
const formWrapped = reduxForm({
  form:'input name form',
  validate: validate
})(SignIn)

export default connect(null, {nameOfUser})(formWrapped)