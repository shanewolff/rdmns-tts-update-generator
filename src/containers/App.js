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

	render() {
		return (
			<Container fluid="md" >
				<Row className="justify-content-center">
					<Col md="9" lg="6">
						<Header></Header>
						<div className="border border-primary rounded shadow"
							style={{ padding: "1rem", overflow: "hidden" }}>
							<Train trains={trains}></Train>
							<Station stations={stations}></Station>
						</div>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default App;
