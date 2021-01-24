import React, { Component } from 'react';


import Header from './componenets/header';

import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './componenets/navBar'
import ImgMediaCard from './componenets/landingPage';
import InteractiveList from './componenets/materialList';
import Info from './componenets/infoPage';
import OutlinedButtons from './componenets/button';

function App() {
  return (
    <div>
      <NavBar/> 
      <Info/>
      <InteractiveList/>
      <ImgMediaCard/>
      <OutlinedButtons/>


    </div>

    
  );
}

export default App;
