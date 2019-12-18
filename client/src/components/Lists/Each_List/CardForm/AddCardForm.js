import React from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import { AddCardToList } from '../../../../actions';
import { CustomDiv, ErrorMessage } from './AddCardCSS';


class CardForm extends React.Component{
  constructor(props){
    super(props);
  }

  generateId = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  }

  handleSubmit = (e) => {
    const card = {
      id: this.generateId(1,100000),
      name: e.card
    }
    //Run Reducer function 
    this.props.AddCardToList(this.props.listId, card)
    //Run Function to change state in Add Card component
    this.props.hasAddedCard()
  }


  render() {
    // Validation schema to check if form is recieving correct inputs
    const SignupSchema = Yup.object().shape({
      card: Yup.string()
        .min(1,'Must have a minimum of 1 character')
        .max(50, 'Max of 50 characters')
        .required('Title required')
    });
    return (
      <Formik 
        initialValues={{
            card: ''
        }}
        validationSchema={SignupSchema}   
        onSubmit={(e) => this.handleSubmit(e)}
        render={({errors, touched}) => {
          return (
            <div>

              <Form>
                <CustomDiv className="ui input">
                  <Field
                    type='text'
                    name='card'
                    placeholder='Enter Card Title'
                  />
                  {
                    errors.card && touched.card ? (
                      <ErrorMessage className="ui error message">
                        <div className ="header">
                        {errors.card}
                        </div>
                      </ErrorMessage>
                      ) : null
                  }
                </CustomDiv>
                <div>
                  <Field
                    className='ui green button'
                    name='addCard'
                    type='submit'
                    value='Add Card'
                  />
                </div>
              </Form>
              
            </div>
          )
        }}
      />)
  }
}

const mapStateToProps = (state) => {
  return {
    lists: state.lists
  }
}
// Connecting CardForm to Redux Store
const ConnectCardForm = connect(mapStateToProps, { AddCardToList })(CardForm);
export default ConnectCardForm
