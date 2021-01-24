import React, { Component } from 'react'
import '../../css/infoPage.css'
import OutlinedButtons from '../button'
import Location from '../location';

export default class Info extends Component {

    render() {

        return (
            <div className="bck_black">
            <div className="center_wrapper">
                <div className="vn_wrapper">

                        <div className="vn_item">
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_red"></div>
                                    <div 
                                        className="vn_icon"
                                        style={{
                                        }}
                                    ></div>
                                    <div className="vn_title">
                                        Start Recycling
                                    </div>
                                    <div className="vn_desc">
                                        If you don't know how to recycle, simply search your product
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className = "login_button">
                            <p>$50.76</p>
                            <p>Current Balance</p>
                            <OutlinedButtons/>
                        </div>


                        <div className="vn_item">
                            <div className="vn_outer">
                                <Location/>
                            </div>
                        </div>
                    
                </div>
            </div>
        </div>
        )
    }
}
