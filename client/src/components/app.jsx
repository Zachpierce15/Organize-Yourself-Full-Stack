import React from 'react';
import { connect } from 'react-redux';
import SignIn from './SignIn/SignIn';
import MainPage from './MainPage/MainPage';


class App extends React.Component {
  renderSelector = () => {
    return this.props.user === null ? <SignIn /> : <MainPage />
  }

  render() {
    return (

    <div>
      {this.renderSelector()}
    </div>

    )
  }
}

const mapStateToProps = state => {
  return { user: state.user }
}
export default connect(mapStateToProps)(App)