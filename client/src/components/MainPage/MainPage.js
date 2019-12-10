import React from 'react';
import NavBar from '../NavBar/Navbar';
import Lists from '../Lists/Board';

const MainPage = (props) => {
  console.log(props)
  return (
    <div>
      <NavBar /> 
      <Lists />
    </div>
  );
};


export default MainPage