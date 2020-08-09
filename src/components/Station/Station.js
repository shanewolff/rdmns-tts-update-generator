import React from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

const Station = (props) => {
	const options = props.options.map(station => <option key={station.id} value={station.id}>{station.engName}</option>);
	options.unshift(<option key="-1" value="-1" disabled>Choose your station</option>);
	return (
		<Row>
			<Col>
				<Form.Group>
					<Form.Label className="font-weight-bold">Railway Station</Form.Label>
					<Form.Control as="select" value={props.value} onChange={props.changed}>
						{options}
					</Form.Control>
				</Form.Group>
			</Col>
		</Row>
	);
}

export default Station;