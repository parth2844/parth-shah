import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import profile_pic from '../../assets/profile_image.jpg'
import '../../stylesheets/Home.css'

function home() {
    return (
        <div>
            <Row noGutters={true}>
                <Col xs={12} md={6} className="d-flex justify-content-center">
                    <Image src= {profile_pic} roundedCircle alt="Profile Photo" className="main-img"/>
                </Col>
                <Col xs={12} md={6} className="">
                    <Container>
                        <h3>About</h3>
                        <p>Experienced in development of web-based applications in JavaScript, Java and Python</p>
                        <p>Experienced in development of web-based applications in JavaScript, Java and Python</p>
                        <p>Experienced in development of web-based applications in JavaScript, Java and Python</p>
                        <p>Experienced in development of web-based applications in JavaScript, Java and Python</p>
                    </Container>
                </Col>
            </Row>            
        </div>
    )
}

export default home
