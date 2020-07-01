import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Typical from 'react-typical'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import profile_pic from '../../assets/profile_image.jpg'
import '../../stylesheets/Home.css'

function home() {
    return (
        <div className="home-page pt-3 pb-3">
            <Row noGutters={true}>
                <Col xs={12} md={6} className="">
                    <Row noGutters={true} className="d-flex justify-content-center">
                        <Typical 
                            steps= {["Hi, I'm Parth Shah",1000]}
                            loop = {1}
                            wrapper = "h3"
                        />                        
                    </Row>
                    <Row noGutters={true} className="d-flex justify-content-center">
                        <Image src= {profile_pic} roundedCircle alt="Profile Photo" className="main-img"/>
                    </Row>                 
                </Col>
                <Col xs={12} md={6} className="">
                    <Container className="p-3 pt-4">
                        <Tabs defaultActiveKey="about" >
                            <Tab eventKey="about" title="About" className="p-3">
                                <h3><i>Something About Me...</i></h3>
                                <p>I am a Master of Computer Science student at University of California, Irvine graduating in December 2020.</p>
                                <p>Currently, I am working as a FrontEnd Developer Intern at Kretiva.</p>
                                <p>I am also working on personal side projects to enhance my skills in React, Node and MongoDB.</p>
                                <p>Connect with me on LinkedIn using the link below to know more.</p>
                            </Tab>
                            <Tab eventKey="summary" title="Summary" className="p-3">
                                <h3><i>Short summary of my skills...</i></h3>                                
                                <p>Strong analytical skills in Algorithms, Data Structures and Problem Solving</p>
                                <p>Experienced in development of web-based applications in JavaScript, Java and Python</p>
                                <p>Quick Learner, eager to develop new skills in Software Development</p>
                                <p>Disciplined and consistent performer in team projects</p>
                            </Tab>                            
                        </Tabs>                        
                    </Container>
                </Col>
            </Row>            
        </div>
    )
}

export default home
