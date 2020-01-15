import React from 'react';
import { SignInDiv } from './SignInCSS'
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { nameOfUser } from '../../Redux/actions'

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
         <input { ...input } autoComplete="off" maxLength="30"/>
        {this.renderError(meta)}
      </div>

    )
  }

  onSubmit = (formValues) => {
    this.props.nameOfUser(formValues)
  }



  render() {
    const CustomLabel = () => {
      let labelStyle = {
        "fontSize": "large",
        "display": "block",
        "color": "rgba(0,0,0,.87)",
        "fontWeight": "700",
        "textTransform": "none"
      }
      return <label style={labelStyle}>Enter Name</label>
    }
    return(
      <SignInDiv>
        <h1
          style={{'fontSize': '-webkit-xxx-large'}}
        >
          Organize Yourself
        </h1>
        
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className="ui form error"
          >
          {CustomLabel()}

          <Field
            name="name"
            component={this.renderInput}
            placeholder="Enter Name..."
            />
          <button
            className="ui button primary"
            style={{'backgroundColor': 'darkgoldenrod'}}
          > 
          Submit 
          </button>

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