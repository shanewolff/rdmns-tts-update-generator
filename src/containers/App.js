import React, { Component } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container'
import Header from '../components/Header/Header'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class App extends Component {

	render() {
		return (
			<Container fluid="md" >
				<Row className="justify-content-center">
					<Col md="9" lg="6">
						<Header></Header>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default App;
