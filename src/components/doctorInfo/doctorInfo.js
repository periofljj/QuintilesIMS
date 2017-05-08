import React, { Component } from 'react';
import './doctorInfo.css';

class DoctorInfo extends Component {
    constructor(props) {
        super(props);
        // this.save = this.save.bind(this);
    }

    render() {
        return (
            <div className="doctor-info">
                <div className="doctor-info-table">
                    <div className="table-title">
                        <span className="title">Oncology Dynamics 医生首页信息表</span>
                        <span className="time">OD 2017Q1</span>
                    </div>
                    <div className="table-content">
                        <div className="table-row">
                            <div>
                                <span className="key">访员</span><input className="value" type="text"/>
                            </div>
                            <div>
                                <span className="key">访员</span><input className="value" type="text"/>
                            </div>
                            <div>
                                <span className="key">城市</span><input className="value" type="text"/>                                     
                            </div>
                        </div>
                        <div className="table-row">
                            <div>
                                <span className="key">审核</span><input className="value" type="text"/>
                            </div>
                            <div>
                                <span className="key">回访</span><input className="value" type="text"/>
                            </div>
                            <div>
                                <span className="key">录入</span><input className="value" type="text"/> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DoctorInfo;
