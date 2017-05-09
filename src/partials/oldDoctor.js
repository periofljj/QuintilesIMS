import React, { Component } from 'react';
import DoctorInfo from '../components/doctorInfo/doctorInfo';
import PageTitle from '../components/pageTitle/pageTitle';
import SixQuestions from '../components/sixQuestions/sixQuestions';
import TableQuestion from '../components/tablequestion/tablequestion';
import './oldDoctor.css';


class OldDoctorSurvey extends Component {
    constructor(props) {
        super(props);
        // this.save = this.save.bind(this);
    }

    render() {
        return (
            <div>
                <PageTitle></PageTitle>
                <DoctorInfo></DoctorInfo>
                <div className="reporter-info">
                    <div className="reporter-title">一、报告人基本信息</div>
                    <div className="reporter-content">
                         <div className="reporter-line">
                            <div className="reporter-line">
                                <span>A1.医院名称</span> <input type="text"/>
                            </div>
                            <div className="reporter-line">
                                <span>A2.医生姓名</span>
                                <input type="text"/>
                                <span>A3.目前所在科室</span>
                                <input type="text"/>
                            </div>
                            <div className="reporter-line">
                                <span>A4.您本季度是否出诊</span>
                                <label>
                                    <span>1.是</span>
                                    <input type="radio"/>
                                </label>
                                <label>
                                    <span>2.否</span>
                                    <input type="radio"/>
                                </label>
                                <label>
                                    <span>3.从来不出诊</span>
                                    <input type="radio"/>
                                </label>
                            </div>
                            <div className="reporter-line">
                                <div>A5.如果您出门诊:</div>
                                <div>
                                    <span>A5.1每周出</span>
                                    <input type="text"/>
                                    <span>个半天</span>
                                </div>
                                <div>
                                    <span>A5.2每个半天看多少位</span>
                                    <input type="text"/>
                                    <span>恶性肿瘤病人</span>
                                </div>
                            </div>
                            <div className="reporter-line">
                                <span>A8.完成６份病例的日期是</span>
                                <input type="text"/> 年 <input type="text"/> 月 <input type="text"/> 日
                            </div>
                         </div>
                    </div>
                </div>
                <TableQuestion></TableQuestion>
                <SixQuestions></SixQuestions>
            </div>
        );
    }
}

export default OldDoctorSurvey;
