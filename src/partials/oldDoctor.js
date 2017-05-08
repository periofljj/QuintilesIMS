import React, { Component } from 'react';
import DoctorInfo from '../components/doctorInfo/doctorInfo'

class OldDoctorSurvey extends Component {
    constructor(props) {
        super(props);
        // this.save = this.save.bind(this);
    }

    render() {
        return (
            <div>
                <DoctorInfo></DoctorInfo>
            </div>
        );
    }
}

export default OldDoctorSurvey;
