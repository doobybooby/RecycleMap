import React, { Component } from 'react'
import '../../css/MS.css'
import OutlinedButtons from '../button'


export default class MS extends Component {

    render() {

        return (
            <div className="bck_black">
            <div className="center_wrapper">
                <div className="ms_wrapper">

                        <div className="ms_item">
                            <div className="ms_outer">
                                <div className="ms_inner">
                                    <div className="ms_icon_square bck_red"></div>
                                    <div 
                                        className="ms_icon"
                                        style={{
                                        }}
                                    ></div>
                                    
                                    <div className="ms_title" >
                                        <h2>Mission Statement</h2>
                                    </div>
                                    <div className="ms_desc">
                                        We developed this website for those who are self concious about 
                                        the enviroment's health and all the inhabitants. We hope you enjoy the website and 
                                        take responsibility of the Earth's problem. We as humas have neglected the earth to the point it has led to more problems than solution. 
                                        This website is an effort to combat global warming, carbon emissions, and other natural devistations. We do not expect a drastic change however it starts with one person. 
                                    </div>
                                </div>
                            </div>
                        </div>

                       
                    
                </div>
            </div>
        </div>
        )
    }
}


