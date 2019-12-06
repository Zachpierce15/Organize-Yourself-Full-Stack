import React from 'react';
import { connect } from 'react-redux';
import { AddButtonDiv, SearchDiv, HeaderDiv, WelcomeH2, Title } from './MainPageCSS'



const MainPage = (props) => {
  console.log(props)
  return (
    <div>
      <HeaderDiv>

        <SearchDiv>
          <WelcomeH2>Hello {props.user}</WelcomeH2>
          <Title>Schedule Yourself</Title>
        </SearchDiv>

        <AddButtonDiv>
          <button className="ui icon button" onClick={() => console.log('This works')}>
            <i className="large plus square icon"></i>
          </button>
        </AddButtonDiv>

      </HeaderDiv>

    </div>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(MainPage)