import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

const Header = (props) => {
	const style = {
		marginTop: "auto",
		marginBottom: "auto"
	}
	return (
		<Row className="justify-content-center">
			<Col xs="auto" style={style}><Image src="assets/logo.png"></Image></Col>
			<Col className="text-left font-weight-bold" style={style}><h5>RDMNS TTS UPDATE GENERATOR</h5></Col>
		</Row >
	);
}

export default Header;