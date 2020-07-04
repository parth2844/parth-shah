import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../../stylesheets/footer.css'

function FootBottom() {
    return (
        <footer className="footer-bar">
            <Container fluid className="p-0">
                <Row noGutters={true} className="justify-content-between p-3">
                    <Col xs={12} sm={4} className="d-flex justify-content-center col-item">Created By: Parth Shah © 2020</Col>
                    <Col xs={12} sm={4} className="d-flex justify-content-center col-item">Hosted using Github Pages</Col>
                    <Col xs={12} sm={4} className="d-flex justify-content-center">          
                        <Col className="d-flex justify-content-center col-item">
                            <a href="https://www.linkedin.com/in/parth-shah97/" target="_blank">LinkedIn</a>
                        </Col>              
                                                
                        <Col className="d-flex justify-content-center col-item">
                            <a href="https://github.com/parth2844" target="_blank">Github</a>
                        </Col>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default FootBottom
