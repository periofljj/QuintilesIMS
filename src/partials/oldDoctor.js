import React, { Component } from 'react';
import DoctorInfo from '../components/doctorInfo/doctorInfo';
import PageTitle from '../components/pageTitle/pageTitle';

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
            </div>
        );
    }
}

export default OldDoctorSurvey;
