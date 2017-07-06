import React, { Component } from 'react';
import Clock from './clock/clock.jsx';
import './App.css';
import {Form, FormControl, Button} from 'react-bootstrap';

export class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			deadline: 'December 25, 2017',
			newDeadline: '',
		};
	}

	changeDeadline() {
		this.setState({
			deadline: this.state.newDeadline,
		})
	}

	render() {
		return (
			<div className="App">
				<div className="App-tittle">Countdown to {this.state.deadline}</div>
				<Clock
					deadline={this.state.deadline}
				/>
				<Form inline>
					<FormControl
					 className="Deadline-Input"
					 placeholder="new date"
					 onChange={event => this.setState({newDeadline: event.target.value})}
				  />
					<Button onClick={() => this.changeDeadline()}>
						Submit
					</Button>
				</Form>
			</div>
		);
	}
}

export default App;
