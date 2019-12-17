import React from 'react';
import * as Yup from 'yup';
import { Formik, FormikProps, Form, Field } from 'formik';
import { connect } from 'react-redux';
import { AddCardToList } from '../../../../actions';


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
    this.props.AddCardToList(this.props.listId, card)
  }

  render() {
    return (
      <Formik 
        initialValues={{
            card: ''
        }}
        validate={(values) => {
           let errors = {};
              
           //check if my values have errors
           return errors;
        }}
        onSubmit={(e) => this.handleSubmit(e)}
        render={props => {
          console.log(this.props.lists,'THIS IS LISTS IN REDUX')
          return (
            <Form>
              <div className="ui input">
                <Field
                  type='text'
                  name='card'
                  placeholder='Enter Card Title'
                />
              </div>
              <div>
                <Field
                  className='ui green button'
                  name='addCard'
                  type='submit'
                  value='Add Card'
                />
              </div>
            </Form>
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





// // Connecting CardForm to Formik
// const FormikCardForm = withFormik({
//   mapPropsToValues() {
//     return {card: '', addButton: 'Add Card'}
//   },
//   validationSchema: Yup.object().shape({
//     card: Yup.string().min(0).required()
//   }), 
//   handleSubmit(e) {
//     console.log(arguments, 'THIS IS INSIDE OF ADD CARD FORM')
//     e.preventDefault()
//     const specificList = arguments[1].props.listId
//     const card = {
//       id: generateId(0,10000),
//       information: values.card
//     }
//     // AddCardToList(specificList, card)
//   }
// })(ConnectCardForm)

// export default FormikCardForm