import React, { Component } from 'react';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Container from 'react-bootstrap/Container'
import Header from '../components/Header/Header'
import Train from '../components/Train/Train'
import Station from '../components/Station/Station'

import { stations, trains } from '../data'

import './App.css';

class App extends Component {
	state = {
		trainId: -1,
		stationId: -1,
		stations: stations
	}

	trainChangeHandler = (event) => {
		this.setState({
			trainId: parseInt(event.target.value),
			stations: this.getStationsOfTrain(parseInt(event.target.value))
		});
	}

	stationChangeHandler = (event) => {
		this.setState({ stationId: event.target.value });
	}

	getStationsOfTrain = (trainId) => {
		const startStationId = trains[trainId].startStationId;
		const endStationId = trains[trainId].endStationId;
		return startStationId < endStationId ? stations.slice(startStationId, endStationId + 1) : stations.slice(endStationId, startStationId + 1);
	}

	render() {
		return (
			<Container fluid="md" >
				<Row className="justify-content-center">
					<Col md="9" lg="6">
						<Header></Header>
						<div className="border border-primary rounded shadow"
							style={{ padding: "1rem", overflow: "hidden" }}>
							<Train options={trains} value={this.state.trainId} changed={this.trainChangeHandler}></Train>
							<Station options={this.state.stations} value={this.state.stationId} changed={this.stationChangeHandler}></Station>
						</div>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default App;
