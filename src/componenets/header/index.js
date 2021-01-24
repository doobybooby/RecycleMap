import React, { Component } from 'react';
import '../../css/header.css'


export default class Header extends Component {

   
render() {
        return (
            
            <div className="navbar navbar-dark bg-dark"> 
        <a class="navbar-brand" href="#"> 
          
      </a> 
    
            
            <div className = "header_container">
            <div className="header_logo" img src = "./resources/images/logo.png"></div>
                <h1 className = "header_title">RecycleMap</h1>

            </div>

            

        </div>


        );
    }
}
