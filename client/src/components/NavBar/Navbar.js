import React from 'react';
import { connect } from 'react-redux';
import { AddButtonDiv, SearchDiv, HeaderNav, WelcomeH2, Title } from './NavbarCSS'



const NavBar = (props) => {
  return (
      <HeaderNav>

        <SearchDiv>
          <WelcomeH2>Hello {props.user}</WelcomeH2>
          <Title>Schedule Yourself</Title>
        </SearchDiv>

        <AddButtonDiv>
          <button
            className="ui icon button"
            onClick={() => console.log('This works')}
            onMouseEnter={() => console.log("hover works")}
            onMouseLeave={() => console.log('Leave hover works')}
            >
            <i className="large plus square icon"></i>
          </button>
        </AddButtonDiv>

      </HeaderNav>

  )
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(NavBar)