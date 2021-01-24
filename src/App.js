import React, { Component } from 'react';


import Header from './componenets/header';

import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './componenets/navBar'
import ImgMediaCard from './componenets/landingPage';
import InteractiveList from './componenets/materialList';
import Info from './componenets/infoPage';

function App() {
  return (
    <div>
      <NavBar/> 
      <ImgMediaCard/>
      <InteractiveList/>
      <Info/>

    </div>

    
  );
}

export default App;
