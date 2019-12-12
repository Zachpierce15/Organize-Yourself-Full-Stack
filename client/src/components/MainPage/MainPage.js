import React from 'react';
import NavBar from '../NavBar/Navbar';
import Board from '../Board/Board'

const MainPage = (props) => {
  console.log(props)
  return (
    <div>
      <NavBar /> 
      <Board />
    </div>
  );
};


export default MainPage