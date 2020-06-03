import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function FootBottom() {
    return (
        <footer className="mt-3">
            <Container fluid className="p-0">
                <Row className="border-top justify-content-between p-3">
                    <Col className="">Created By: Parth Shah © 2020</Col>
                    <Col className="d-flex justify-content-center">Hosted using Github Pages</Col>
                    <Col className="d-flex justify-content-end">                        
                        <a href="https://www.linkedin.com/in/parth-shah97/">LinkedIn</a>                        
                        <a href="https://github.com/parth2844">Github</a>  
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default FootBottom
