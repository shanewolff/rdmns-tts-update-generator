import React from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

const Train = (props) => {
	const options = props.options.map(train => <option key={train.id} value={train.id}>{train.engName}</option>);
	options.unshift(<option key="-1" value="-1" disabled>Choose your train</option>);
	return (
		<Row>
			<Col>
				<Form.Group>
					<Form.Label className="font-weight-bold">Train</Form.Label>
					<Form.Control as="select" value={props.value} onChange={props.changed}>
						{options}
					</Form.Control>
				</Form.Group>
			</Col>
		</Row>
	);
}

export default Train;