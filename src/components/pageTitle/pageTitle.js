import React, { Component } from 'react';
import './pageTitle.css';
import logo from "../../../public/logo.png";

class PageTitle extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="page-title">
                <img className="logo" src={logo} alt="logo"/>
                <span className="key">医院编号</span>
                <input className="value" type="text" name="hospital-no"/>

                <span className="key">医生编号</span>
                <input className="value" type="text" name="doctor-no"/>
            </div>
        );
    }
}

export default PageTitle;
