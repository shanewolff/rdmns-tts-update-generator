import React from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

const Station = (props) => {
	return (
		<Row>
			<Col>
				<Form.Group>
					<Form.Label className="font-weight-bold">Railway Station</Form.Label>
					<Form.Control as="select">
						<option value="-1" disabled>Choose your station</option>
					</Form.Control>
				</Form.Group>
			</Col>
		</Row>
	);
}

export default Station;