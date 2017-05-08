import React, { Component } from 'react';
import './App.css';
import Button from './components/button/button';
import NewDoctorSurvey from './partials/newDoctor';
import OldDoctorSurvey from './partials/oldDoctor';

class App extends Component {
	constructor(props) {
		super(props);
		this.chooseOldDoc = this.chooseOldDoc.bind(this);
		this.chooseNewDoc = this.chooseNewDoc.bind(this);
		this.state = {
            isChooseType: false,
            surveyType: ""
        };
	}

	componentWillMount() {
		// this.setState({
		// 	isChooseType: 
		// // });
	}

	componentDidMount() {
		// this.setState({
		// 	isChooseType: 
		// // });
	}

	chooseOldDoc() {
		console.log("ssssss");
		this.setState({
			isChooseType: true,
			surveyType: "OLD"
		});
	}

	chooseNewDoc() {
		this.setState({
			isChooseType: true,
			surveyType: "NEW"
		});
	}

	render() {
		const isChooseType = this.state.isChooseType;
		return (
			<div className="App">
				{
					isChooseType ? (
								<div className="content">
									<SurveyContent surveyType={this.state.surveyType}></SurveyContent>
								</div>						
							) : (
							<div className="choose-type">
								<Button class="choose-old-doc" clickSubmit={this.chooseOldDoc} buttonName="选择旧医生"></Button>
								<Button class="choose-new-doc" clickSubmit={this.chooseNewDoc} buttonName="选择新医生"></Button>
							</div>
						)
				}
			</div>
		);
	}
}

function SurveyContent(props) {
	const surveyType = props.surveyType;
	if (surveyType === 'NEW') {
		return <NewDoctorSurvey></NewDoctorSurvey>;
	}
	else {
		return <OldDoctorSurvey></OldDoctorSurvey>;
	}
}

export default App;
