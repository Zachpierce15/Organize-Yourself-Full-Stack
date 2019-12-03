import React from 'react';
import { connect } from 'react-redux';


const MainPage = (props) => {
  console.log(props)
  return (
    <div>Hello {props.user}</div>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(MainPage)