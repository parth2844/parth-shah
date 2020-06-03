import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function home() {
    return (
        <React.Fragment>
            <Row>
                <Col className="d-flex justify-content-center">
                    Column 1
                </Col>
                <Col className="d-flex justify-content-center">
                    Column 2
                </Col>
            </Row>            
        </React.Fragment>
    )
}

export default home
